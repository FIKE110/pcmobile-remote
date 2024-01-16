import { useEffect, useRef, useState } from "react";
import { View ,StyleSheet, Pressable , PanResponder, Button, Text} from "react-native";
import { MouseButton } from "./MouseButton";
import { MouseScrollbar } from "./MouseScrollBar";


export default function MousePressSensor(){
    const [cursorPosition ,setCursorPosition] = useState({x:100,y:100})
    const [pinVisible,setPinVisible]= useState(true)
    
    const panResponder=useRef(PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderGrant:()=>setPinVisible(true),
        onPanResponderStart:()=>console.log('hello'),
        onPanResponderRelease:()=>setPinVisible(false),
        onPanResponderMove:(event,gestureState)=>{
            const { moveX , moveY } = gestureState
            console.log(moveX,moveY)
            setCursorPosition({x:moveX,y:moveY})
        }
    })).current

    return(
        <View style={styles.view} >
             <View style={styles.touchpadview} {...panResponder.panHandlers}>
                <View style={{opacity:pinVisible ? 1:0}}>
                    <View style={[styles.cursor,{top:cursorPosition.y-60,left:cursorPosition.x-60}]}></View>
                </View>
                <View>
                    <MouseScrollbar />
                </View>
            </View>
            <View style={styles.mousebuttons}>
                <MouseButton extraStyle={{flexProp:3,colorProp:'yellow'}}/>
                <MouseButton extraStyle={{flexProp:1,colorProp:'blue'}}/>
                <MouseButton extraStyle={{flexProp:3,colorProp:'yellow'}}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'white'
    },

    touchpadview:{
        flex:7,
        paddingVertical:19,
    },

    mousebuttons:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        marginBottom:8,
        marginHorizontal:1
    },
}
)