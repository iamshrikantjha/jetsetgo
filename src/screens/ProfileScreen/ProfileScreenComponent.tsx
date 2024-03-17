import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, ProgressBar } from 'react-native-paper';
import { fontFamily } from '../../utils/Constants';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardComponent = () => {
  return (
    <View style={{
      width: wp(43),
      height: wp(43),
      backgroundColor: '#e6ecff',
      marginBottom: wp(5),
      borderRadius: wp(2),
      alignItems:'center',
      justifyContent:'center',
      // position: 'relative',
    }}>
      <View style={{
        alignItems:'center',
        justifyContent:'center'
      }}>
      <MaterialCommunityIcons name="database-search" size={wp(25)} color="white" />
      <Text style={{
            fontFamily: fontFamily.LatoHeavy,
            fontSize: wp(4.5),
            color: 'black',
          }}>Your details</Text>
      </View>
      
    </View>
  )
}

const ProfileScreenComponent = () => {
  return (
    <ScrollView>
      {/* TOP SECTION */}
      <View style={{
        // backgroundColor: 'pink',
        marginHorizontal: wp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(5),
      }}>
        <Text style={{
          fontFamily: fontFamily.LatoHeavy,
          fontSize: wp(8),
          color: 'black',
        }}>Profile</Text>
        <Avatar.Text size={wp(30)} label="S" labelStyle={{
          fontFamily: fontFamily.LatoMedium,
          fontSize: wp(20),
        }} />
      </View>

      {/* HEADING */}
      <View style={{
        // backgroundColor: 'pink',
        marginHorizontal: wp(5),
        marginTop: hp(3),
      }}>
        <Text style={{
          fontFamily: fontFamily.LatoHeavy,
          fontSize: wp(5.5),
          color: 'black',
        }}>Profile set-up</Text>
      </View>

      {/* CARD */}
      <View style={{
        backgroundColor: '#e6ecff',
        marginHorizontal: wp(5),
        marginTop: hp(3),
        padding: wp(5),
        borderRadius: wp(2)
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{
            fontFamily: fontFamily.LatoHeavy,
            fontSize: wp(4.5),
            color: 'black',
          }}>Only 2 steps to go</Text>

          <Text style={{
            fontFamily: fontFamily.LatoHeavy,
            fontSize: wp(4.5),
            color: '#4d4dff',
          }}>Finish set-up</Text>
        </View>

        <ProgressBar progress={0.5} color={'#4d4dff'} style={{
          marginVertical: wp(5),
        }} />

        <Text style={{
          fontFamily: fontFamily.LatoSemibold,
          fontSize: wp(4.5),
          color: '#4d4dff',
        }}>Complete the steps to book faster and find the best deals.</Text>

      </View>

      {/* HEADING */}
      <View style={{
        // backgroundColor: 'pink',
        marginHorizontal: wp(5),
        marginTop: hp(3),
      }}>
        <Text style={{
          fontFamily: fontFamily.LatoHeavy,
          fontSize: wp(5.5),
          color: 'black',
        }}>Manage your account</Text>
      </View>

      {/* GRID */}
      <View style={{
        // backgroundColor: 'pink',
        marginHorizontal: wp(5),
        marginTop: hp(3),
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />

      </View>



    </ScrollView>
  )
}

export default ProfileScreenComponent