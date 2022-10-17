import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function AppSmallText({ children }) {
    return (
        <Text style={styles.textStyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
})