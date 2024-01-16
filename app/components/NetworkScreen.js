import { Button, StyleSheet, View } from "react-native";
import TcpSocket from 'react-native-tcp-socket'

export function NetworkScreen(){
// Create a socket instance
const options = {
    port: 5031,
    host: "192.168.144.82", //give your IP address
};

// Create socket
const makeRequest=()=>
    {

        console.log('helo')
        const client = TcpSocket.createConnection(options, () => {
  // Write on the socket
 client.write('Hello server!');
});


client.on('data', function(data) {
    console.log('message was received', data.toString());
  });
  
  client.on('error', function(error) {
    console.log(error);
  });
  
  client.on('close', function(){
    console.log('Connection closed!');
    });}

    return(
        <View style={styles.view}>
            <Button title="Click me" onPress={()=>makeRequest()}>Click me</Button>
        </View>
    )
}

const styles=StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        flex:1
    }
})