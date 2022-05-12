import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider} 
    from 'firebase/auth';
import { 
    getFireStore, 
    doc,  
    getDoc, 
    setDoc 
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCkCcVM_R7P23enqTW0qeJSAPiS8Pl-Cn8",
    authDomain: "ginger-clothing-db.firebaseapp.com",
    projectId: "ginger-clothing-db",
    storageBucket: "ginger-clothing-db.appspot.com",
    messagingSenderId: "731792818608",
    appId: "1:731792818608:web:3c922e3ff92d4cb7841675"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account",
  });


export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);


export const db = getFireStore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', 'userAuth.uid');

    console.log(userDocRef);
};