import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Components/Firebase/firebase.init";
import { useHistory } from "react-router-dom";


authInit();


const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);


  const history = useHistory();

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = history.location.state?.from || '/';
        history.replace(destination);

        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

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

      alert('User Logging Out');
      signOut(auth)
        .then(() => {
          console.log('User successfully signed out');
        })
        .catch((error) => {
          console.error('Error during sign-out:', error);
        });
 
  };
  

  return {
    user,
    googleSignIn,
    isLoading,
    logOut
    
  }

};

export default useFirebase;