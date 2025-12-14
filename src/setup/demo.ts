import { Collection, ObjectId } from 'mongodb'
import { Wallet } from 'ethers'
import { getCollection } from '../server-side/db'
import { getOrCreateUserByEmail, getUserByEmail, getUserById } from '../server-side/user'
import { createGalaxy, getAllGalaxies, getGalaxyById } from '../server-side/galaxy'
import { getOrCreateProject, getProjectById } from '../server-side/project'
import { createIssue } from '../server-side/issue'
import type { Galaxy } from '../types/galaxy'
import type { Project } from '../types/project'
import { Issue, IssueTag } from '../types/issue'
import { send } from '../../packages/blockchain-gateway/client-side/client'
import type { RequestAddGalaxy, ReplyGalaxyCreation, ReplyError } from '../../packages/blockchain-gateway/server-side/server.types'

// Internal model types for direct MongoDB operations
interface GalaxyModel {
    _id?: ObjectId
    maintainer: ObjectId
    projectLink: ObjectId
    name: string
    description: string
    stars: number
    sunshines: number
    users: number
    donationAmount: number
    x: number
    y: number
    tags?: string[]
}

// Initial galaxy data for demo setup
const initialGalaxies: Omit<Galaxy, '_id' | 'maintainer' | 'projectLink'>[] = [
    {
        name: 'Hyperpayment',
        description: 'A protocol and its implementation to transfer a resource between arbitrary amount parties. Used for example in Ara to distribute donations',
        stars: 0,
        sunshines: 0,
        users: 0,
        donationAmount: 0,
        x: 1300,
        y: 100,
        tags: ['Payment', 'Protocol', 'Blockchain', 'Solidity', 'P2P'],
    },
    {
        name: 'Reflect',
        description: 'A modern reflection library for TypeScript and JavaScript',
        stars: 0,
        sunshines: 0,
        users: 0,
        donationAmount: 0,
        x: 1200,
        y: 400,
        tags: ['TypeScript', 'JavaScript', 'Library', 'Reflection', 'Meta'],
    },
    {
        name: 'Ara App',
        description: 'The frontend application for Ara platform',
        stars: 0,
        sunshines: 0,
        users: 0,
        donationAmount: 0,
        x: 400,
        y: 200,
        tags: ['Frontend', 'React', 'Astro', 'Web3', 'Open Source'],
    },
    {
        name: 'Blockchain Verification Tool',
        description: 'An open-source tool for verifying software components on the blockchain',
        stars: 0,
        sunshines: 0,
        users: 0,
        donationAmount: 0,
        x: 1000,
        y: 600,
        tags: ['Blockchain', 'Verification', 'Security', 'Tool', 'Ethereum'],
    },
    {
        name: 'Galaxy Engine',
        description: 'A rendering engine for creating beautiful galaxy visualizations',
        stars: 0,
        sunshines: 0,
        users: 0,
        donationAmount: 0,
        x: 400,
        y: 500,
        tags: ['Graphics', 'WebGL', 'Visualization', '3D', 'Rendering'],
    },
]

// // Get or create one maintainer of the projects.
// async function setupIssues(projectIds: ObjectId[], existingCount: number, collection: Collection<GalaxyModel>): Promise<void> {
//     try {
//         const maintainerUser = await getUserByEmail('milayter@gmail.com');
//         if (!maintainerUser || !maintainerUser._id) {
//             console.error('Maintainer user not found, skipping issue creation');
//             return;
//         }

//         const maintainerId = new ObjectId(maintainerUser._id!);
//         const issuesCollection = await getCollection<any>('issues');
//         const existingIssuesCount = await issuesCollection.countDocuments({});

//         if (existingIssuesCount === 0) {
//             // Create issues for each galaxy
//             for (let i = 0; i < initialGalaxies.length && i < projectIds.length; i++) {
//                 const galaxy = initialGalaxies[i];
//                 const galaxyId = existingCount > 0
//                     ? (await collection.findOne({ name: galaxy.name }))?._id
//                     : (await collection.findOne({ projectLink: projectIds[i] }))?._id;

//                 if (!galaxyId) {
//                     console.warn(`Galaxy not found for ${galaxy.name}, skipping issue creation`);
//                     continue;
//                 }

