import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Buy({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{
                width: '80%', flex: 0.5, backgroundColor: '#FFF',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 18, fontWeight: '400', color: '#000', textAlign: 'center'
                }}>
                    This page should redirect user to the recharge website with the wallet address to buy any cryptocurrency.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
})