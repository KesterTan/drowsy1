import React, { useEffect, useState, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageType } from 'expo-camera/build/Camera.types';

const CameraDisplay = () => {
    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, setCameraPermission] = useState(false);
    const [cameraRef, setCameraRef ] = useState<Camera | null>(null);

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

    const takePic = async () => {
      if (cameraRef) {
        const options = {skipProcessing: true, imageType: ImageType.png}
        const data = await cameraRef.takePictureAsync();
        const source = data.uri;
      }
    }

    const recordVideo = async () => {
      
    }
    
    return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
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

    },
    button: {

    },
    text: {
        
    }
})
export default CameraDisplay

