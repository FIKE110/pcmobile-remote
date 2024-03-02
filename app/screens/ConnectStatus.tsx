import {useRef, useContext, useEffect ,useState} from "react"
import { ActivityIndicator, StyleSheet,View,BackHandler } from "react-native"
import ConnectLabel from "../components/ConnectLabel"
import {storage} from "../../App"
import { useSocket} from '../SocketContext';

export default function ConnectStatus({route,navigation}){
    const [connected,setConnected] = useState(false)
    const [label,setLabel] =useState('Connected')
    const {connectToServer,setDevice,connectUdpSocket} = useSocket()


    const createClient=(options,onConnect)=>connectToServer(options,onConnect)

    useEffect(()=>{
            const backHandler=BackHandler.addEventListener(
                'hardwareBackPress',
                ()=>{
                   if(navigation) navigation.popToTop()
                return true
                }
            )
        console.log('hello')
        const options = {
            port: route.params.device.port,
            host: route.params.device.ip,
        };

        const successful=()=>{
            setTimeout(()=>navigation.navigate("controllerScreen"),1000)
            setConnected(true)
            setDevice(options)
            connectUdpSocket()
        }

        const client=createClient(options,successful)

            // Handle incoming data
    client.on('data', (data) => {
        console.log('Received:', data.toString());
      });
  
      // Handle socket closure
      client.on('close', () => {
        console.log('Connection closed');
      });
  
      // Handle errors
      client.on('error', (error) => {
        console.error('Error:', error);
        setTimeout(()=>navigation.navigate("homeScreen"),500)
      });
        return ()=>backHandler.remove()
    },[])

    return(
        <View style={styles.mainview}>
            <View style={{ justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={85} color='white'/>
                <ConnectLabel label={label} connected={connected}/>
            </View>
        </View>
    )
}

function isIpSaved(option,devices){
    devices.map((device)=>{
        if(device.ip==option.ip){
            return true
        }
    })

    return false
}

function saveIp(options){
    let devices=storage.getString('devices')
    if(devices){
        let devicesData=JSON.parse(devices)
        if(!isIpSaved(options,devicesData)){
            devicesData.push(options)
             storage.set('devices',JSON.stringify(devicesData))
        }
    }
    else{
        storage.set('devices',JSON.stringify([]))
    }
    console.log(storage.getString('devices'))
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
        backgroundColor:'#26282b',
        justifyContent:'center',
        alignItems:'center'
    }
})