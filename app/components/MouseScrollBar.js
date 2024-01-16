import { Pressable, StyleSheet, Touchable, View } from "react-native"

export const MouseScrollbar = () =>{

    return(
        <View style={styles.view}>
            <Pressable>
                <View>

                </View>
            </Pressable>
        </View>    
    )
}

const styles=StyleSheet.create({
    view:{
        backgroundColor:'gray',
        position:'absolute',
        width:18,
        height:700,
        borderRadius:20,
        right:12,

    }
})