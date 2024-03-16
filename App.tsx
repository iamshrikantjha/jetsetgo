import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text style={{
          fontFamily: 'Lato-Black',
          fontSize: 32,
        }}>App</Text>
      </View>
      <Entypo name="500px" size={30} color="teal" />

    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
