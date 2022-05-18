import { View, Text, Input, TextInput} from 'react-native'
import React, { useState, useEffect } from 'react';


const LoginScreen = () => {
  

  return (
    <View>
      <Text>Login to Hellä</Text>
      {/* <Input placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value)}} />
      <Input placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value)}} /> */}
    </View>
  )
}

export default LoginScreen;


//Tällä saa login screenin toimimaan muttei se ole databaseen ja useAuthiin yhdistetty. Eli backup
/* 

import { View, Text, Input, TextInput} from 'react-native'
import React, { useState, useEffect } from 'react';
//import auth from '@react-native-firebase/auth';

const LoginScreen = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {

  };

  return (
    <View>
      <Text>Login to Hellä</Text>
      <Input placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value)}} />
      <Input placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value)}} />
    </View>
  )
}

export default LoginScreen;

*/