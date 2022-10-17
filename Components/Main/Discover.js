import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BlueText from '../../Styles/Texts/BlueText'

export default function Discover() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../Src/discoverPage.png')}
                style={styles.imageStyle}
            />
            <BlueText>Discover Items</BlueText>
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
        width: 200,
        height: 200,
        bottom: 20
    }
})