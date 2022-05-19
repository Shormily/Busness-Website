import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, } from "firebase/auth";
// import { useLocation } from 'react-router-dom';

initializeAuthentication();

const useFiresbase = () => {
     
       const [user,setUser] = useState({});
       const [error,setError] = useState('');
       const auth = getAuth();
       const  googlePrvider = new GoogleAuthProvider()
       const signusInWithGoogle = () =>{
           signInWithPopup(auth,googlePrvider)
           .then(result =>{
            //    const distenation = location?.state?.from || '/';
            // location.replace(distenation);
               console.log(result.user);
               setUser(result.user);
           })
           .catch((error =>{
               setError(error.message)
           }))
       }
     const logout = (location,history) =>{
         signOut(auth)
         .then(()=>{
             setUser('')
         })
     }


       useEffect(() =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change' ,user);
                setUser(user);
            }
        })
       } ,[])



       return{
           user,
           error,
           logout,
           signusInWithGoogle
        
       }

};

export default useFiresbase;