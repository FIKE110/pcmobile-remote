import { StyleSheet, View ,BackHandler } from "react-native";
import { Camera, useCameraDevice, useCodeScanner } from "react-native-vision-camera";
import {defaultConfig} from "../../App";
import { useEffect } from "react";

const config=defaultConfig

export default function QRScanner({navigation}){

    let stopScan=false
    useEffect(()=>{
        stopScan=false
    },[])

    stopScan=false
    const codeScanner=useCodeScanner({
        codeTypes:['qr','ean-13'],
        onCodeScanned:(codes)=>{
            console.log(stopScan)
            const scannedIP=codes[0].value
            const options={
                ip:scannedIP,
                port:config.port
            }
            console.log(options)
            if(stopScan) return
            stopScan=true
            navigation.navigate("connectScreen",{device:options})
        }
    })

    return(
        <View style={{flex:1,backgroundColor:'black',paddingVertical:70,alignItems:'center',justifyContent:'center'}}>
            <Camera 
            style={{width:'100%',height:'100%'}}
            device={useCameraDevice('back')}
            codeScanner={codeScanner}
            isActive={true}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    specificView:{position:'absolute',
        backgroundColor:'transparent',
        borderColor:'black',
        borderWidth:100,
        flex:1,
        width:250,
        height:250}
})