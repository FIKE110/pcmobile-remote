import { StyleSheet, Text ,View} from "react-native"

function  SettingsScreen(){
    return(
        <View style={styles.mainview}>

            <Text style={{color:'black'}}>MY name is Fortune</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SettingsScreen