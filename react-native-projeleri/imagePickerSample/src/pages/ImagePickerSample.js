import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, PermissionsAndroid, Image } from 'react-native'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker'
import axios from 'axios'

export default function ImagePickerSample() {
    const [filePath, setFilePath] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

//Custom Button Component
const AppButton=({onPress,title})=> (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} >
        <Text style={styles.appButtonText} >{title}</Text>
    </TouchableOpacity>
)
//Control for android camera permisson
const requestCameraPermisson = async () => {
    
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, { title: 'Camera Permission', message: 'App needs camera permisson' }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED; // PermissionsAndroid.RESULTS.DENIED

        } catch (error) {
            console.warn(error);
            return false;
        }
    }

    else return true;
}
//Control for android ExternalWrite permisson
const requestExternalWritePermisson = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                { title: 'External Storage Write Permission', message: 'App needs write permisson' }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED; // PermissionsAndroid.RESULTS.DENIED

        } catch (error) {
            console.warn(error);
            alert('Write permisson err:', error)
            return false;
        }
    }
    else return true; 
}
//Capture Photo From Camera
const captureImage = async(type)=>{

    let options = {
        mediaType:type,
        maxWidth:300,
        maxHeight:500,
        quality:1,
        videoQuality:'low',
        durationLimit:5,
        saveToPhotos:true
    }
    let isCameraPermitted = await requestCameraPermisson();
    let isStoragePermitted = await requestExternalWritePermisson();
    console.log('capture image armutu',isCameraPermitted, 've' , isStoragePermitted)
    if (true || isCameraPermitted && isStoragePermitted) {
         launchCamera(options, (response)=>{
            console.log("launch camera Response =",response) 
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            }
            else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device.');
                return;
            }
            else if (response.errorCode == 'permission') {
                alert('Permisson not satisfied.');
                return;
            }
            else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 ->', response.base64);
            console.log('URI ->',response.uri);
            console.log('width ->',response.width);
            console.log('height ->',response.height);
            console.log('fileSize ->',response.fileSize );
            console.log('type ->',response.type);
            console.log('fileName ->',response.fileName);
            setFilePath(response);
             
        });
    }
}
//Choose File From Device
const chooseFile=(type)=>{
console.log('armut2')
    let options ={mediaType:type,maxWidth:300,maxHeight:400,quality:1}
    
    launchImageLibrary(options,(response)=>{
        console.log('Response in launch image library :',response)
        if (response.didCancel) {
            console.log('armut2',response.didCancel)
            alert('User cancelled camera picker');
            return;
        }
        else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device.');
            return;
        }
        else if (response.errorCode == 'permission') {
            alert('Permisson not satisfied.');
            return;
        }
        else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
        }
        console.log('base64 ->', response.assets[0].base64);
        console.log('URI ->',response.assets[0].uri);
        console.log('width ->',response.assets[0].width);
        console.log('height ->',response.assets[0].height);
        console.log('fileSize ->',response.assets[0].fileSize );
        console.log('type ->',response.type);
        console.log('fileName ->',response.assets[0].fileName);
        setFilePath(response);
         
})
}
//upload Image to Web service
uploadImageToApi=response=>{setLoading(true);setError(false);
    axios.post('https://6144c767411c860017d25667.mockapi.io/upload',
    {uri:response.uri,type:response.type,name:response.fileName})
    .then(result=>{alert(result.data.id+ '-' + result.data.type)})
    .catch(error=>{alert(error)})
}

    return (
        <View style={styles.container}>
        {console.log('armut:filePath',filePath)}

            <Image source={{uri:filePath.uri}} style={styles.containerImage} />
            {/*<Text>Path:{filePath.assets[0].uri}</Text>*/}
            {/* <AppButton onPress={()=>uploadImageToApi(filePath)} title='Upload to API' ></AppButton> */}
            <AppButton onPress={()=>captureImage('photo')} title='Launch Camera For Image' ></AppButton>
            <AppButton onPress={()=>captureImage('video')} title='Launch Camera For Video' ></AppButton>
            <AppButton onPress={()=>chooseFile('photo')} title='Choose Image' ></AppButton>
            <AppButton onPress={()=>chooseFile('video')} title='Choose Video' ></AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,padding:10,alignItems: 'center',},
    appButtonContainer:{width:250,height:50,marginTop:15,backgroundColor:'#09aeae',padding:15,borderRadius:50},
    appButtonText:{color:'white',fontSize:15,justifyContent:'center',textAlign:'center'},
    containerImage:{height:350,width:300,margin:5,borderWidth:3    }
})

/*
 uploadImageToLocal=response=>{
    const data =new FormData();
    data.append('filedata',{uri:uri:response.uri,type:response.type,name:response.fileName})
    const config = {headers:{'Accept':'application/json','content-type'}}
    axios.post('https://605641c2055dbd0017e83e2c.mockapi.io/Upload',
    )
    .then(result=>{alert(result.data.id+ '-' + result.data.type)})
    .catch(error=>{alert(error)})
} */