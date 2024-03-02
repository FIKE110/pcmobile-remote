// CustomDrawer.js
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Top Logo */}
      <View style={{alignItems: 'center', paddingVertical: 18 }}>
        <View style={{width:"85%",backgroundColor:"white",padding:26,paddingVertical:23, alignItems:"center",borderRadius:15}}>
        <Image
          source={require("../assets/computer-703.png")} // Replace with the path to your logo
          style={{ marginBottom:7,width: 54, height: 54, resizeMode: 'contain' }}
        />
        <Text style={{color:"black",fontSize:16,padding:5}} numberOfLines={1}>Fortune PC</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Custom Label Example */}
      <View
        style={{
          alignItems:"flex-end", flexDirection:"row",
          height:340,padding: 16,paddingLeft:30, borderTopWidth: 1,marginTop:30, borderTopColor: '#ccc'}}
      >
        <View style={{
          alignItems:"center",justifyContent:"center", flexDirection:"row"}}>
           <View>
          <Text style={{fontSize:17,fontWeight:"bold"}}>Connected</Text>
        </View>
        <View style={{marginLeft:12,backgroundColor:"lightgreen",borderRadius:10,width:12,height:12}}>
        </View>
        </View>
       
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
