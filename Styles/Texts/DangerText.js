import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function DangerText({ children }) {
    return (
        <Text style={styles.textStyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: Colors.danger
    }
})