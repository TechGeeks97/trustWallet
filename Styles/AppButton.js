import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from './Colors'

export default function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.ButtonTextStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        width: '90%',
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonTextStyle: {
        fontSize: 20,
        color: Colors.primary
    }
})