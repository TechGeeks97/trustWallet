import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function BlueText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: Colors.secondary,
        fontWeight: 'bold'
    }
})