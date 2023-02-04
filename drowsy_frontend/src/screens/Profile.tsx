import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, Button, DataTable, TextInput } from 'react-native-paper';

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
      <View style = {styles.banner}>
        <View style = {styles.profilePic}>
          <Avatar.Image size={180} source={{uri: "https://freeimage.host/i/H1UWImx",}}/>
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
}, 
banner: {
  backgroundColor: "#6789a3",
  height: 260,
  width: 300,
 },
 profilePic: {
  width: 100,
  height: 100,
  marginBottom: 10,
  alignSelf: 'center',
  position: 'absolute',
  marginTop: 10,
 },
 contentContainer: {
  flex: 1,
  padding: 20,
  boarderRadius: 15,
  backgroundColor: "#FFFFFF"
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
});

export default Profile