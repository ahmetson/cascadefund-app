import { createAuthClient } from 'better-auth/react';
import { usernameClient } from 'better-auth/client/plugins';
import { a as actions } from './virtual_BuMUpOlX.mjs';

const authClient = createAuthClient({
  plugins: [
    usernameClient()
  ]
});
const { signIn, signUp, signOut, useSession } = authClient;
async function getAuthUserById(userId) {
  try {
    const result = await actions.getAuthUserById({ userId });
    if (result.data?.success && result.data.data) {
      return result.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error getting auth user by id:", error);
    return null;
  }
}

export { authClient as a, getAuthUserById as g };
