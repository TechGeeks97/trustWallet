import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AddCustomToken({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Receive')}>
                    <Image source={require('../../../Src/media/leftArrow.png')} style={{ width: 15, height: 14 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '400' }}>Add Custom Token</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#3275BB' }}>DONE</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <View style={{
                    width: 360,
                    flex: 0.9,
                    borderWidth: 0.5,
                    borderColor: '#E2E2E2',
                    borderRadius: 5,
                    alignItems: 'center'
                }}>
                    <View style={{ flex: 1, width: '90%', alignItems: 'center', padding: 5, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderColor: '#CACACA', margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Network</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#858585' }}>Ethereum</Text>
                            <Image source={require('../../../Src/media/greater.png')} style={{ marginHorizontal: 10 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '90%', alignItems: 'center', padding: 5, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderColor: '#CACACA', margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#858585' }}>Contact Address</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#3275BB' }}>PASTE</Text>
                            <Image source={require('../../../Src/media/BlueQR.png')} style={{ marginHorizontal: 10 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '90%', alignItems: 'center', padding: 5, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderColor: '#CACACA', margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#858585' }}>Name</Text>
                    </View>
                    <View style={{ flex: 1, width: '90%', alignItems: 'center', padding: 5, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderColor: '#CACACA', margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#858585' }}>Symbol</Text>
                    </View>
                    <View style={{ flex: 1, width: '90%', alignItems: 'center', padding: 5, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderColor: '#CACACA', margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#858585' }}>Decimals</Text>
                    </View>

                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    height: 81,
                    width: '90%',
                    backgroundColor: 'aqua',
                    borderRadius: 10,
                    backgroundColor: '#FFF3E1',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#CC8821', textAlign: 'center' }}>
                        Create a token is easy, including fake versions
                        of existing tokens. Add them by your risk or
                        learn about scams and security risks.
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#3275BB' }}>Learn about custom token</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, borderColor: '#F1F1F1', borderTopWidth: 0.5, width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={{ flex: 0.2, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../Src/media/Wallet.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ color: '#3275BB' }}>Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={{ flex: 0.2, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../Src/media/discover.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text>Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Browser')} style={{ flex: 0.2, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../Src/media/browser.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text>Browser</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ flex: 0.2, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../Src/media/Setting.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text>Setting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})