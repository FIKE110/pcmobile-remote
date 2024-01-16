import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type extraStyle = {
    flexProp?:number,
    colorProp?:string
}

export const MouseButton = (props) =>{
    return (
        <TouchableOpacity
            style={[styles.view,{flex:props.extraStyle.flexProp, backgroundColor:props.extraStyle.colorProp}]}>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'blue',
    }

})