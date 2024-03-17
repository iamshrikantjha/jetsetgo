import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colorPallet, fontFamily } from '../../utils/Constants';
import { Chip } from 'react-native-paper';


const GenericCard = () => {
    return (
        <View style={{
            backgroundColor: 'white',
            marginHorizontal: wp(3),
            marginTop: wp(3),
            borderRadius: wp(2),
            padding: wp(4),
            elevation: 5,
            flexDirection: 'row',
            flex: 1,
        }}>
            {/* 1 BOX */}
            <View style={{
                flex: 1,
                // backgroundColor: 'orange',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <MaterialCommunityIcons name="airplane-marker" size={wp(10)} color={colorPallet.primary} />
                <MaterialCommunityIcons name="cards-heart-outline" size={wp(6)} color={colorPallet.dark} style={{
                    marginTop: wp(3),
                }} />

            </View>

            <View style={{
                flex: 4,
                // backgroundColor: 'skyblue',
                flexDirection: 'column',
            }}>
                <Text style={{
                    fontSize: wp(5),
                    fontFamily: fontFamily.LatoHeavy,
                    color: colorPallet.dark,
                    marginBottom: wp(1),
                }}>3:55 pm - 8:15 pm</Text>
                <Text style={{
                    fontSize: wp(3),
                    fontFamily: fontFamily.LatoMedium,
                    color: colorPallet.dark,
                    marginBottom: wp(1.5),
                }}>AGR-DEL, IndiGo</Text>

            </View>

            <View style={{
                flex: 2,
                // backgroundColor: 'lightgreen',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}>
                <Text style={{
                    fontSize: wp(4),
                    fontFamily: fontFamily.LatoMedium,
                    color: colorPallet.dark,
                    // marginBottom: wp(1.5),
                }}>1 stop</Text>
                <Text style={{
                    fontSize: wp(3.7),
                    fontFamily: fontFamily.LatoRegular,
                    color: colorPallet.dark,
                    // marginBottom: wp(1.5),
                }}>4h 20m</Text>
                <Text style={{
                    fontSize: wp(4.5),
                    fontFamily: fontFamily.LatoBold,
                    color: colorPallet.dark,
                    alignSelf: 'flex-end',
                    marginTop: wp(4.5),
                    // marginBottom: wp(1.5),
                }}>₹ 8,071</Text>

            </View>
        </View>
    )
}

const FlightsScreenComponent = () => {
    return (
        <ScrollView style={{
            backgroundColor: '#f2f2f2'
        }}>
            {/* FILTER CHIPS */}
            <View style={{
                marginHorizontal: wp(5),
                marginTop: wp(5)
            }}>
                {/* LABEL */}
                <Text style={{
                    fontFamily: fontFamily.LatoBold,
                    fontSize: wp(5.5),
                    color: colorPallet.dark,
                }}>Flights to Indira Gandhi International</Text>
                
                {/* CHIPS */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: wp(3),
                    justifyContent: 'space-between',
                }}>
                    

                </View>
            </View>

            {/* GENERIC CARDS */}
            <GenericCard />
            <GenericCard />
            <GenericCard />
            <GenericCard />
            <GenericCard />
            <GenericCard />

        </ScrollView>
    )
}

export default FlightsScreenComponent