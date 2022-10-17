import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../../Styles/Colors'
import ItemsDivider from '../../../Styles/ItemsDivider'

export default function SendTokenSymbol() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [firstError, setFirstError] = useState('')
    const [secondError, setSecondError] = useState('')
    const firstValidation = () => {
        if (first == '') {
            setFirstError('This field is required or not valid')
        }
        else {
            setFirstError('')
        }
    }
    const secondValidation = () => {
        if (second == '') {
            setSecondError('This field is required')
        }
        else {
            setSecondError('')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.one}>
                <View style={{
                    flex: 0.5,
                    width: '90%',
                    backgroundColor: Colors.primary,
                    borderRadius: 5,
                    overflow: 'hidden',
                    borderColor: Colors.light,
                    elevation: 5,
                    top: 50
                }}>
                    <ScrollView>
                        <View style={{
                            flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <TextInput
                                    placeholder='Recipient Address'
                                    style={{
                                        flex: 0.6,
                                        backgroundColor: '#FFF',
                                        height: 50,
                                        fontWeight: '400',
                                        fontSize: 16,
                                        color: '#8C8C8C'
                                    }}
                                    onChangeText={(t) => setFirst(t)}
                                    onBlur={firstValidation}
                                />
                                <Text style={{ color: '#FF5A5A' }}>{firstError}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '400',
                                    color: '#3275BB'
                                }}>PASTE</Text>
                                <Image
                                    source={require('../../../Src/blurQr.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 5
                                    }}
                                />
                            </View>
                        </View>
                        <ItemsDivider />
                        <View style={{
                            flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <TextInput
                                    placeholder='Recipient Address'
                                    style={{
                                        flex: 0.6,
                                        backgroundColor: '#FFF',
                                        height: 50,
                                        fontWeight: '400',
                                        fontSize: 16,
                                        color: '#8C8C8C'
                                    }}
                                    onChangeText={(t) => setSecond(t)}
                                    onBlur={secondValidation}
                                />
                                <Text style={{ color: '#FF5A5A' }}>{secondError}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '500',
                                    color: '#3275BB'
                                }}>
                                    PASTE
                                </Text>
                                <View style={{ margin: 5 }}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#3275BB',
                                        textAlign: 'center'
                                    }}>
                                        Token
                                    </Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#3275BB',
                                        textAlign: 'center'
                                    }}>
                                        Symbol
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.two}>
                <TouchableOpacity style={{
                    width: '90%',
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: Colors.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 50
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: Colors.primary
                    }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary
    },
    one: {
        width: '100%',
        flex: 4,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    two: {
        flex: 6,
        width: '100%',
        backgroundColor: Colors.primary,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})