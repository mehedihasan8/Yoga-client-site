import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signeInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const upDateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            localStorage.setItem("access-token", res.data.token);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
        setUser(currentUser);
      }
    });
    return () => {
      return unSubcribe();
    };
  }, []);

  console.log(user);

  const authInfo = {
    user,
    loading,
    createUser,
    upDateUserProfile,
    signeInUser,
    logOut,
    signInGoogle,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
