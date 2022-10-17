import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function AppBoldText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})