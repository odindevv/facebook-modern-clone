import { LoginFormValues } from '../types';

export const validateUser = async (email: string, password: string) => {
  try {
    const response = await fetch('/mocks/users.json');
    if (!response.ok) throw new Error('Failed to fetch users');
    const users = await response.json();

    const user = users.find(
      (user: LoginFormValues) =>
        user.email === email && user.password === password
    );

    return user || null;
  } catch (error) {
    console.log(error);
  }
};
