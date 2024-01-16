import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StandardKeyboard = () => {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (key) => {
    setInputText((prevText) => prevText + key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{inputText}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.row}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((key) => (
            <TouchableOpacity
              style={styles.key}
              key={key}
              onPress={() => handleKeyPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {Array.from('QWERTYUIOP').map((key) => (
            <TouchableOpacity
              style={styles.key}
              key={key}
              onPress={() => handleKeyPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {Array.from('ASDFGHJKL').map((key) => (
            <TouchableOpacity
              style={styles.key}
              key={key}
              onPress={() => handleKeyPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {Array.from('ZXCVBNM').map((key) => (
            <TouchableOpacity
              style={styles.key}
              key={key}
              onPress={() => handleKeyPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    bottom:60
  },
  inputContainer: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  inputText: {
    fontSize: 18,
  },
  keyboardContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    margin: 5,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  keyText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StandardKeyboard;
