import User from '@/model/User';
import { PATH_BACKEND } from '@/routes/pathsBackend';

export const AuthorizationService = {
  /**
   * Login user with credentials
   * @param username - User's login
   * @param password - User's password
   * @returns Promise with User object or throws error
   */
  async login(username: string, password: string): Promise<User> {
    try {
      const response = await fetch(PATH_BACKEND.auth.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      return (await response.json()) as User;
    } catch (error) {
      throw new Error(`Authentication error: ${(error as Error).message}`);
    }
  },
};
