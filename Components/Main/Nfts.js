import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../Styles/Texts/AppText'

export default function Nfts() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../Src/handMoney.png')}
                style={styles.imageStyle}
            />
            <AppText>Collectibles will appear here!</AppText>
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
        width: 100,
        height: 100
    }
})