import { PlatformColor, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { colorPallet, fontFamily } from '../../utils/Constants';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { NavigationContainer } from '@react-navigation/native';

const SpecialCard = ({ labelType, sceneURL, text1, text2 }:{ labelType: string, sceneURL: string, text1: string, text2: string }) => {
    return (
        <View style={{
            marginHorizontal: wp(5),
            marginTop: wp(10),
            // backgroundColor: 'pink',
            height: hp(60),
            width: wp(90),
            borderRadius: wp(5),
            position: 'relative',
        }}>

            <FastImage
                style={{
                    height: hp(60),
                    width: wp(90),
                    borderRadius: wp(5),
                }}
                source={{
                    uri: sceneURL ? sceneURL : 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/coconut-trees-reflection-at-backwaters-of-kerala-india-sheela-ajith.jpg',
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{
                position: 'absolute',
                left: 0,
                top: 0,
                marginTop: wp(10),
                marginHorizontal: wp(10),
            }}>
                <Text style={{
                    fontFamily: fontFamily.LatoBold,
                    fontSize: wp(5),
                    color: labelType === 'dark' ? colorPallet.dark : 'white',
                }}>{text1 ? text1 : 'Discover a deal'}</Text>
                <Text style={{
                    fontFamily: fontFamily.LatoBold,
                    fontSize: wp(8),
                    color: labelType === 'dark' ? colorPallet.dark : 'white',
                    marginTop: wp(5)
                }}>{text2 ? text2 : 'Save on your next stay'}</Text>
            </View>

        </View>
    )
}

const ExploreScreenComponent = ({ navigation }) => {
    return (
        <ScrollView>
            {/* HEADER */}
            <View style={{
                // backgroundColor: 'pink',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: wp(5),
                marginTop: hp(6),
            }}>
                {/* LOGO */}
                <FontAwesome name="paper-plane" size={wp(10)} color={colorPallet.primary} />
                {/* BRAND NAME */}
                <Text style={{
                    fontFamily: fontFamily.LatoBlack,
                    fontSize: wp(7),
                    color: colorPallet.primary,
                    marginLeft: wp(5),
                }}>JetSetGo</Text>
            </View>

            {/* THREE CIRCLE SECTION */}
            <View style={{
                marginHorizontal: wp(10),
                // backgroundColor: 'pink',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: hp(5),
            }}>
                <Pressable onPress={() => navigation.navigate('FlightsScreenComponent')} style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar.Icon size={wp(15)} icon="airplane" style={{
                        backgroundColor: colorPallet.primary,
                    }} />
                    <Text style={{
                        fontFamily: fontFamily.LatoBold,
                        color: colorPallet.dark,
                        paddingVertical: wp(3),
                        fontSize: wp(4.5),
                    }}>Flights</Text>
                </Pressable>


                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar.Icon size={wp(15)} icon="room-service" style={{
                        backgroundColor: colorPallet.primary,
                    }} />
                    <Text style={{
                        fontFamily: fontFamily.LatoBold,
                        color: colorPallet.dark,
                        paddingVertical: wp(3),
                        fontSize: wp(4.5),
                    }}>Hotels</Text>
                </View>



                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar.Icon size={wp(15)} icon="car-clock" style={{
                        backgroundColor: colorPallet.primary,
                    }} />
                    <Text style={{
                        fontFamily: fontFamily.LatoBold,
                        color: colorPallet.dark,
                        paddingVertical: wp(3),
                        fontSize: wp(4.5),
                    }}>Car Hire</Text>
                </View>
            </View>

            {/* SPECIAL CARDS */}
            <SpecialCard text1={'Discover a deal'} text2={'Save on your next stay'} labelType={'light'} sceneURL={'https://media.istockphoto.com/id/1089040822/photo/female-looking-far-away-in-thought-in-city.jpg?s=612x612&w=0&k=20&c=Q-guHFgM1qwHFIFAVrZ2ws1f46GjGL-eYaa7kP1XExk='} />
            <SpecialCard text1={'Tips, ticks and hacks'} text2={'Plan a multi-city trip easily'} labelType={'light'} sceneURL={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f77ba310-f093-498a-84fe-f9f1eaa758f8/dft23xj-05e638d3-bac7-4eea-8777-fd136635f288.jpg/v1/fill/w_569,h_316,q_75,strp/girl_looking_at_the_night_sky_by_proartistgirl0_dft23xj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzE2IiwicGF0aCI6IlwvZlwvZjc3YmEzMTAtZjA5My00OThhLTg0ZmUtZjlmMWVhYTc1OGY4XC9kZnQyM3hqLTA1ZTYzOGQzLWJhYzctNGVlYS04Nzc3LWZkMTM2NjM1ZjI4OC5qcGciLCJ3aWR0aCI6Ijw9NTY5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tpYbqg_umUCXl0adnI2NKnnXcDHfyFuKyeYt-ngub1Y'} />
            <SpecialCard text1={'Your room, for less'} text2={'Search hotels to get the right deal for you.'} labelType={'light'} sceneURL={'https://media.istockphoto.com/id/1089040822/photo/female-looking-far-away-in-thought-in-city.jpg?s=612x612&w=0&k=20&c=Q-guHFgM1qwHFIFAVrZ2ws1f46GjGL-eYaa7kP1XExk='} />
            <SpecialCard text1={'Your room, for less'} text2={'Search hotels to get the right deal for you.'} labelType={'light'} sceneURL={'https://addjoi.com/cdn/shop/articles/dae73dd65507b4bff45b1ec2a524f172334fc8b4_1100.jpg?v=1581551511'} />



            <View style={{ height: wp(20) }}>

            </View>
        </ScrollView>
    )
}

export default ExploreScreenComponent