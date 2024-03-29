import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import GreetScreen from './src/Screens/GreetScreen';

import {auth, firebase} from '@react-native-firebase/auth';
import LoginNavigation from './src/Navigation/LoginNavigation';
import MainNavigation from './src/Navigation/MainNavigation';
// import { useLoginContext} from './src/Context/LoginContext';

const App = () => {
  const [currentUser,setCurrentUser] = useState(null); 
  // const {loginStatus , changeLoginStatus} = useLoginContext;
  // const [initializing, setInitializing] = useState(true);

   // Handle user state changes
   function onAuthStateChanged(user) {
    setCurrentUser(user);
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    
    console.log("User Changed .....  Newemail--->",currentUser);

    return subscriber; // unsubscribe on unmount
  }, []);

  

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const user =await firebase.auth().currentUser;

       if (user) {
          console.log('User is already logged in ---------', user.email);
          setCurrentUser(user);
          changeLoginStatus(true);

        } else {
          console.log('User is not logged in ----------');
        }
      } catch {
        e => {
          console.log(e);
        };
      }
    };

    checkUserLoggedIn();
  },);

console.log("CurrentUSer --- "+currentUser) 
  
  if(currentUser)
  {
    return <MainNavigation/>
  } 
  else{
    console.log("Loggggggin Navigatorrrr USerdd")
    return <LoginNavigation/>
  }

};

export default App;

const styles = StyleSheet.create({});
