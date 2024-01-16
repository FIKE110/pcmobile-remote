import { Text ,View} from "react-native"
import { useState,useEffect } from "react"

function ConnectLabel(props){
    const [connectText,setConnectText]= useState(0)

    function setConnectionText(times:number){
       if(times>3){
           setConnectText(0)
       }
       else{
           setConnectText(times)
       }
   }

   const getDots=(times:number)=>{
       let dots=''
       Array.from({length:times},()=>{
            dots+=' . '
         })

       return dots
   }

   useEffect(()=>{
      const id=setInterval(()=>setConnectionText(connectText+1),500)
      return()=>{
      clearTimeout(id)
      }
   },[connectText])

    return(
        <View>
        { props.connected ? (<Text style={{fontSize:15,textAlign:'center',marginTop:20,color:'white'}}
        >{props.label}
        </Text>) :
        
        (<Text style={{fontSize:15,textAlign:'center',marginTop:20,color:'white'}}
        >Connecting to host{
            getDots(connectText)
        }</Text>)}
        </View>
    )
}

export default ConnectLabel