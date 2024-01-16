import MousePressSensor from "../components/MousePressSensor"
import { StyleSheet, Text, View } from "react-native"

export const MouseScreen = () => {
    return (
        <View style={styles.view}>
            <MousePressSensor />
        </View>
    )
}

const styles=StyleSheet.create({
    view:{
        flex:1
    }
})