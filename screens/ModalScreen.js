import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
//import { firebase } from '../database/firebase';


const ModalScreen = () => {

  const [ occupation, setOccupation ] = useState(null);
  const [ image, setImage ] = useState(null);
  const [ age, setAge ] = useState(null);

  const incompleteForm = !image || !occupation || !age;

  // useEffect(() => {
  //   firebase.database().ref(`ProfileCards/`)
  // }, [])

  // const saveProfile = () => {
  //   firebase.database().ref('ProfileCards/').push(
  //     {'occupation': occupation, 'image':image, 'age': age}
  //   );
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
    <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
        <Image
            style={{ height: 80, width: 250, resizeMode:'contain'}}
            source={require('../HellaTextLogo.png')}
        />
      <Text style={{ paddingTop: 15}}>Tämä on Hellä deitti sovellus!</Text>

      <Text style={{ paddingTop: 15, color: "#F39556"}}>
        Step 1: Profile Pic
      </Text>
      <TextInput
      value={image}
      onChangeText={text => setImage(text)}
        style={{alignItems: 'center', paddingBottom: 20, paddingTop: 20, fontSize: 20}}
        placeholder="Enter a Profile pic URL" />

      <Text style={{ paddingTop: 15, color: "#F39556"}}>
        Step 2: Occupasion
      </Text>
      <TextInput
        value={occupation}
        onChangeText={text => setOccupation(text)}
        style={{alignItems: 'center', paddingBottom: 20, paddingTop: 20, fontSize: 20}}
        placeholder="Enter your occupation" />

      <Text style={{ paddingTop: 15, color: "#F39556"}}>
        Step 3: Age
      </Text>
      <TextInput
      value={age}
      onChangeText={text => setAge(text)}
        style={{alignItems: 'center', paddingBottom: 20, paddingTop: 20, fontSize: 20}}
        placeholder="Enter your age"
        keyboardType="numeric"
        />

      <TouchableOpacity
      disabled={incompleteForm}
       style={{width: 250, height: 70, position: 'absolute', bottom: 10, padding: "7%", overflow: 'hidden', paddingBottom: 5, borderRadius: 15, backgroundColor: "#F39556" }}
       >
        <Text style={{ fontSize: 20, textAlign:"center", justifyContent: 'center', color: "#FFFFFF"}}>
          Update Profile
        </Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default ModalScreen