//                 // Create 1-2 shining issues
//                 const shiningIssues: Issue[] = [
//                     {
//                         galaxy: galaxyId.toString(),
//                         uri: `/issue?galaxy=${projectIds[i].toString()}`,
//                         title: `Improve ${galaxy.name} performance`,
//                         description: `This issue focuses on optimizing the performance of ${galaxy.name}. We need to reduce load times and improve overall responsiveness.`,
//                         tags: [IssueTag.IMPROVEMENT],
//                         maintainer: maintainerId.toString(),
//                         createdTime: Math.floor(Date.now() / 1000),
//                         sunshines: 150 + Math.floor(Math.random() * 100),
//                         users: [
//                             {
//                                 username: 'demo-user-1',
//                                 starshineAmount: 50,
//                                 transactionDate: Math.floor((Date.now() - 2 * 24 * 60 * 60 * 1000) / 1000)
//                             },
//                             {
//                                 username: 'demo-user-2',
//                                 starshineAmount: 100,
//                                 transactionDate: Math.floor((Date.now() - 1 * 24 * 60 * 60 * 1000) / 1000)
//                             }
//                         ]
//                     }
//                 ];

//                 // Add second shining issue for some galaxies
//                 if (i < 3) {
//                     shiningIssues.push({
//                         galaxy: galaxyId.toString(),
//                         uri: `/issue?galaxy=${projectIds[i].toString()}`,
//                         title: `Add new feature to ${galaxy.name}`,
//                         description: `This issue proposes adding a new feature that would enhance ${galaxy.name}'s capabilities.`,
//                         tags: [IssueTag.FEATURE],
//                         maintainer: maintainerId.toString(),
//                         createdTime: Math.floor(Date.now() / 1000),
//                         sunshines: 200 + Math.floor(Math.random() * 150),
//                         users: [
//                             {
//                                 username: 'demo-user-3',
//                                 starshineAmount: 75,
//                                 transactionDate: Math.floor((Date.now() - 3 * 24 * 60 * 60 * 1000) / 1000)
//                             },
//                             {
//                                 username: 'demo-user-4',
//                                 starshineAmount: 125,
//                                 transactionDate: Math.floor((Date.now() - 1 * 24 * 60 * 60 * 1000) / 1000)
//                             }
//                         ]
//                     });
//                 }

//                 // Create public-backlog issues (without sunshines)
//                 const publicBacklogIssues: Issue[] = [
//                     {
//                         galaxy: galaxyId.toString(),
//                         uri: `/issue?galaxy=${projectIds[i].toString()}`,
//                         title: `Fix minor bug in ${galaxy.name}`,
//                         description: `This is a minor bug that doesn't affect core functionality but should be addressed.`,
//                         tags: [IssueTag.BUG],
//                         maintainer: maintainerId.toString(),
//                         createdTime: Math.floor(Date.now() / 1000),
//                         sunshines: 0,
//                         users: [
//                             {
//                                 username: 'demo-user-5',
//                                 starshineAmount: 0,
//                                 transactionDate: Math.floor((Date.now() - 5 * 24 * 60 * 60 * 1000) / 1000)
//                             }
//                         ]
//                     },
//                     {
//                         galaxy: galaxyId.toString(),
//                         uri: `/issue?galaxy=${projectIds[i].toString()}`,
//                         title: `Documentation update for ${galaxy.name}`,
//                         description: `Update the documentation to reflect recent changes and improvements.`,
//                         tags: [IssueTag.WISH],
//                         maintainer: maintainerId.toString(),
//                         createdTime: Math.floor(Date.now() / 1000),
//                         sunshines: 0,
//                         users: [
//                             {
//                                 username: 'demo-user-6',
//                                 starshineAmount: 0,
//                                 transactionDate: Math.floor((Date.now() - 4 * 24 * 60 * 60 * 1000) / 1000)
//                             }
//                         ]
//                     }
//                 ];

//                 // Create all issues
//                 const allIssues = [...shiningIssues, ...publicBacklogIssues];
//                 for (const issueData of allIssues) {
//                     await createIssue(issueData);
//                 }

