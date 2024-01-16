import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ConnectionScreen from "../screens/ConnectionScreen"
import SettingsScreen from "../screens/SettingsScreen"
import AboutScreen from "../screens/AboutScreen"
import { Image } from "react-native"

const Tab=createBottomTabNavigator()
export default function HometabNavigator(){
    return( 
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarActiveBackgroundColor:'#26282b',
            tabBarInactiveBackgroundColor:'#393942',
            tabBarActiveTintColor:'white',
            tabBarLabelStyle:{fontSize:12,padding:0,marginBottom:4},
            tabBarStyle:{borderTopWidth:1,borderColor:'black'}
            }}>
            <Tab.Screen name='home' 
            options={{tabBarIcon:()=>(<Image source={require('../assets/icons8-home-96.png')} style={{
              width:20,height:20,marginTop:10
            }}/>)}}
            component={ConnectionScreen}/>
            <Tab.Screen 
            options={{tabBarIcon:()=>(<Image source={require('../assets/icons8-settings-100.png')} style={{
              width:20,height:20,marginTop:10
            }}/>)}}
            name='setting' component={SettingsScreen} />

            <Tab.Screen
             options={{tabBarIcon:()=>(<Image source={require('../assets/icons8-about-100.png')} style={{
              width:20,height:20,marginTop:10
            }}/>)}}
            name='about' component={AboutScreen} />
          </Tab.Navigator> 
    )

}