import { KeyboardAvoidingView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Styles/Colors'

export default function Ethereum() {
    return (
        <KeyboardAvoidingView style={{ flex: 1, width: '100%', backgroundColor: '#FFF' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 30, alignItems: 'center' }}>
                    <View style={{ height: '100%', width: '95%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15 }}>COIN</Text>
                        <Text style={{ fontSize: 14 }}>$ 1750.87 <Text style={{ fontSize: 13, color: 'red' }}>-12.5%</Text></Text>
                    </View>
                </View>
                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../Src/ethereum.png')}
                        style={{ width: 40, height: 70 }}
                    />
                </View>
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17 }}>0 ETH</Text>
                </View>
                <View style={{ height: 150, alignItems: 'center', backgroundColor: '#FFF' }}>
                    <View style={{ width: '50%', height: 100, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{ height: 45, justifyContent: 'center', alignItems: 'center', width: 45, backgroundColor: Colors.secondary, borderRadius: 45, marginHorizontal: 10 }}>
                            <Image
                                source={require('../../Src/media/Send.png')}
                                style={{ width: 13, height: 15 }}
                            />
                            <Image
                                source={require('../../Src/media/line.png')}
                                style={{ width: 15, height: 2 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 45, justifyContent: 'center', alignItems: 'center', width: 45, backgroundColor: Colors.secondary, borderRadius: 45, marginHorizontal: 10 }}>
                            <Image
                                source={require('../../Src/media/Receive.png')}
                                style={{ width: 13, height: 15 }}
                            />
                            <Image
                                source={require('../../Src/media/line.png')}
                                style={{ width: 15, height: 2 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '50%', height: 50, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{ height: 60, justifyContent: 'center', alignItems: 'center', width: 60, borderRadius: 60, marginHorizontal: 5 }}>
                            <Text style={{ fontSize: 15 }}>Send</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 60, marginHorizontal: 5 }}>
                            <Text>Receive</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#CCC', marginTop: 20 }}></View>
                <View style={{ height: 20 }} />
                <View style={{ height: 90, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../Src/media/Transaction.png')}
                        style={{ width: 60, height: 60 }}
                    />
                </View>
                <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.secondary, fontSize: 13 }}>Transactions will appear here!</Text>
                </View>
                <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.secondary, fontSize: 15, fontWeight: '700' }}>Buy ETH</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
