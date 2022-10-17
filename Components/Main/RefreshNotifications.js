import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RefreshNotifications({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../Src/NotificationR.png')} />
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#8C8C8C' }}>
                Your Notifications will shown here
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#3275BB' }}>
                    Refresh
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})