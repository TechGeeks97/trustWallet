import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotificationOne() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '400', textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})