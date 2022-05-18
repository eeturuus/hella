import { View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity,  Platform, StatusBar } from 'react-native'
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { doc, onSnapshot, collection } from "@firebase/firestore"
import { db } from "../database/firebase"
import { firebase } from '@react-native-firebase/auth';

const DUMMY_DATA = [
  {
    firstName: "Eetu",
    lastName: "Ruuska",
    ocupation: "Student",
    photoUrl: "https://media-exp1.licdn.com/dms/image/C5603AQHjZe6bX5folg/profile-displayphoto-shrink_200_200/0/1582044558459?e=1657152000&v=beta&t=Z3VIsL_sFhk6iyJofmYzGuBPTtFMGYSTRzCfDBjKg2I",
    age: 28,
    id: 123,
  },
  {
    firstName: "Sauli",
    lastName: "Niinistö",
    ocupation: "President of Finland",
    photoUrl: "https://im.mtv.fi/image/8398728/landscape16_9/1024/576/e0e1ff646cea887ed4464ed6d006b20/AG/sauli-niinisto-iso-britanniassa-maaliskuussa-2022.jpg",
    age: 73,
    id: 345,
  },
  {
    firstName: "Sanna",
    lastName: "Marin",
    ocupation: "Prime minister of Finland",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lapsen_oikeuksien_juhla_19.11.2021_%2851690056891%29_%28cropped%29.jpg/800px-Lapsen_oikeuksien_juhla_19.11.2021_%2851690056891%29_%28cropped%29.jpg",
    age: 36,
    id: 678,
  },
  {
    firstName: "Kiira",
    lastName: "Korpi",
    ocupation: "Taitoluistelija",
    photoUrl: "https://im.mtv.fi/image/2741394/landscape16_9/792/446/ec254315599bcce882f5ad6932227873/Sp/1588602.jpg",
    age: 33,
    id: 678,
  },
  {
    firstName: "Nato",
    lastName: "Jäsenyys",
    ocupation: "Pitelee kavereilleen sateenvarjoa",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXJpxK496GaaeIGDGqG1xWEAKhSgEzWRrLQ&usqp=CAU",
    age: 73,
    id: 123234,
  },
]

const HomeScreen = () => {
    const navigation = useNavigation();
    const swipeRef = useRef(null);
    const [profiles, setProfiles] = useState([]);

 
    // useLayoutEffect(() => {
    //   onSnapshot(doc(db, 'ProfileCards', user.uid), snapshot => {
    //     if (!snapshot.exists) {
    //       navigation.navigate('Modal');
    //     }
    //   })
    // }, []);


    // useEffect(() => {
    //   firebase.database().ref(`ProfileCards/`).on('value', snapshot => {
    //     const data = snapshot.val();
    //     const profs = Object.values(data);
    //     setProfiles(profs);
    //   })
    // }, [])

  //   const fetchProfiles = async() => {
  //     firebase.database().ref(`/ProfileCards`)
  //     .on('value', snapshot => {

  //     });
  //     const response = db.collection('ProfileCards');
  //     const data = await response.get();
  //     data.docs.forEach(item=>{
  //       setProfiles([...profiles, item.data()])
  //   })
  // }


    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [])
    //const memoedValue = useMemo(() => ({}), []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={{position: 'absolute', left: 5, top: 3,}}>
            <Image style={{width: 50, height: 50, overflow: 'hidden', borderRadius: 150 / 2, top: 10, left: 10}} source={require("../profile.jpg")} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Image style={{width: 70, height: 70}} source={require("../logo.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{position: 'absolute', right: 15, top: 20}}>
            <Ionicons name='chatbubbles-sharp' size={35} color="#F39556"/>
          </TouchableOpacity>
        </View>
      {/* End of header */}

    {/* Kortit */}
    <View style={styles.parentCard}>
      <Swiper 
        ref={swipeRef}
        cards={DUMMY_DATA}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        backgroundColor={"#F6F6F6"}
        renderCard={card => card ? (
          <View 
            key={card.id}
            style={styles.card}
          >
            <Image 
              style={styles.cardImg}
              source={{ uri: card.photoUrl}}
            />

            <View style={styles.cardBottom}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{card.firstName} {card.lastName}</Text>
                <Text>{card.ocupation}</Text>
              </View>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>{card.age}</Text>
            </View>
          </View>
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 200, backgroundColor: '#FFFFFF', height: '70%', width: '100%'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', marginTop: 250}}>No more profiles for now </Text>
            <Ionicons name="sad-outline" size={50}/>
          </View>
        )}
      />
    </View>
    
    <View style={styles.bottomView}>
      <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()} style={styles.roundButtonX}>
        <Entypo name="cross" size={44} color="#7A111E"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => swipeRef.current.swipeRight()} style={styles.roundButtonHeart}>
        <Entypo name="heart" size={44} color="#237A11"/>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header: {
    //justifyContent: 'center',
    marginBottom: 10,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: "white",
  },
  parentCard: {
    flex: 1,
    marginTop: -6,
  },
  cardImg: {
    position: 'absolute',
    height: "100%",
    width: "100%",
    top: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderWidth: 2,
    borderRadius: 15,
  
  },
  card: {
    position: 'relative',
    marginTop: -40,
    height: "80%",
    width: "100%",
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
  },
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    backgroundColor: 'white',
    width: "100%",
    height: "20%",
  },
  roundButtonX: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#F77983'
  },
  roundButtonHeart: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#9EF779'
  }, 
  bottomView: {
    width: '100%',
    flexDirection: 'row',
    //height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    //top: 560,
    bottom: 10,
    backgroundColor: "#F6F6F6",
  }
});

//    const { logout } = useAuth();
// <Button title="Logout" onPress={logout} />
export default HomeScreen;