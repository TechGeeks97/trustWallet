import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import React from 'react'

export default function Screen({ children }) {
    return (
        <View>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})