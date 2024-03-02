import { NavigationContainer } from "@react-navigation/native"
import HometabNavigator from "../navigators/HomeTabNavigator"
import ConnectStatus from "./ConnectStatus"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DeviceConnectedScreen from "./DeviceConnectedScreen"
import QRScanner from "./QRScanner"
import DrawerConnectedNavigator from "../navigators/DrawerConnectedNavigator"
import { useRef } from "react"
import {SocketProvider} from "../SocketContext"


const Stack=createNativeStackNavigator()

function Main(){
    return(
      <SocketProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName='homeScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen 
          name='homeScreen' component={HometabNavigator}/>
          <Stack.Screen name='cameraScreen' component={QRScanner} />
          <Stack.Screen name='connectScreen' component={ConnectStatus} />
          <Stack.Screen name='controllerScreen' component={DrawerConnectedNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      </SocketProvider>
    )
}

export default Main