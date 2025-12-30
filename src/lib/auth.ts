import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins"
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDb } from "@/server-side/db"; // your mongodb client
import { createStarByUserId } from "@/server-side/star";

let authInstance: ReturnType<typeof betterAuth> | null = null;

function createAuth() {
    if (authInstance) {
        return authInstance;
    }
    
    // Get database synchronously if available, otherwise create a promise
    // This will be resolved when auth is first used
    const dbPromise = getDb();
    
    authInstance = betterAuth({
        emailAndPassword: {
            enabled: true,
        },
        socialProviders: {
            github: {
                clientId: process.env.AUTH_GITHUB_ID as string,
                clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            },
        },
        plugins: [
            username(),
        ],
        database: mongodbAdapter(dbPromise as any),
        databaseHooks: {
            user: {
                create: {
                    after: async (user) => {
                        try {
                            const starId = await createStarByUserId(user.id)
                            console.log(`Star created for ${user.email} with id ${starId}`);
                        } catch (error) {
                            console.error('Error creating star on user create:', error)
                        }
                    }
                },
            },
        },
    });
    
    return authInstance;
}

// Export auth - initialize on first access
export const auth = createAuth();

