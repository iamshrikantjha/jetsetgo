import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';

const RootScreen = () => {
    return (
    <NavigationContainer>

        <PaperProvider>
            <SafeAreaProvider>
                <View>
                    <Text>RootScreen</Text>
                </View>
            </SafeAreaProvider>
        </PaperProvider>
        </NavigationContainer>
    )
}

export default RootScreen

const styles = StyleSheet.create({})