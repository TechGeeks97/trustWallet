import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function BoldWhite({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: Colors.primary
    }
})