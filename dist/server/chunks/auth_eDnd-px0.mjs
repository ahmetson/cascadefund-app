import { betterAuth } from 'better-auth';
import { username } from 'better-auth/plugins';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { a as getDb } from './db_OZ8_cRuI.mjs';
import { d as createStarByUserId } from './star_BqlfetDB.mjs';

const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }
  },
  plugins: [
    username()
  ],
  database: mongodbAdapter(await getDb()),
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          try {
            const starId = await createStarByUserId(user.id);
            console.log(`Star created for ${user.email} with id ${starId}`);
          } catch (error) {
            console.error("Error creating star on user create:", error);
          }
        }
      }
    }
  }
});

export { auth as a };
