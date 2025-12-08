import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { getDemoByEmail, createDemo, updateDemoStep } from '@/demo-runtime-cookies/server-side'
import { emailToNickname, createUsers, getUserByIds, getUserById, updateUserSunshines } from '@/scripts/user'
import { getGalaxyById, getGalaxyByName, updateGalaxySunshines } from '@/scripts/galaxy'
import { processPayment } from '@/scripts/payment-gateway'
import { getIssuesByGalaxy, getShiningIssues, getPublicBacklogIssues } from '@/scripts/issue'
import type { User, Roles } from '@/types/user'
import type { Galaxy } from '@/types/galaxy'
import type { Issue, IssueUser, IssueStat, IssueStatType } from '@/types/issue'

/**
 * Generate a random user with profile picture from DiceBear
 */
function generateRandomUser(role: Roles, index: number): User {
    const randomSeed = `${role}-${index}-${Date.now()}-${Math.random()}`
    const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${randomSeed}&size=256`

    // Generate random names for demo
    const names = [
        'Alex Johnson',
        'Sam Taylor',
        'Jordan Smith',
        'Casey Brown',
        'Morgan Davis',
        'Riley Wilson',
        'Avery Martinez',
        'Quinn Anderson',
        'Sage Thompson',
        'River Garcia'
    ]

    const randomName = names[Math.floor(Math.random() * names.length)]

    // Generate random stats
    const sunshines = Math.floor(Math.random() * 50000) + 10000
    const stars = Math.random() * 100 + 10

    return {
        src: avatarUrl,
        alt: `${role} avatar`,
        uri: '/profile?nickname=' + randomName.replace(' ', '-').toLowerCase(),
        nickname: randomName.replace(' ', '-').toLowerCase(),
        sunshines,
        stars: Math.round(stars * 100) / 100,
        role: role as Roles,
        balance: 0,
    }
}

/**
 * Create three demo users with different roles
 */
async function generateDemoUsers(email: string): Promise<User[]> {
    const users = [{
        email,
        role: 'user',
        nickname: emailToNickname(email),
        src: `https://api.dicebear.com/9.x/avataaars/svg?seed=${email}&size=256`,
        alt: 'Donator avatar',
        uri: '/profile?email=' + emailToNickname(email),
    } as User,
    generateRandomUser('maintainer', 1) as User,
    generateRandomUser('contributor', 2) as User
    ]
    const createdIds = await createUsers(users)
    return createdIds.map((id, index) => ({
        ...users[index],
        _id: id,
    }))

}

