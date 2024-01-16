import {View,StyleSheet,Text} from 'react-native'

export default function AboutScreen(){
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
