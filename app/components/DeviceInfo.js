import { useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text ,TouchableNativeFeedback,TouchableOpacity,Image,TouchableWithoutFeedback,View} from "react-native";

function DeviceInfo(props) {
    const [viewColor,setViewColor] = useState('black')
    const handler=()=>setViewColor('blue')

    return(
        <Pressable>
        <View style={styles.view}>
            <Image source={require('../assets/laptop-2-64.png')} 
            style={{width:40,height:40,margin:26}}
            />
            <View style={{backgroundColor:'white',flex:1,padding:20}}>
                 <Text numberOfLines={1} 
                 style={{color:'black',fontSize:16,fontWeight:400}}>
                 Fortune's PC</Text>

                 <Text numberOfLines={1} 
                 style={{color:'black',marginTop:12,fontSize:14,fontWeight:400}}>
                 IP: {props.device.host}</Text>
            </View>
        </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    view:{
        flexDirection:'row',
        width:'90%',
        height:100,
        backgroundColor:'#393942',
        margin:20,
        elevation:4,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1
    },
})

export default DeviceInfo;