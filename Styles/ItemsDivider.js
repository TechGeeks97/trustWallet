import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from './Colors'

export default function ItemsDivider() {
    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: '#F2F2F2'
    }
})