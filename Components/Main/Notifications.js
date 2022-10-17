import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemsDivider from '../../Styles/ItemsDivider'

export default function Notifications({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ flex: 1, width: '90%', justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Notification 1')}
                >
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Test Notification</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua ...
                        </Text>
                        <View style={{ width: 8, height: 8, backgroundColor: '#4695E7', borderRadius: 8 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <ItemsDivider />
            <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
                <TouchableOpacity style={{ flex: 1, width: '90%', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#8C8C8C' }}>Test Notification</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#8C8C8C' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua ...
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ItemsDivider />
            <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
                <TouchableOpacity style={{ flex: 1, width: '90%', justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#8C8C8C' }}>Test Notification</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#8C8C8C' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua ...
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ItemsDivider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'red'
    }
})