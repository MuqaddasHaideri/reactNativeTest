import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import Splash from './src/splash'
import FirstScreen from './src/FirstScreen';
import Navigation from './src/Navigation';
export default function App() {
  return (
    <View style={styles.container}>
     <Navigation />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
   
  },

});