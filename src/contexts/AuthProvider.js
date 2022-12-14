import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark");
    setDark(darkMode);
  }, []);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const providerSignUpAndLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const validationUser = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  const userDelete = () => {
    deleteUser(auth.currentUser);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    dark,
    setDark,
    signUp,
    login,
    providerSignUpAndLogin,
    forgotPassword,
    validationUser,
    updateUser,
    userDelete,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
