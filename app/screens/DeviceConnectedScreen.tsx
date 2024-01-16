import { StyleSheet ,Text,View } from "react-native"

export default function DeviceConnectedScreen(){
   return(
    <View style={styles.mainview}>
        <Text>Hello There</Text>
    </View>
   ) 
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
        backgroundColor:'white'
    }
})