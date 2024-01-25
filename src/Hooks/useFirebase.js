import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Components/Firebase/firebase.init";
authInit();


const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);



  const googleSignIn = (location, history) => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
  
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/' ; 
        history.replace(destination);

        const user = result.user;
        setUser(user)

      }).catch((error) => {
        const errorMessage = error.message;
        // alert(errorMessage);
        console.log(errorMessage);
      })
      .finally(() => setIsLoading(false));

  }

  useEffect(() => {

    const unsubscribed =  onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)
      } else {
        setUser({})

      }
      setIsLoading(false) 
    });
    return unsubscribed;
  }, [])

  const logOut = () => {
    const userConfirmed = confirm('Are you sure you want to log out?');
    if (userConfirmed) {
      alert('User Logged Out');
      signOut(auth)
        .then(() => {
          console.log('User successfully signed out');
        })
        .catch((error) => {
          console.error('Error during sign-out:', error);
        });
    } else {
      alert('Log out canceled');
    }
  };
  

  return {
    user,
    googleSignIn,
    isLoading,
    logOut
    
  }

};

export default useFirebase;