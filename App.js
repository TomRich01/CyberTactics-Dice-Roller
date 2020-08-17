import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DiceSix from './components/DiceSix';
import DiceEight from './components/DiceEight';
import DiceTwelve from './components/DiceTwelve';
import DiceTwenty from './components/DiceTwenty';


export default function App() {
  return (
    <View style={styles.container}>
        <DiceSix />
        <DiceEight />
        <DiceTwelve />
        <DiceTwenty />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#514f4d',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  
   
    
  },
});
