import React, { useEffect, useState, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageType } from 'expo-camera/build/Camera.types';


const CameraDisplay = () => {
    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, setCameraPermission] = useState(false);
    const [cameraRef, setCameraRef ] = useState<Camera | null>(null);
    const [record, setRecord] = useState(null);

    const permisionFunction = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
    
        setCameraPermission(status === "granted");
    
        if (
          !cameraPermission
        ) {
          return(<Text>Permission for camera required</Text>);
        }
    };
    
    useEffect(() => {
    permisionFunction();
    }, []);

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    //const takePic = async () => {
    //  if (cameraRef) {
    //    const options = {skipProcessing: true, imageType: ImageType.png}
    //    const data = await cameraRef.takePictureAsync();
    //    const source = data.uri;
    //  }
    //}

    const recordVideo = async () => {
      isRecording(true);
    };

    const stopRecording = () => {
      isRecording(false);
      cameraRef.current.stopRecording()
    }
    
    return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleVideo} style={styles.recButton} />
        </View>
      </Camera>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
    },
    camera: {
      display: "flex",
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      margin: 20,
    },
    flipButton: {
      height: 30,
      width: 90,
      textAlign: "center",
      justifyContent: "center",
      alignSelf: "flex-end",
      alignItems: "center",
      marginBottom: "5%",
      borderRadius: 70, 
      backgroundColor: "#4F4883",
    },
    recButton: {
      height: 80,
      width: 80,
      justifyContent: "center",
      alignSelf: "flex-end",
      alignItems: "center",
      borderRadius: 100 , 
      marginLeft:"13%",
      backgroundColor: "#AB5350",
    },
    recInProgressButton: {
      height: 60,
      width: 60,
      justifyContent: "center",
      alignSelf: "flex-end",
      alignItems: "center",
      marginLeft:"16%",
      marginBottom: "3%",
      backgroundColor: "#AB5350",
    },
    text: {
        
    }
})
export default CameraDisplay

