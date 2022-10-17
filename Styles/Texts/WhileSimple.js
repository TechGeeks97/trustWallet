import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function WhiteSimple({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        color: Colors.primary
    }
})