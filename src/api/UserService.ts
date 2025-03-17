import { PATH_BACKEND } from '@/routes/pathsBackend';
import { GameDTO } from '@/model/Game';
import { SggEventDTO } from '@/model/SggEvent';
import SggUser, { UserUpdateDTO } from '@/model/User';

export const UserService = {
  async getUser(id: string): Promise<SggUser> {
    try {
      const response = await fetch(PATH_BACKEND.users.root + '/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Get user failed: ${response.statusText}`);
      }

      return (await response.json()) as SggUser;
    } catch (error) {
      throw new Error(`Get error: ${(error as Error).message}`);
    }
  },

  async getUsers(): Promise<SggUser[]> {
    try {
      const response = await fetch(PATH_BACKEND.users.root, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Get user failed: ${response.statusText}`);
      }

      return (await response.json()) as SggUser[];
    } catch (error) {
      throw new Error(`Get error: ${(error as Error).message}`);
    }
  },

  async addGame(id: string, game: GameDTO): Promise<SggUser> {
    try {
      const response = await fetch(PATH_BACKEND.users.root + '/' + id + '/games', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(game),
      });

      if (!response.ok) {
        throw new Error(`Adding game failed: ${response.statusText}`);
      }

      return (await response.json()) as SggUser;
    } catch (error) {
      throw new Error(`PATCH error: ${(error as Error).message}`);
    }
  },

  async addEvent(id: string, event: SggEventDTO): Promise<SggUser> {
    try {
      const response = await fetch(PATH_BACKEND.users.root + '/' + id + '/events', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        throw new Error(`Adding event failed: ${response.statusText}`);
      }

      return (await response.json()) as SggUser;
    } catch (error) {
      throw new Error(`PATCH error: ${(error as Error).message}`);
    }
  },

  async updateUser(id: string, dto: UserUpdateDTO): Promise<SggUser> {
    try {
      const response = await fetch(PATH_BACKEND.users.root + '/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(dto),
      });

      if (!response.ok) {
        throw new Error(`Adding event failed: ${response.statusText}`);
      }

      return (await response.json()) as SggUser;
    } catch (error) {
      throw new Error(`PATCH error: ${(error as Error).message}`);
    }
  },
};
