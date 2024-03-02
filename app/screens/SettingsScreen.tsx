import { StyleSheet, Text ,TextInput,View,Button} from "react-native"


function  SettingsScreen(){
    return(
        <View style={styles.mainview}>
            <View>
                <Text style={{
                    color:"white",
                    fontSize:22,
                }}>Account Details</Text>
                <View style={{paddingTop:10,display:"flex",flexDirection:"row"}}>
                    <Text style={{
                        fontSize:17,
                        color:"white"
                    }}>Device Name :</Text>
                    <View style={{
                        backgroundColor:"white",
                        height:25,
                        padding:0,
                        justifyContent:"center",
                        alignItems:"center",
                        marginVertical:2,
                        marginHorizontal:15,
                        width:"60%"
                    }}>
                        <TextInput placeholder="device's name" style={{color:"black",
                    textAlign:"center",
                    padding:0
                    }} placeholderTextColor="gray" editable={true}/>
                    </View>
                </View>
                <View style={{
                    justifyContent:"flex-end",
                    flexDirection:"row"
                }}>
                    <Button title="Edit" />
                    <Button title="Apply changes"/>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        backgroundColor:'#26282b',
        flex:1,
        padding:15
    }
})

export default SettingsScreen