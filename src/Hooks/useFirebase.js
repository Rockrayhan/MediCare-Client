import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Components/Firebase/firebase.init";
authInit();


const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);
  const googleSignIn = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();


    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)

      }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
      

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

signOut(auth).then(() => {

}).catch((error) => {
    
});
  }

  return {
    user,
    googleSignIn,
    isLoading,
    logOut
    
  }

};

export default useFirebase;