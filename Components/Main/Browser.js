import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

import BlueText from '../../Styles/Texts/BlueText'
import Colors from '../../Styles/Colors'

export default function Browser() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../Src/browser.webp')}
                style={styles.imageStyle}
            />
            <BlueText>Browser</BlueText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 212,
        height: 200,
        bottom: 20
    },
    text: {
        top: 10,
        fontSize: 15,
        color: Colors.link
    }
})