import { useEffect, useRef, useState } from "react";
import { View ,StyleSheet, Pressable , PanResponder, Button, Text} from "react-native";
import { MouseButton } from "./MouseButton";
import { MouseScrollbar } from "./MouseScrollBar";
import { useSocket } from "../SocketContext";


export default function MousePressSensor(){
    const {writeToSocket , writeUdpSocket} = useSocket()
    const actionPerformed=false
    const [cursorPosition ,setCursorPosition] = useState({x:100,y:100})
    const [pinVisible,setPinVisible]= useState(true)
    
    const panResponder=useRef(PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderGrant:()=>setPinVisible(true),
        onPanResponderStart:()=>true,
        onPanResponderRelease:()=>setPinVisible(false),
        onPanResponderMove:(event,gestureState)=>{
            const { dx , dy } = gestureState
            const X=Math.ceil(dx/2)
            const Y=Math.ceil(dy/4)
            const response=`mouse_move/${X}/${Y}\n` 
            console.log(response)
           // console.log(X,Y)
            setCursorPosition({x:X,y:Y})
        //    writeUdpSocket(response)
           writeToSocket(response)
        }
    })).current

    const leftClick= ()=>{
        writeToSocket("mouse_click/0\n")
        console.log("left_click")
    }
    
    const rightClick= ()=>{
        writeToSocket("mouse_click/1\n")
        console.log("right_click")
    }
    

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
                <MouseButton extraStyle={{flexProp:3,colorProp:'#3d414a'}} press={leftClick}
                />
                <MouseButton extraStyle={{flexProp:1,colorProp:'gray'}} 
                press={middleClick}/>
                <MouseButton extraStyle={{flexProp:3,colorProp:'#3d414a'}} press={rightClick} />
            </View>
        </View>
    )
}

const middleClick= ()=>{
    console.log("middle_click")
}


const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#26282b'
    },

    touchpadview:{
        flex:7,
        paddingVertical:19,
    },

    mousebuttons:{
        flex:1,
        backgroundColor:null,
        flexDirection:'row',
        marginBottom:2,
        marginHorizontal:1
    },
}
)