//                 console.log(`✅ Created ${allIssues.length} issues for ${galaxy.name} (${shiningIssues.length} shining, ${publicBacklogIssues.length} public backlog)`);
//             }
//         } else {
//             console.log(`✅ Issues already exist (${existingIssuesCount} found)`)
//         }
//     } catch (error) {
//         console.error('Error setting up demo galaxies:', error)
//         throw error
//     }
// }

/**
 * Ensure all users have private keys
 */
async function ensureUsersHavePrivateKeys(): Promise<void> {
    try {
        const collection = await getCollection<any>('users')
        const users = await collection.find({}).toArray()
        let updatedCount = 0

        for (const user of users) {
            if (!user.demoPrivateKey) {
                const wallet = Wallet.createRandom()
                await collection.updateOne(
                    { _id: user._id },
                    { $set: { demoPrivateKey: wallet.privateKey } }
                )
                updatedCount++
            }
        }

        if (updatedCount > 0) {
            console.log(`✅ Generated private keys for ${updatedCount} users`)
        } else {
            console.log(`✅ All users already have private keys`)
        }
    } catch (error) {
        console.error('Error ensuring users have private keys:', error)
        throw error
    }
}

/**
 * Setup demo galaxies - creates projects first, then links galaxies
 */
export async function setup(): Promise<void> {
    try {
        // Step 0: Ensure all users have private keys (must be done before creating galaxies)
        await ensureUsersHavePrivateKeys()

        // Get or create one maintainer of the projects.
        const maintainerId = await getOrCreateUserByEmail('milayter@gmail.com')
        console.log(`✅ Maintainer user ID: ${maintainerId}`)

        // Step 1: Create projects for each initial galaxy
        const projectIds: ObjectId[] = []
        const now = Math.floor(Date.now() / 1000)
        for (const galaxy of initialGalaxies) {
            const projectData: Omit<Project, '_id'> = {
                uri: `/project?galaxy=${galaxy.name.toLowerCase().replace(/\s+/g, '-')}`,
                forkLines: [],
                socialLinks: [
                    {
                        label: 'GitHub',
                        uri: `https://github.com/example/${galaxy.name.toLowerCase().replace(/\s+/g, '-')}`,
                        type: 'github'
                    },
                    {
                        label: 'Blockchain Explorer',
                        uri: `https://etherscan.io/address/0x${Math.random().toString(16).substring(2, 42)}`,
                        type: 'blockchain-explorer'
                    },
                    {
                        label: 'Documentation',
                        uri: `https://docs.example.com/${galaxy.name.toLowerCase().replace(/\s+/g, '-')}`,
                        type: 'documentation'
                    }
                ],
                createdAt: now,
                lastCommitId: undefined,
                lastCommitUpdateTime: undefined
            }

            const projectIdString = await getOrCreateProject(projectData)
            const projectId = new ObjectId(projectIdString)
            projectIds.push(projectId)
            console.log(`✅ Project created/linked for ${galaxy.name}: ${projectIdString}`)
        }

        // Step 2: Get galaxies collection
        const collection = await getCollection<GalaxyModel>('galaxies')
        const existingCount = await collection.countDocuments({})

        if (existingCount === 0) {
            // Create new galaxies with projectLink references
            const galaxiesToCreate: Galaxy[] = initialGalaxies.map((galaxy, index) => ({
                ...galaxy,
                maintainer: maintainerId.toString(),
                projectLink: projectIds[index].toString(),
            }))

            // Create galaxies using the public API
            for (const galaxy of galaxiesToCreate) {
                await createGalaxy(galaxy)
            }
            console.log(`✅ Created ${galaxiesToCreate.length} demo galaxies`)
        } else {
            // Update existing galaxies with projectLink if they don't have it
            const existingGalaxies = await collection.find({}).toArray()
            let updatedCount = 0

            for (let i = 0; i < existingGalaxies.length && i < initialGalaxies.length; i++) {
                const galaxy = existingGalaxies[i]
                if (!galaxy.projectLink) {
                    await collection.updateOne(
                        { _id: galaxy._id },
                        { $set: { projectLink: projectIds[i] } }
                    )
                    updatedCount++
                }
            }

            if (updatedCount > 0) {
                console.log(`✅ Updated ${updatedCount} existing galaxies with project links`)
            } else {
                console.log(`✅ Galaxies already exist and have project links (${existingCount} found)`)
            }
        }

        // Step 3: Check and create galaxies on blockchain if needed
        await ensureGalaxiesOnBlockchain(collection)

        // // Step 4: Create demo issues for each galaxy
        // await setupIssues(projectIds, existingCount, collection)
    } catch (error) {
        console.error('Error setting up demo galaxies:', error)
        throw error
    }
}

