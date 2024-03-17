import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './ScreensStack';
// import ProfileScreenComponent from '../screens/ProfileScreen/ProfileScreenComponent';

const RootScreen = () => {
    return (
    <NavigationContainer>
        <PaperProvider>
            <SafeAreaProvider>
                    {/* <ProfileScreenComponent /> */}
                    <MainScreen />
            </SafeAreaProvider>
        </PaperProvider>
        </NavigationContainer>
    )
}

export default RootScreen

const styles = StyleSheet.create({})