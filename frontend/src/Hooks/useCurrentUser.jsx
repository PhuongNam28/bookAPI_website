import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useUserStore } from '../lib/userStore';

function useCurrentUser() {
  const { currentUser, fetchUserInfo, setCurrentUser, setLoading } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid); 
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    
    return () => {
      unSub();
    };
  }, [fetchUserInfo, setCurrentUser, setLoading]);

  return currentUser;
}

export default useCurrentUser;
