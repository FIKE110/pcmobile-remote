import { View,Text,ScrollView,TouchableOpacity, StyleSheet } from "react-native";
import { storage } from "../../App";
import DeviceInfo from "./DeviceInfo";
import { useState } from "react";

export default function ConnectedDevices(props){
    const devicesString=storage.getString('devices')
    let devices=[]
    if(devicesString){
        devices=JSON.parse(devicesString)
    }

    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:17,marginLeft:23}}>Previously Connected Devices</Text>
             <TouchableOpacity style={styles.button} onPress={()=>{
               storage.set('devices',JSON.stringify([]))
               props.setReload(!props.reload)
             }}>
            <Text 
            style={{color:'black',textAlign:'center',fontWeight:'500',fontSize:17}}>Clear</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.deviceview} >
                {devices.map((device,id)=>(
                    <DeviceInfo key={id} device={device}/>
                    )
                )}
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    deviceview:{
            marginTop:12,
            marginBottom:18,
            flex:1
    },
    button:{
        position:'absolute',
        right:22,
        width:'20%',
        padding:5,
        borderRadius:5,
        backgroundColor:'white'
    }
})