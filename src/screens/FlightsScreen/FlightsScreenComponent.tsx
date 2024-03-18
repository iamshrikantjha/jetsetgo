import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colorPallet, fontFamily } from '../../utils/Constants';
import { Button, Appbar, Searchbar, Snackbar, Chip } from 'react-native-paper';
import axios from 'axios';
import _ from 'lodash';
import { FlashList } from '@shopify/flash-list';

const GenericCard = ({ duration, origin, destination, price, airline }) => {
    // console.log(duration);
    return (
        <View
            // key={uid}
            style={{
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

            {/* 2 BOX */}
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
                }}>{duration ? duration : '3:55 pm - 8:15 pm'}</Text>
                <Text style={{
                    fontSize: wp(3),
                    fontFamily: fontFamily.LatoMedium,
                    color: colorPallet.dark,
                    marginBottom: wp(1.5),
                }}>
                    {origin || destination || airline ? `${origin} - ${destination}, ${airline}` : 'AGR-DEL, IndiGo'}
                </Text>

            </View>

            {/* 3 BOX */}
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
                }}>{price ? `₹ ${price}` : '₹ NA'}</Text>

            </View>
        </View>
    )
}

const FlightsScreenComponent = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [backup, setBackup] = useState([...data]);
    const [searchQuery, setSearchQuery] = useState('');


    const reOrderData = async () => {
        // console.log('Re order started');

        // console.log(data);
        const temp = _.orderBy(data, 'price', 'asc');
        // console.log('Changed Data', temp);
        setData(temp);

        // console.log('Re order ended');
    }

    const reOrderData2 = async () => {
        // console.log('Re order started');

        // console.log(data);
        const temp = _.orderBy(data, 'price', 'desc');
        // console.log('Changed Data', temp);
        setData(temp);

        // console.log('Re order ended');
    }

    const filterData = () => {
        setData([...backup]);
        if (!searchQuery.length) {

        } else {
            // const temp = _.filter(backup, el => el?.airline?.toLowerCase() === searchQuery.toLowerCase());
            const temp = backup.filter(el =>
                el?.airline?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log('Here airlines', temp);

            setData(temp);
        }

    }

    const resetData = () => {
        setData([...backup]);
    }

    const handleonChnageText = (e: any) => {
        setSearchQuery(e);
        filterData();
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://api.npoint.io/378e02e8e732bb1ac55b');
                // _.orderBy(response, 'price', 'asc');
                console.log(response);

                setData(response);
                setBackup(response);
            } catch (error: any) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <ScrollView style={{
            // backgroundColor: '#f2f2f2'
        }}>
            {/* APPBAR */}
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="JetSetGo - Easy Flights Now" />
                {/* <Appbar.Action icon="magnify" onPress={filterData} /> */}
            </Appbar.Header>

            <Searchbar
                placeholder="Search"
                onChangeText={(e) => handleonChnageText(e)}
                value={searchQuery}
                // traileringIcon={"magnify"}
                onSubmitEditing={filterData}
                style={{
                    marginHorizontal: wp(5),
                    marginTop: wp(4),
                }}
            // onTraileringIconPress={() => console.log(searchQuery)}
            />

            {/* FILTER CHIPS */}
            <View style={{
                marginHorizontal: wp(5),
                marginTop: wp(4),
                flexDirection: 'column',
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
                    marginTop: wp(5),
                    marginBottom: wp(4),
                    justifyContent: 'space-between',
                }}>
                    <Chip icon="chevron-down-circle" onPress={reOrderData}>Ascending</Chip>
                    <Chip icon="chevron-up-circle" onPress={reOrderData2}>Descending</Chip>
                    <Chip icon="lock-reset" onPress={resetData}>Reset Filter</Chip>
                </View>
            </View>

            {loading && <Text>Loading</Text>}
            {!loading && (
                <View>
                    {data?.map(item => (
                        <View key={item.id}>
                            <GenericCard
                                duration={item.duration}
                                origin={item.origin}
                                destination={item.destination}
                                price={item.price}
                                airline={item.airline}
                                seatsAvailable={item.seatsAvailable}
                            />
                        </View>
                    ))}
                </View>
            )}


            {/* <FlashList
                data={data}
                renderItem={({ item }) => (
                    <View key={item.id}>
                        <GenericCard
                            duration={item.duration}
                            origin={item.origin}
                            destination={item.destination}
                            price={item.price}
                            airline={item.airline}
                            seatsAvailable={item.seatsAvailable}
                        />
                    </View>
                )}
                estimatedItemSize={20}
            /> */}

            {/* GENERIC CARDS */}
            {/* <GenericCard /> */}
            {/* <GenericCard />
            <GenericCard />
            <GenericCard />
            <GenericCard />
            <GenericCard /> */}
            <View style={{
                height: hp(5),
            }}>

            </View>
        </ScrollView>
    )
}

export default FlightsScreenComponent