export const server = {
    start: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email(),
        }),
        handler: async ({ email }): Promise<{ success: boolean; users?: User[]; error?: string }> => {
            try {
                // Check if demo exists
                const existingDemo = await getDemoByEmail(email)

                if (existingDemo) {
                    // Return existing users
                    const users = await getUserByIds(existingDemo.users)
                    // Convert ObjectId to string for serialization
                    return {
                        success: true,
                        users: users,
                    }
                }

                // Create new demo with three users
                const users = await generateDemoUsers(email)
                const created = await createDemo(email, users.map(user => user._id!))

                if (!created) {
                    return {
                        success: false,
                        error: 'Failed to create a new demo',
                    }
                }

                return {
                    success: true,
                    users: users,
                }
            } catch (error) {
                console.error('Error in demo start action:', error)
                return {
                    success: false,
                    error: 'An error occurred while starting a new demo',
                }
            }
        },
    }),
    getDemoStep: defineAction({
        accept: 'json',
        input: z.object({
            email: z.string().email(),
        }),
        handler: async ({ email }): Promise<{ success: boolean; step?: number; error?: string }> => {
            try {
                const demo = await getDemoByEmail(email)
                if (!demo) {
                    return {
                        success: false,
                        error: 'Demo not found',
                    }
                }
                return {
                    success: true,
                    step: demo.step,
                }
            } catch (error) {
                console.error('Error getting demo step:', error)
                return {
                    success: false,
                    error: 'An error occurred while getting demo step',
                }
            }
        },
    }),
    getGalaxy: defineAction({
        accept: 'json',
        input: z.object({
            galaxyId: z.string(),
        }),
        handler: async ({ galaxyId }): Promise<{ success: boolean; galaxy?: Galaxy; error?: string }> => {
            try {
                // Try to get by ID first
                let galaxy = await getGalaxyById(galaxyId)

                // If not found by ID, try by name
                if (!galaxy) {
                    galaxy = await getGalaxyByName(galaxyId)
                }

                if (!galaxy) {
                    return {
                        success: false,
                        error: 'Galaxy not found',
                    }
                }

                // Convert ObjectId to string for serialization
                const serializedGalaxy = {
                    ...galaxy,
                    _id: galaxy._id?.toString(),
                    maintainer: galaxy.maintainer?.toString(),
                }

                return {
                    success: true,
                    galaxy: serializedGalaxy as any,
                }
            } catch (error) {
                console.error('Error getting galaxy:', error)
                return {
                    success: false,
                    error: 'An error occurred while getting galaxy',
                }
            }
        },
    }),
    obtainSunshines: defineAction({
        accept: 'json',
        input: z.object({
            galaxyId: z.string(),
            userId: z.string(),
            email: z.string().email(),
        }),
        handler: async ({ galaxyId, userId, email }): Promise<{ success: boolean; sunshines?: number; totalSunshines?: number; error?: string }> => {
            try {
                // Get demo and validate step
                const demo = await getDemoByEmail(email)
                if (!demo) {
                    return {
                        success: false,
                        error: 'Demo not found',
                    }
                }

                // Validate step is 0, undefined, or null (obtain-sunshines-step-index)
                if (demo.step !== undefined && demo.step !== null && demo.step !== 0) {
                    return {
                        success: false,
                        error: 'Invalid step. Can only obtain sunshines at step 0',
                    }
                }

                // Get galaxy
                let galaxy = await getGalaxyById(galaxyId)
                if (!galaxy) {
                    return {
                        success: false,
                        error: 'Galaxy not found',
                    }
                }

                // Get user
                const user = await getUserById(userId)
                if (!user) {
                    return {
                        success: false,
                        error: 'User not found',
                    }
                }

                // Process payment ($50)
                const donationAmount = 50;
                const paymentResult = await processPayment(donationAmount, 'USD')
                if (!paymentResult.success) {
                    return {
                        success: false,
                        error: 'Payment processing failed',
                    }
                }

                // Convert $50 to sunshines
                const sunshinesAmount = donationAmount * 1.8

                // Update user sunshines
                const userUpdated = await updateUserSunshines(userId, sunshinesAmount)
                if (!userUpdated) {
                    return {
                        success: false,
                        error: 'Failed to update user sunshines',
                    }
                }

                // Update galaxy sunshines
                const galaxyIdObj = galaxy._id || galaxyId
                const galaxyUpdated = await updateGalaxySunshines(galaxyIdObj, sunshinesAmount)
                if (!galaxyUpdated) {
                    return {
                        success: false,
                        error: 'Failed to update galaxy sunshines',
                    }
                }

                // Increment demo step (set to 1)
                const stepUpdated = await updateDemoStep(email, 1)
                if (!stepUpdated) {
                    return {
                        success: false,
                        error: 'Failed to update demo step',
                    }
                }

                // Calculate total sunshines
                const currentSunshines = user.sunshines || 0
                const totalSunshines = currentSunshines + sunshinesAmount

                return {
                    success: true,
                    sunshines: sunshinesAmount,
                    totalSunshines,
                }
            } catch (error) {
                console.error('Error in obtain sunshines action:', error)
                return {
                    success: false,
                    error: 'An error occurred while obtaining sunshines',
                }
            }
        },
    }),
    getIssuesByGalaxy: defineAction({
        input: z.object({
            galaxyId: z.string(),
        }),
        handler: async ({ galaxyId }): Promise<{ success: boolean; issues?: Issue[]; error?: string }> => {
            try {
                const issues = await getIssuesByGalaxy(galaxyId);
                // Serialize IssueModel to IssueModelClient (convert ObjectIds and Dates to unix timestamps)
                const serializedIssues: Issue[] = issues.map(issue => ({
                    _id: issue._id?.toString(),
                    galaxy: issue.galaxy?.toString() || '',
                    uri: issue.uri,
                    title: issue.title,
                    description: issue.description,
                    tags: issue.tags,
                    maintainer: issue.maintainer?.toString() || '',
                    categoryId: issue.categoryId,
                    stats: issue.stats ? Object.entries(issue.stats).reduce((acc, [key, stat]) => {
                        if (stat) {
                            acc[key as IssueStatType] = {
                                type: stat.type,
                                hint: typeof stat.hint === 'string' ? stat.hint : String(stat.hint || ''),
                                filled: stat.filled,
                                children: typeof stat.children === 'number' ? stat.children : (typeof stat.children === 'string' ? stat.children : String(stat.children || ''))
                            } as IssueStat;
                        }
                        return acc;
                    }, {} as { [key in IssueStatType]?: IssueStat }) : undefined,
                    createdTime: issue.createdTime ? (issue.createdTime instanceof Date ? Math.floor(issue.createdTime.getTime() / 1000) : (typeof issue.createdTime === 'number' ? issue.createdTime : Math.floor(new Date(issue.createdTime).getTime() / 1000))) : undefined,
                    sunshines: issue.sunshines,
                    users: issue.users?.map(user => ({
                        username: user.username,
                        starshineAmount: user.starshineAmount,
                        transactionDate: user.transactionDate instanceof Date ? Math.floor(user.transactionDate.getTime() / 1000) : (typeof user.transactionDate === 'number' ? user.transactionDate : Math.floor(new Date(user.transactionDate).getTime() / 1000))
                    } as IssueUser)) || []
                }));
                return {
                    success: true,
                    issues: serializedIssues,
                };
            } catch (error) {
                console.error('Error getting issues by galaxy:', error);
                return {
                    success: false,
                    error: 'An error occurred while getting issues',
                };
            }
        },
    }),
    getShiningIssues: defineAction({
        input: z.object({
            galaxyId: z.string(),
        }),
        handler: async ({ galaxyId }): Promise<{ success: boolean; data?: Issue[]; error?: string }> => {
            try {
                const issues = await getShiningIssues(galaxyId);
                // Serialize IssueModel to IssueModelClient (convert ObjectIds and Dates to unix timestamps)
                const serializedIssues: Issue[] = issues.map(issue => ({
                    _id: issue._id?.toString(),
                    galaxy: issue.galaxy?.toString() || '',
                    uri: issue.uri,
                    title: issue.title,
                    description: issue.description,
                    tags: issue.tags,
                    maintainer: issue.maintainer?.toString() || '',
                    categoryId: issue.categoryId,
                    stats: issue.stats ? Object.entries(issue.stats).reduce((acc, [key, stat]) => {
                        if (stat) {
                            acc[key as IssueStatType] = {
                                type: stat.type,
                                hint: typeof stat.hint === 'string' ? stat.hint : String(stat.hint || ''),
                                filled: stat.filled,
                                children: typeof stat.children === 'number' ? stat.children : (typeof stat.children === 'string' ? stat.children : String(stat.children || ''))
                            } as IssueStat;
                        }
                        return acc;
                    }, {} as { [key in IssueStatType]?: IssueStat }) : undefined,
                    createdTime: issue.createdTime ? (issue.createdTime instanceof Date ? Math.floor(issue.createdTime.getTime() / 1000) : (typeof issue.createdTime === 'number' ? issue.createdTime : Math.floor(new Date(issue.createdTime).getTime() / 1000))) : undefined,
                    sunshines: issue.sunshines,
                    users: issue.users?.map(user => ({
                        username: user.username,
                        starshineAmount: user.starshineAmount,
                        transactionDate: user.transactionDate instanceof Date ? Math.floor(user.transactionDate.getTime() / 1000) : (typeof user.transactionDate === 'number' ? user.transactionDate : Math.floor(new Date(user.transactionDate).getTime() / 1000))
                    } as IssueUser)) || []
                }));
                return {
                    success: true,
                    data: serializedIssues,
                };
            } catch (error) {
                console.error('Error getting shining issues:', error);
                return {
                    success: false,
                    error: 'An error occurred while getting shining issues',
                };
            }
        },
    }),
    getPublicBacklogIssues: defineAction({
        input: z.object({
            galaxyId: z.string(),
        }),
        handler: async ({ galaxyId }): Promise<{ success: boolean; data?: Issue[]; error?: string }> => {
            try {
                const issues = await getPublicBacklogIssues(galaxyId);
                // Serialize IssueModel to IssueModelClient (convert ObjectIds and Dates to unix timestamps)
                const serializedIssues: Issue[] = issues.map(issue => ({
                    _id: issue._id?.toString(),
                    galaxy: issue.galaxy?.toString() || '',
                    uri: issue.uri,
                    title: issue.title,
                    description: issue.description,
                    tags: issue.tags,
                    maintainer: issue.maintainer?.toString() || '',
                    categoryId: issue.categoryId,
                    stats: issue.stats ? Object.entries(issue.stats).reduce((acc, [key, stat]) => {
                        if (stat) {
                            acc[key as IssueStatType] = {
                                type: stat.type,
                                hint: typeof stat.hint === 'string' ? stat.hint : String(stat.hint || ''),
                                filled: stat.filled,
                                children: typeof stat.children === 'number' ? stat.children : (typeof stat.children === 'string' ? stat.children : String(stat.children || ''))
                            } as IssueStat;
                        }
                        return acc;
                    }, {} as { [key in IssueStatType]?: IssueStat }) : undefined,
                    createdTime: issue.createdTime ? (issue.createdTime instanceof Date ? Math.floor(issue.createdTime.getTime() / 1000) : (typeof issue.createdTime === 'number' ? issue.createdTime : Math.floor(new Date(issue.createdTime).getTime() / 1000))) : undefined,
                    sunshines: issue.sunshines,
                    users: issue.users?.map(user => ({
                        username: user.username,
                        starshineAmount: user.starshineAmount,
                        transactionDate: user.transactionDate instanceof Date ? Math.floor(user.transactionDate.getTime() / 1000) : (typeof user.transactionDate === 'number' ? user.transactionDate : Math.floor(new Date(user.transactionDate).getTime() / 1000))
                    } as IssueUser)) || []
                }));
                return {
                    success: true,
                    data: serializedIssues,
                };
            } catch (error) {
                console.error('Error getting public backlog issues:', error);
                return {
                    success: false,
                    error: 'An error occurred while getting public backlog issues',
                };
            }
        },
    }),
    getUserById: defineAction({
        input: z.object({
            userId: z.string(),
        }),
        handler: async ({ userId }): Promise<{ success: boolean; data?: User; error?: string }> => {
            try {
                const user = await getUserById(userId);
                if (user) {
                    return {
                        success: true,
                        data: user,
                    };
                }
                return {
                    success: false,
                    error: 'User not found',
                };
            } catch (error) {
                console.error('Error getting user by id:', error);
                return {
                    success: false,
                    error: 'An error occurred while getting user',
                };
            }
        },
    }),
}

