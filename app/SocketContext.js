// SocketContext.js
import React, { createContext, useContext, useState } from 'react';
import TcpSocket from 'react-native-tcp-socket';
import dgram from 'react-native-udp'

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [udp,setUdp] = useState(null)
  const [device,setDevice]=useState(null)

  const connectToServer = (options,onConnect) => {
    const clientSocket = TcpSocket.createConnection(
        {...options,noDelay:true},
      () => {
        console.log('Connected to server');
        clientSocket.write("Fortune's Phone\n")
        onConnect()
      }
    );


    setSocket(clientSocket);
    setDevice(options)
    return clientSocket;
  };

  const connectUdpSocket = ()=>{
    const updSocket=dgram.createSocket("udp4")
    console.log("udp created")
    updSocket.on('message',(message,rinfo)=>{
      //console.log(message)
    })

    updSocket.bind(5031);

    setUdp(updSocket)
  }

  const writeUdpSocket=(data)=>{
    if(udp)
  {
      udp.send(data,0,data.length,5031,"192.168.108.82",(err)=>{
        if(err){
          console.log(err)
        }
        else{
        //  console.log("Data successfully transfered")
        }
      })
    }
  }

  const destroyUpdSocket=()=>{
    if(udp){
      udp.destroy()
      setUdp(null)
    }
  }

  const destroySocket=()=>{
    if(socket){
      socket.destroy()
      setSocket(null)
    }
  }

  const writeToSocket = (data) => {
    if (socket) {
      socket.write(data);
    }
  };

  return (
    <SocketContext.Provider value={{ 
      connectToServer, writeToSocket ,destroySocket,connectUdpSocket,writeUdpSocket,setDevice,destroyUpdSocket}}>
      {children}
    </SocketContext.Provider>
  );
};
