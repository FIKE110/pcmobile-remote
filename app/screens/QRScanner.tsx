import { View } from "react-native";
import { Camera, useCodeScanner } from "react-native-vision-camera";

export default function QRScanner({route}){
    const codeScanner=useCodeScanner({
        codeTypes:['qr','ean-13'],
        onCodeScanned:(codes)=>console.log(codes)
    })

    return(
        <View style={{flex:1,backgroundColor:'black',paddingVertical:70}}>
            <Camera 
            style={{width:'100%',height:'100%'}}
            device={route.params.cameraDevice}
            codeScanner={codeScanner}
            isActive={true}
            />
        </View>
    )
}