import React, { createContext, useEffect, useState } from "react";
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
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [instructors, setInstructors] = useState([]);
  const [yogaInstructors, setYogaInstructors] = useState([]);
  const [yogaClasses, setYogaClasses] = useState([]);

  //popular class api
  useEffect(() => {
    setTimeout(() => {
      fetch("https://summer-camp-server-ecru.vercel.app/popular-classes")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
      setLoading(false);
    }, 4000);
  }, []);

  //popular instructors api
  useEffect(() => {
    setTimeout(() => {
      fetch("https://summer-camp-server-ecru.vercel.app/popular-instructors")
        .then((res) => res.json())
        .then((data) => setInstructors(data))
        .catch((error) => console.error(error));
      setLoading(false);
    }, 4000);
  }, []);

  //yoga class api
  useEffect(() => {
    setTimeout(() => {
      fetch("https://summer-camp-server-ecru.vercel.app/yoga-classes")
        .then((res) => res.json())
        .then((data) => setYogaClasses(data))
        .catch((error) => console.error(error));
      setLoading(false);
    }, 4000);
  }, []);

  // yoga Instructors api
  useEffect(() => {
    setTimeout(() => {
      fetch("https://summer-camp-server-ecru.vercel.app/popular-instructors")
        .then((res) => res.json())
        .then((data) => setYogaInstructors(data))
        .catch((error) => console.error(error));
      setLoading(false);
    }, 4000);
  }, []);

  // sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post("https://summer-camp-server-ecru.vercel.app/jwt", { email: currentUser.email })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
      //stop observing while unmounting
      return () => {
        return unsubscribe();
      };
    });
  });

  const authInfo = {
    data,
    instructors,
    yogaInstructors,
    yogaClasses,
    loading,
    user,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
