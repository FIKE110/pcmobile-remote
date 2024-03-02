import { createDrawerNavigator } from "@react-navigation/drawer";
import DeviceInfo from "../components/DeviceInfo";
import {View,BackHandler,Text, TouchableOpacity, Image, TextInput, Pressable, Keyboard} from "react-native"
import { useEffect, useRef, useState } from "react";
import MousePressSensor from "../components/MousePressSensor";
import CustomDrawer from "./CustomDrawer";
import { useSocket } from "../SocketContext";
import { useNavigation } from "@react-navigation/native";

const Drawer=createDrawerNavigator()

const Test=()=>{
    return(
        <View style={{backgroundColor:"white",flex:1}}>
        </View>
        )
}

const Disconnect=({navigation,style})=>{
    const { destroySocket,writeToSocket } = useSocket()
    return (
        <TouchableOpacity 
        onPress={()=>{
            writeToSocket("close\n")
            destroySocket()
            navigation.navigate("homeScreen")
        }}
        style={style? style :{flex:1,position:"absolute",right:20}}>
            <Text style={{color:"white",fontSize:15}}>Disconnect</Text>
        </TouchableOpacity>
    )
}

const MouseHeader = ({navigation,textInputRef})=>{

    const [keyboardVisible,setKeyboardVisible] = useState(Keyboard.isVisible)

    const toggleKeyboard=()=>{
        const keyVis=Keyboard.isVisible()
       if(keyVis){
        Keyboard.dismiss()
       }
       else{
        textInputRef.current.focus()
       }

       setKeyboardVisible(Keyboard.isVisible())
    }

    return(
        <View style={{
            flexDirection:"row",
            backgroundColor:null,
            width:210,
            justifyContent:"center",
            alignItems:"center",
}}>
            <Pressable style={{opacity:keyboardVisible? 1 : 0.3}} onPress={()=>toggleKeyboard()}>
                 <View>
                <Image source={require("../assets/icons8-keyboard-100.png")} style={{
                    width:30,
                    height:30,
                    marginHorizontal:20
                }}/>
            </View>
            </Pressable>
           
            <View>
                 <Disconnect navigation={navigation} style={{
                    paddingTop:4
                 }}/>
            </View>
            <TextInput ref={textInputRef} style={{ height: 0, width: 0 }} />
        </View>
    )
}

export default function DrawerConnectedNavigator({navigation}){

    const textInputRef = useRef(null);

    useEffect(()=>{
        const backHandler=BackHandler.addEventListener(
            'hardwareBackPress',
            ()=>navigation.navigate("homeScreen")
        )
        return ()=>backHandler.remove()
    },[])

    return(
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
            drawerStyle:{backgroundColor:"#26282b"},
            headerStyle:{backgroundColor:'#393942'},
            headerRight:()=><Disconnect navigation={navigation} style={null}/>,
            headerRightContainerStyle:{paddingLeft:20},
            headerTitleAlign:"left",
            headerTintColor:"white",
            drawerLabelStyle:{color:"white",fontSize:16,marginVertical:7},
           
            drawerActiveBackgroundColor:'#393942'
        }}>
            <Drawer.Screen name='Mouse' component={MousePressSensor} options={{
                headerRight:()=><MouseHeader navigation={navigation} textInputRef={textInputRef} />
            }}/>
             <Drawer.Screen name='KeyBoard' component={Test} />
            <Drawer.Screen name='Extra' component={Test}  />
        </Drawer.Navigator>
    )
}