/**
 * Ensure all galaxies exist on the blockchain
 */
async function ensureGalaxiesOnBlockchain(collection: Collection<GalaxyModel>): Promise<void> {
    try {
        const galaxies = await getAllGalaxies()
        const maintainerUser = await getUserByEmail('milayter@gmail.com')

        if (!maintainerUser || !maintainerUser._id || !maintainerUser.demoPrivateKey) {
            console.error('Maintainer user not found or missing private key, skipping blockchain setup')
            return
        }

        // Get maintainer wallet to derive address
        const maintainerWallet = new Wallet(maintainerUser.demoPrivateKey)
        const maintainerAddress = maintainerWallet.address

        let createdCount = 0
        for (const galaxy of galaxies) {
            // Skip if already has blockchainId
            if (galaxy.blockchainId) {
                continue
            }

            // Get project to extract GitHub URL
            const project = await getProjectById(galaxy.projectLink)
            if (!project) {
                console.warn(`Project not found for galaxy ${galaxy.name}, skipping blockchain creation`)
                continue
            }

            // Find GitHub link
            const githubLink = project.socialLinks?.find(link => link.type === 'github')
            const repoUrl = githubLink?.uri || `https://github.com/example/${galaxy.name.toLowerCase().replace(/\s+/g, '-')}`

            // Construct issues URL
            const issuesUrl = `https://app.ara.foundation/project/issues?galaxy=${galaxy._id}`

            // Generate random Ethereum account (20 bytes) and convert to 32-byte hex string
            const randomWallet = Wallet.createRandom()
            const address20Bytes = randomWallet.address // 0x + 40 hex chars = 20 bytes
            // Convert to 32-byte hex string (64 hex chars + 0x prefix)
            const galaxyId32Bytes = `0x${address20Bytes.slice(2).padStart(64, '0')}`

            // Prepare addGalaxy request
            const request: RequestAddGalaxy = {
                cmd: "addGalaxy",
                params: {
                    owner: maintainerAddress,
                    repoUrl: repoUrl,
                    issuesUrl: issuesUrl,
                    name: galaxy.name,
                    id: galaxyId32Bytes, // string, not number
                    minX: galaxy.x,
                    maxX: galaxy.x + 100, // Add appropriate range
                    minY: galaxy.y,
                    maxY: galaxy.y + 100, // Add appropriate range
                }
            }

            try {
                // Call blockchain gateway
                const reply = await send(request)

                if ('error' in reply) {
                    const errorReply = reply as ReplyError
                    console.error(`Error creating galaxy ${galaxy.name} on blockchain:`, errorReply.error)
                    continue
                }

                const successReply = reply as ReplyGalaxyCreation
                // Update galaxy in database with blockchainId and blockchainTx
                const galaxyObjectId = galaxy._id ? new ObjectId(galaxy._id) : null
                if (galaxyObjectId) {
                    await collection.updateOne(
                        { _id: galaxyObjectId },
                        {
                            $set: {
                                blockchainId: galaxyId32Bytes,
                                blockchainTx: successReply.params.txHash
                            }
                        }
                    )
                    console.log(`✅ Created galaxy ${galaxy.name} on blockchain: ${galaxyId32Bytes}, tx: ${successReply.params.txHash}`)
                    createdCount++
                }
            } catch (error) {
                console.error(`Error calling blockchain gateway for galaxy ${galaxy.name}:`, error)
                // Continue with other galaxies
            }
        }

        if (createdCount > 0) {
            console.log(`✅ Created ${createdCount} galaxies on blockchain`)
        } else {
            console.log(`✅ All galaxies already exist on blockchain`)
        }
    } catch (error) {
        console.error('Error ensuring galaxies on blockchain:', error)
        throw error
    }
}

