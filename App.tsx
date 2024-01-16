/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  SectionList,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';


import ConnectStatus from './app/screens/ConnectStatus';
import Main from './app/screens/Main';
import { MMKV } from "react-native-mmkv"

export const storage=new MMKV()

function App() {
  
  return (
   <SafeAreaView style={styles.view}>
      <Main />
   </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'white',
    flex:1
  },
});

export default App;
