import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../config/firebase";
import firebase from "firebase/compat/app";

const PrivateRoutes = () => {
  const [authState, setAuthState] = useState<{
    loading: boolean;
    user: firebase.User | null;
  }>({
    loading: true,
    user: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user);
      setAuthState({ loading: false, user });
    });
    return unsubscribe;
  }, []);

  if (authState.loading) {
    return <p>Loading...</p>;
  }

  return authState.user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
