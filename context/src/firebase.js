
import firebase from 'firebase/compat/app'
// remember version new is always import firebase with compat
import 'firebase/compat/database' 
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyClS5AzqPl31lT22vM4HEwnVRvZAfyMSx0",
    authDomain: "comentaaki-appi.firebaseapp.com",
    projectId: "comentaaki-appi",
    storageBucket: "comentaaki-appi.appspot.com",
    messagingSenderId: "781761946955",
    appId: "1:781761946955:web:0d24a860885b573548b4ce"
  };

firebase.initializeApp(firebaseConfig)

export default firebase


