import { useEffect, useState ,useRef} from "react";
import { ScrollView,KeyboardAvoidingView, Button, Image, Pressable, StyleSheet ,Text,TextInput,TouchableOpacity,View, PermissionsAndroid} from "react-native";
import DeviceInfo from "../components/DeviceInfo";
import ConnectedDevices from "../components/ConnectedDevices";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { PERMISSIONS } from "react-native-permissions";

type Options={
    ip:string,
    port:number
}

export default function ConnectionScreen({navigation}){
    const [focus,setFocus] = useState(false)
    const [ip,setIp] =useState('')
    const [reload,setReload] = useState(false)
    const cameraDevice=useCameraDevice('back');

    const scanWithCamera= async ()=>{
        const cameraPermission=Camera.getCameraPermissionStatus()
        if(cameraPermission=='granted'){
            console.log('hello')
           navigation.navigate('camera',{cameraDevice:cameraDevice})
        }
         else{
            await Camera.requestCameraPermission()
         }
    }

    const connectToSocket=()=>{
        const options:Options={
            ip:ip,
            port:4000
        }
        if(options.ip){
            navigation.navigate('second',{device:options})
        }
        console.log(ip)
    }

    return(
        <View style={{flex:1,backgroundColor:'#26282b'}}>
        <View style={styles.mainview}>
        <View style={{paddingLeft:30,paddingTop:20}}>
            <Text style={{fontSize:16,color:'white'}}>Enter Host's IP Address</Text>
        </View>
        <View style={styles.ipcontainerview}>
        <TextInput
          editable
          placeholder="Hosts IP Address"
          onFocus={()=>setFocus(true)}
          maxLength={40}
          onChangeText={(text)=>{setIp(text)}}
          style={{paddingLeft: 20,color:'white',fontSize:17}}
        />
      </View>
      <View style={{alignItems:"center",justifyContent:'center',paddingHorizontal:20}}>
       <TouchableOpacity style={styles.button} onPress={()=>connectToSocket()}>
            <Text style={{color:'black',textAlign:'center',fontWeight:'600',fontSize:17}}>Connect</Text>
       </TouchableOpacity>
        </View>
        <View style={
            {
            borderTopColor:'rgba(255,255,255,0.5)',
            marginTop:15,
            borderTopWidth:1.5,flex:1}}>
        <View>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>scanWithCamera()}>
                <Image source={require('../assets/qrcode.png')}
                style={{width:31,height:31,margin:10,marginLeft:23}}
                />
                <Text style={{marginTop:15,fontSize:16}}>Scan QR code</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={{flex:1}}>
        <ConnectedDevices setReload={setReload} reload={reload}/>
      </View>
      </View>
    );
}

const styles=StyleSheet.create({
    mainview:{
        borderColor:'rgba(255,255,255,0.5)',
        borderWidth:0,
        borderRadius:10,
        margin:20,
        height:240,
    }
    ,
    ipcontainerview:{
        borderColor:'rgba(255,255,255,0.5)',
        borderRadius:7,
        borderWidth:2,
        margin:20,
        marginTop:15
    },
    button:{
        width:'100%',
        padding:8,
        borderRadius:5,
        backgroundColor:'white'
    }
})