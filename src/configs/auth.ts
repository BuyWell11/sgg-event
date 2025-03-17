import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthorizationService } from '@/api/AuthorizationService';
import User from '@/model/User';
import SggEvent from '@/model/SggEvent';
import Game from '@/model/Game';
import { UserService } from '@/api/UserService';

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
    async jwt({ token, user, trigger }) {
      // Persist the OAuth access_token to the token right after page
      if (user) {
        token.id = (user as User).id;
        token.name = (user as User).name;
        token.games = (user as User).games;
        token.events = (user as User).events;
        token.logo = (user as User).logo;
        token.channel = (user as User).channel;
        token.background = (user as User).background;
        token.game = (user as User).game;
        token.items = (user as User).items;
      }
      if (trigger === 'update') {
        const freshData = await UserService.getUser(token.id);
        return { ...token, ...freshData };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        name: token.name as string,
        games: token.games as Game[],
        events: token.events as SggEvent[],
        logo: token.logo as string,
        channel: token.channel as string,
        background: token.background as string,
        game: token.game as string,
        items: token.items as string[],
      };
      return session;
    },
  },
};
