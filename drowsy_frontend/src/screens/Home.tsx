import React from 'react';
import { Text } from 'react-native';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 30,
  },
  
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>  Weekly Drowsiness Stats</Text>
      <Image
        source={{
          uri: 'https://i.postimg.cc/1XFF09F6/linegraph.jpg',
        }}
        style={{ width: 350, height: 300 }}
      />
    </View>
  );
};

export default Home;

// import React from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   Button,
//   Image,
// } from "react-native";
// import { Text } from "react-native-paper";

// const Exercises: React.FC = ({ navigation }: any) => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View style={styles.contentContainer}>
//           <View style={styles.container}>
//             <Text style={styles.bigTitle}>Weekly Drowsiness Stats</Text>
//             <Image
//               source={{ uri: "https://i.postimg.cc/1XFF09F6/linegraph.jpg" }}
//               style={{ width: 100, height: 100 }}
//             /> 
//             <Button
//               onPress={() => navigation.navigate("Identity Verification")}
//               title="Show More"
//               color="#841584"
//               accessibilityLabel="Learn more about this purple button"
//             />
//           </View>
//          </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 3,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-around",
//     padding: 18,
//   },
//   bigTitle: {
//     color: "#500080",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   contentContainer: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   container: {
//     flex: 1,
//   },
// });


// import React, {useState} from 'react'
// import { SafeAreaView } from 'react-native'
// import { Avatar, Button, DataTable, Text, TextInput } from "react-native-paper";

// // import {View} from 'react-native'
    
// interface Props {
//   filePath: string;
// }
// const Home: React.FC<Props> = ({ filePath }) => {
//   filePath = "/assets/linegraph.jpeg"
//   const [imageSrc, setImageSrc] = useState('');

//   React.useEffect(() => {
//     setImageSrc(URL.createObjectURL(new Blob([filePath])));
//   }, [filePath]);

//   return (
//     <SafeAreaView>
//        <div>
//         <img src={imageSrc} alt="Image" />
//       </div>
//     </SafeAreaView> 
//   );
// }; 
// // https://freeimage.host/i/H1UWzej
// export default Home;

// import React from 'react'
// import {View} from 'react-native'

// const Home = () => {
//   return (
//     <View></View>
//   )
// }

// export default Home