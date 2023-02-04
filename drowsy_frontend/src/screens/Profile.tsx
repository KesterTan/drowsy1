import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, Button, DataTable, TextInput } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {

  const items = [
    {
      fullName: "Nita Chen",
      username: "kthavees",
      email: "kthavees@andrew.cmu.edu",
      buttons: [
        {
          title: 'Edit',
          onPress: () => {},
        },
      ],
    }
  ]

  return (
    <View style = {styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#543A98', '#756BC2','#80ABCB' ]}
        style={styles.background}
      />
        <View style = {styles.bannerContainer}>          
          <View style = {styles.profilePic}>
            <Image
              source={{uri: 'https://i.postimg.cc/76PXGwX9/IMG-6126-modified.png',}}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>
        <View style = {styles.contentContainer}>
          <Text style = {styles.name}>{items[0].fullName}</Text>
          <Text style = {styles.info}>{items[0].username}</Text>
          <Text style = {styles.info}>{items[0].email}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 flexDirection: "column",
 justifyContext: "flex-start",
 alignItems: "center",
 paddingVertical: 20,
 color: "#FFFFFF",
},
bannerContainer: {
  // backgroundColor: "#6789a3",
  height: 260,
  width: 300,
 },
 profilePic: {
  width: 250,
  height: 250,
  marginBottom: 40,
  // alignSelf: 'center',
  position: 'absolute',
  marginTop: 40,
  marginLeft: 50,
 },
 contentContainer: {
  flex: 1,
  padding: 20,
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  alignItems: "center",
 },
 name: {
  fontSize: 30,
  color: "#000000",
  fontWeight: '600',
 },
 info: {
  fontSize: 20,
  color: "#000000",
  fontWeight: '400',
 },
 background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height:200,
 },
});

export default Profile