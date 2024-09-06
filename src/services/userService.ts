import { User } from '../types';

export async function userSearch(username: string): Promise<User | null> {
  try {
    const response = await fetch('/mocks/users.json');
    const data: User[] = await response.json();
    const user = data.find((user) => user.username === username);
    return user || null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
