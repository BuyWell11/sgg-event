import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthorizationService } from '@/api/AuthorizationService';
import User from '@/model/User';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        name: { label: 'Name', type: 'name', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials.password) return null;
        return await AuthorizationService.login(credentials.name, credentials.password);
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after page
      if (user) {
        token.id = (user as User).id;
        token.name = (user as User).name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        name: token.name as string,
      };
      return session;
    },
  },
};
