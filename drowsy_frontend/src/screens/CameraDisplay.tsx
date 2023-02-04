import React, { useEffect } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CameraDisplay = () => {
    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, setCameraPermission] = useState(false);

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
        
    },
    camera: {

    },
    buttonContainer: {

    },
    button: {

    },
    text: {
        
    }
})
export default CameraDisplay

