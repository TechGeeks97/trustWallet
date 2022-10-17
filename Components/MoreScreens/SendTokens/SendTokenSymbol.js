import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../Styles/Colors'
import ItemsDivider from '../../../Styles/ItemsDivider'

export default function SendTokenSymbol({ navigation }) {
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <ScrollView>

                <View style={styles.one}>
                    <View style={{
                        flex: 0.5,
                        width: '90%',
                        backgroundColor: Colors.primary,
                        borderRadius: 5,
                        overflow: 'hidden',
                        borderColor: Colors.light,
                        elevation: 5
                    }}>
                        <View style={{
                            flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                            justifyContent: 'space-between'
                        }}>
                            <TextInput
                                placeholder='Recipient Address'
                                style={{
                                    flex: 0.6,
                                    backgroundColor: '#FFF',
                                    height: 50,
                                    marginHorizontal: 5
                                }}
                            />
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontWeight: '500',
                                    color: '#3275BB',
                                    marginHorizontal: 5
                                }}>PASTE</Text>
                                <Image
                                    source={require('../../../Src/media/BlueQR.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 0
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
                            <TextInput
                                placeholder='Token Amount'
                                style={{
                                    flex: 0.6,
                                    backgroundColor: '#FFF',
                                    height: 50,
                                    marginHorizontal: 5
                                }}
                            />
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontWeight: '500',
                                    color: '#3275BB'
                                }}>
                                    PASTE
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        margin: 10,
                        backgroundColor: Colors.primary,
                        width: '90%', flex: 0.1
                    }}>
                        <Text>=$ 0.00</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.container}>
                <View style={styles.two}>
                    <TouchableOpacity onPress={() => navigation.navigate('Transfer')} style={{
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

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary
    },
    one: {
        marginTop: 50,
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