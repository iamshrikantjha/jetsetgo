import { Platform, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreenComponent from '../screens/ProfileScreen/ProfileScreenComponent';
import ExploreScreenComponent from '../screens/ExploreScreen/ExploreScreenComponent';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FlightsScreenComponent from '../screens/FlightsScreen/FlightsScreenComponent';
import TripsScreenComponent from '../screens/TripsScreen/TripsScreenComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ScreensStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const FlightsStack = () => {
    return (
        <ScreensStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='ExploreScreenComponent'
        >
            <ScreensStack.Screen
                name="ExploreScreenComponent"
                component={ExploreScreenComponent}
                options={Platform.OS === 'android' ? { animationEnabled: false } : {}}
            />
            <ScreensStack.Screen
                name="FlightsScreenComponent"
                component={FlightsScreenComponent}
                options={Platform.OS === 'android' ? { animationEnabled: false } : {}}
            />
        </ScreensStack.Navigator>
    );
}


const CustomBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: wp(15),

                },
                tabBarIconStyle: {
                    backgroundColor: 'pink'
                }
            }}
        >
            <Tab.Screen
                name="Flights"
                component={FlightsStack}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialIcons name="explore" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="TripsScreen"
                component={TripsScreenComponent}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name="tripadvisor" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreenComponent}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name="user-circle" size={size} color={color} />;
                    },
                }}
            />

            {/* <Tab.Screen
                name="Home"
                component={ProfileScreenComponent}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={ExploreScreenComponent}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="cog" size={size} color={color} />;
                    },
                }}
            /> */}
        </Tab.Navigator>
    );
}


const MainScreen = () => {
    return (
        <ScreensStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <ScreensStack.Screen name="CustomBottomTabs" component={CustomBottomTabs} />

            <ScreensStack.Screen name="ProfileScreen" component={ProfileScreenComponent} />
            <ScreensStack.Screen name="ExploreScreen" component={ExploreScreenComponent} />
            <ScreensStack.Screen name="FlightScreen" component={FlightsScreenComponent} />
            <ScreensStack.Screen name="TripsScreen" component={TripsScreenComponent} />


            {/* <ScreensStack.Screen name="StartupScreen" component={StartupScreen} />
        <ScreensStack.Screen name="AuthScreen" component={AuthScreen} />
        <ScreensStack.Screen
          name="SocialAuthScreen"
          component={SocialAuthScreen}
        />
        <ScreensStack.Screen name="LandingScreen" component={BottomTabs} />
        <ScreensStack.Screen
          name="SubmitScoreScreen"
          component={SubmitScoreScreen}
        /> */}
        </ScreensStack.Navigator>
    );
};

export default MainScreen