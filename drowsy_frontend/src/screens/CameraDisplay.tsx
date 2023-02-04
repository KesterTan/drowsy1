import React, { useEffect, useState, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageType } from 'expo-camera/build/Camera.types';
import * as FS from "expo-file-system";


const CameraDisplay = () => {
    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, setCameraPermission] = useState(false);
    const [record, setRecord] = useState(false);
    const cameraRef = useRef()

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

    let recordVideo = async () => {
        if (cameraRef != null) {
          if (record) {
            console.log("inside");
            setRecord(true);
            const result = await cameraRef.current.recordAsync();
            const imgData = await FS.readAsStringAsync(result.uri, {
              encoding: FS.EncodingType.Base64,
            });
            const fileName = result.uri.split("/").pop();
            if (fileName) {
              const fileType = fileName.split(".").pop();
              const formData = new FormData();
              formData.append("file", {
                uri: result.uri,
                name: fileName,
                type: `video/${fileType}`,
              });
              console.log(formData);
              toServer(formData);
            }
          }
          console.log("not recording bitch");
        } else {
          console.log("false f uck");
        }
      }
      
    const toServer = async (mediaFile) => {
      console.log(mediaFile);
      let type = mediaFile.type;
      let schema = "http://";
      let host = "192.168.1.6";
      let route = "";
      let port = "5000";
      let url = "";
      let content_type = "";
      type === "image"
      ? ((route = "/image"), (content_type = "image/jpeg"))
      : ((route = "/video"), (content_type = "video/mp4"));
      url = schema + host + ":" + port + route;

      let response = await FS.uploadAsync(url, mediaFile.uri, {
        headers: {
          "content-type": content_type,
        },
        httpMethod: "POST",
        uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
      });
  
      console.log(response.headers);
      console.log(response.body);

    }
    
    return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={recordVideo} style={styles.recButton} />
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

