import { View, Text, Input, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
//import auth from '@react-native-firebase/auth';
import { auth } from '../database/firebase';
import { FirebaseError } from 'firebase/app';



const SignUpScreen = () => {


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");



  const signup = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user.registerEmail);
    })
    .catch((error) => alert(error.message + error.code));
  }  
  //   try {
  //   const user = createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  //   console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <View>
      <Text>Signup to Hellä</Text>
      <TextInput placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value)}} />
      <TextInput placeholder="Password..." onChange={(event) => {setRegisterPassword(event.target.value)}} />
      <Button title="Register" onPress={signup} >Register</Button>
    </View>
  )
}

export default SignUpScreen