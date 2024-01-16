import { useEffect ,useState} from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import ConnectLabel from "../components/ConnectLabel"
import TcpSocket from "react-native-tcp-socket"
import {storage} from "../../App"

export default function ConnectStatus({route,navigation}){
    const [connected,setConnected] = useState(false)
    const [label,setLabel] =useState('Connected')

    useEffect(()=>{
        console.log('hello')
        const options = {
            port: route.params.device.port,
            host: route.params.device.ip,
        };
        
        const client=TcpSocket.createConnection(options,()=>{
            setConnected(true)
            saveIp(options)
            client.write('hello\n')
            navigation.navigate('third')
        })
        client.on('data',(data)=>{

        })

        client.on('error',(err)=>{
            console.log(err)
            setTimeout(()=>navigation.goBack(),2000)
            setLabel('Not connected')
            setConnected(true)
        })

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