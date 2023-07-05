import { useEffect, useState } from "react";
import { auth } from "../initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return user;
};
