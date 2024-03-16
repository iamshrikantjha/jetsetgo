import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import FastImage from 'react-native-fast-image'


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
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
