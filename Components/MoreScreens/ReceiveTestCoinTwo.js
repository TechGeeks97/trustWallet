import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Styles/Colors'
import AppBoldText from '../../Styles/Texts/AppBoldText'

// const { width } = Dimensions.get('window')

export default function ReceiveTestCoinTwo({ navigation }) {
    // const [modalVisibility, setModalVisibility] = useState(false)
    // const [inputValue, setInputValue] = useState('')
    // const handlePress = () => {
    //     setModalVisibility(!modalVisibility)
    // }
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <View style={styles.one}>
                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', width: '70%', borderWidth: 1, borderColor: Colors.light, borderRadius: 5 }}>
                        <Image
                            source={require('../../Screen/QRcode.png')}
                            style={{ width: 200, height: 200, margin: 10 }}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 15, padding: 5, color: Colors.light }}>
                            TSMZmd5rqmgbznzSTLE2yTh7jefeUXEMZx
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 272, justifyContent: 'center', alignItems: 'center', height: 34, backgroundColor: '#C6FFD2', borderRadius: 20, borderWidth: 0.5, borderColor: '#0C9600' }}>
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>Copied to Clipboard</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.two}>
                    <Text style={{ fontSize: 15, fontWeight: '600' }}>
                        12 (selected token)
                    </Text>
                </View>
                <View style={styles.three}>
                    <View style={{ width: '80%' }}>
                        <Text style={{ fontSize: 13, textAlign: 'center' }}>
                            Send <Text style={{ fontSize: 15 }}>(selected token (token symbol)</Text> to this address only. Sending any other coins may result in permanent loss.)
                        </Text>
                    </View>
                </View>
                <View style={styles.four}>
                    <View style={{
                        flex: 1, width: '80%', alignItems: 'center'
                    }}>
                        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Receive Test Coin')} style={{ flex: 0.2, height: 55, backgroundColor: '#5C9EE2', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/Copy.png')}
                                    style={{ width: 19, height: 22 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 0.2, height: 55, backgroundColor: '#5C9EE2', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                            // onPress={handlePress}
                            >
                                <Image
                                    source={require('../../Src/dollar.png')}
                                    style={{ width: 10, height: 18 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2, height: 55, backgroundColor: '#5C9EE2', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/share.png')}
                                    style={{ width: 24, height: 15 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 0.4,
                            width: '94%',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: 5
                        }}>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: '#3275BB' }}>Copy</Text>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: '#3275BB' }}>Set Amount</Text>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: '#3275BB' }}>Share</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <Modal
                animationType='slide'
                transparent visible={modalVisibility}
                presentationStyle='overFullScreen'
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                    <View style={{
                        position: 'absolute',
                        padding: 10,
                        top: '50%',
                        left: '50%',
                        elevation: 5,
                        transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
                        height: 180,
                        width: width * 0.8,
                        backgroundColor: '#FFF',
                        borderRadius: 7
                    }}>
                        <Text style={{ fontSize: 19, fontWeight: '400' }}>Enter amount</Text>
                        <TextInput
                            placeholder='Amount'
                            style={{ fontSize: 15, fontWeight: '400', width: '100%', height: 40, borderBottomWidth: 0.5, borderColor: '#3275BB' }}
                        />
                        <View style={{ width: '100%', height: 50 }} />
                        <View style={{ width: '100%', height: 50, flexDirection: 'row' }} >
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={handlePress}>
                                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#3275BB' }}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#3275BB' }} > Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal > */}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.17)'
    },
    containerMain: {
        flex: 1
    },
    one: {
        flex: 5.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    two: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    three: {
        flex: 0.9,
        alignItems: 'center'
    },
    four: {
        flex: 1.7,
        alignItems: 'center'
    },
})