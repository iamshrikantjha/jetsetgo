import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TripsScreenComponent = () => {
  return (
    <View>
      <Text style={{
        
      }}>Trips</Text>
      <LottieView
      source={require('./../../../assets/lottie/pondering.json')}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop
    />
    </View>
  )
}

export default TripsScreenComponent

const styles = StyleSheet.create({})