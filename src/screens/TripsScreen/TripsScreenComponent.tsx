import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colorPallet, fontFamily } from '../../utils/Constants';

const TripsScreenComponent = () => {
  return (
    <View>
      {/* FILTER CHIPS */}
      <View style={{
        marginHorizontal: wp(5),
        marginTop: wp(4),
        // flexDirection: 'column',
      }}>
        {/* LABEL */}
        <Text style={{
          fontFamily: fontFamily.LatoBold,
          fontSize: wp(5.5),
          color: colorPallet.dark,
        }}>Bookmarks List</Text>

        {/* CHIPS */}
        {/* <View style={{
                    flexDirection: 'row',
                    marginTop: wp(5),
                    marginBottom: wp(4),
                    justifyContent: 'space-between',
                }}>
                    <Chip icon="chevron-down-circle" onPress={reOrderData}>Ascending</Chip>
                    <Chip icon="chevron-up-circle" onPress={reOrderData2}>Descending</Chip>
                    <Chip icon="lock-reset" onPress={resetData}>Reset Filter</Chip>
                </View> */}

        <LottieView
          source={require('./../../../assets/lottie/pondering.json')}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </View>

    </View>
  )
}

export default TripsScreenComponent

const styles = StyleSheet.create({})