import { StyleSheet, View, Platform, StatusBar } from 'react-native'
import React from 'react'

export default function AppSafeArea() {
    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})