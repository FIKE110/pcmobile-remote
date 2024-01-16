import { NavigationContainer } from "@react-navigation/native"
import HometabNavigator from "../navigators/HomeTabNavigator"
import ConnectStatus from "./ConnectStatus"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DeviceConnectedScreen from "./DeviceConnectedScreen"
import QRScanner from "./QRScanner"

const Stack=createNativeStackNavigator()

function Main(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='first' screenOptions={{headerShown:false}}>
          <Stack.Screen 
          name='first' component={HometabNavigator}/>
          <Stack.Screen name='second' component={ConnectStatus} />
          <Stack.Screen name=
          'third' component={DeviceConnectedScreen} />
          <Stack.Screen name='camera' component={QRScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Main