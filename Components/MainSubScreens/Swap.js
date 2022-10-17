import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Swap() {

    const [buttonPress, setButtonPress] = useState(true)

    const [swapTextPOne, setSwapTextPOne] = useState('You pay')
    const [swapTextPTwo, setSwapTextPTwo] = useState('Balance: 0 BNB')
    const [imgOne, setImgOne] = useState(require('../../Src/bnb1.png'))
    const [imgAfterOne, setImgAfterOne] = useState('BNB')

    const [swapTextPThree, setSwapTextPThree] = useState('You get')
    const [swapTextPFour, setSwapTextPFour] = useState('Balance: 0 TRX')
    const [imgTwo, setImgTwo] = useState(require('../../Src/TRX.png'))
    const [imgAfterTwo, setImgAfterTwo] = useState('TXR')

    const handlePress = () => {
        setButtonPress(!buttonPress)
    }

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>

                    <View style={{
                        width: '100%',
                        height: 200,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={{
                            width: '90%',
                            height: 160,
                            borderRadius: 10,
                            overflow: 'hidden',
                            elevation: 3,
                            backgroundColor: '#FFF'
                        }}>
                            <View style={{ width: '100%', height: 65, flexDirection: 'row' }}>
                                <View style={{ width: '50%', height: '100%', marginTop: 5 }}>
                                    <Text style={{ marginLeft: 5, color: '#8C8C8C', top: 3 }}>
                                        {buttonPress ? swapTextPOne : swapTextPThree}
                                    </Text>
                                    <TextInput placeholder='0' placeholderTextColor={'#000'} style={{ marginLeft: 5, fontSize: 15 }} />
                                    <Text style={{ color: '#8C8C8C', marginLeft: 5 }}>
                                        {buttonPress ? swapTextPTwo : swapTextPFour}
                                    </Text>
                                </View>
                                <View style={{ width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <View style={{ width: '30%', justifyContent: 'center', height: '100%' }}>
                                        <Image source={buttonPress ? imgOne : imgTwo} style={buttonPress ? styles.imgOneStyle : styles.imgTwoStyle} />
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', height: '100%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            {buttonPress ? imgAfterOne : imgAfterTwo}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '100%', height: 30, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '65%', height: 1, backgroundColor: '#8C8C8C' }} />
                                <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../Src/media/Slider/Up.png')} style={{ width: 13, height: 20 }} />
                                    <Image source={require('../../Src/media/Slider/Down.png')} style={{ width: 13, height: 20 }} />
                                </TouchableOpacity>
                                <View style={{ width: '30%', height: 1, backgroundColor: '#8C8C8C' }} />
                            </View>

                            <View style={{ width: '100%', height: 65, flexDirection: 'row' }}>
                                <View style={{ width: '50%', height: '100%' }}>
                                    <Text style={{ marginLeft: 5, color: '#8C8C8C' }}>
                                        {buttonPress ? swapTextPThree : swapTextPOne}
                                    </Text>
                                    <TextInput placeholder='0' placeholderTextColor={'#000'} style={{ marginLeft: 5, fontSize: 15 }} />
                                    <Text style={{ marginLeft: 5, color: '#8C8C8C', bottom: 5 }}>
                                        {buttonPress ? swapTextPFour : swapTextPTwo}
                                    </Text>
                                </View>
                                <View style={{ width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <View style={{ width: '30%', justifyContent: 'center', height: '100%' }}>
                                        <Image source={buttonPress ? imgTwo : imgOne} style={buttonPress ? styles.imgTwoStyle : styles.imgOneStyle} />
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', height: '100%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            {buttonPress ? imgAfterTwo : imgAfterOne}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, flex: 1, alignItems: 'center' }}>
                        <View style={{ width: '90%', flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                flex: 0.2, height: 40, backgroundColor: 'rgb(216,241,255)', borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#3275BB', fontSize: 13, fontWeight: '400' }}>0%</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 0.2, height: 40, backgroundColor: 'rgb(216,241,255)', borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#3275BB', fontSize: 13, fontWeight: '400' }}>25%</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 0.2, height: 40, backgroundColor: 'rgb(216,241,255)', borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#3275BB', fontSize: 13, fontWeight: '400' }}>50%</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 0.2, height: 40, backgroundColor: 'rgb(216,241,255)', borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: '#3275BB', fontSize: 13, fontWeight: '400' }}>100%</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={{ width: '90%', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 18, color: '#8C8C8C' }}>1 BTN =123.123345 TRX</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 180 }}>
                        <View style={{ flex: 1, width: '90%', alignItems: 'center' }}>
                            <View style={{ width: '100%', left: '5%' }}>
                                <Button title='SWAP' onPress={handlePress} />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    )
}

const styles = StyleSheet.create({
    imgOneStyle: {
        width: 40, height: 40
    },
    imgTwoStyle: {
        width: 42, height: 40
    }
})