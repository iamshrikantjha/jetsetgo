import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreenComponent from '../screens/ProfileScreen/ProfileScreenComponent';
import ExploreScreenComponent from '../screens/ExploreScreen/ExploreScreenComponent';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlightsScreenComponent from '../screens/FlightsScreen/FlightsScreenComponent';

const ScreensStack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const CustomBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }: any) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
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
            />
        </Tab.Navigator>
    );
}


const MainScreen = () => {
    return (
        <ScreensStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {/* <ScreensStack.Screen name="ProfileScreen" component={ProfileScreenComponent} /> */}
            {/* <ScreensStack.Screen name="ExploreScreen" component={ExploreScreenComponent} /> */}
            <ScreensStack.Screen name="FlightScreen" component={FlightsScreenComponent} />

            {/* <ScreensStack.Screen name="CustomBottomTabs" component={CustomBottomTabs} /> */}

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