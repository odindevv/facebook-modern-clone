import { useEffect, useState } from 'react';
import { userSearch } from '../services/userService';
import type { User } from '../types';

export function useProfileDetails(username: string) {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchUserData = async () => {
      if (!username || username === '') return;
      try {
        const usuario = await userSearch(username);
        setUserData(usuario);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [username]);

  return { userData, loading };
}
