import { Dimensions, Modal, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const { width } = Dimensions.get('window')

import Colors from '../../Styles/Colors'
import BoldWhite from '../../Styles/Texts/BoldWhite'
import WhiteSimple from '../../Styles/Texts/WhileSimple'

import Tokens from '../Main/Tokens'
import Nfts from '../Main/Nfts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const TopTab = createMaterialTopTabNavigator()
const MyTabs = () => {
    return (
        <TopTab.Navigator screenOptions={{ tabBarActiveTintColor: Colors.secondary }}>
            <TopTab.Screen name='Tokens' component={Tokens} options={{ tabBarLabelStyle: { fontSize: 18 } }} />
            <TopTab.Screen name='NFTs' component={Nfts} options={{ tabBarLabelStyle: { fontSize: 18 } }} />
        </TopTab.Navigator>
    )
}

export default function Wallet({ navigation }) {
    const [NotificationModal, setNotificationModal] = useState(false)
    const [modalVisibility, setModalVisibility] = useState(false)
    const handleConfirm = () => { }
    const handleModal = () => {
        setModalVisibility(!modalVisibility)
    }


    return (
        <View style={styles.container}>
            <View style={styles.subOne}>
                {/*  Header Portion */}
                <View style={styles.subOneOne}>
                    <View style={styles.subOneOneSubA}>
                        <TouchableOpacity style={styles.subOneOneSubAIcon} onPress={() => navigation.navigate("Notification's")}>
                            <Image
                                source={require('../../Src/bell.png')}
                                style={{
                                    width: 17,
                                    height: 18.37
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subOneOneSubB}>
                        <BoldWhite>$0.00</BoldWhite>
                    </View>
                    <View style={styles.subOneOneSubC}>
                        <TouchableOpacity style={styles.subOneOneSubAIcon} onPress={() => navigation.navigate('Add Token')}>
                            <Image
                                source={require('../../Src/Slide.png')}
                                style={{
                                    width: 18.83,
                                    height: 17
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.subOneTwo}>
                    <Text style={styles.headerText}>Main Wallet1</Text>
                </View>

                <View style={styles.subOneThree}>
                    <TouchableOpacity style={styles.sameIcons} onPress={() => navigation.navigate('Buy Crypto')} >
                        <View style={styles.sameIconsSub}>
                            <Image
                                source={require('../../Src/media/Buy.png')}
                                style={{
                                    width: 22,
                                    height: 16
                                }}
                            />
                        </View>
                        <WhiteSimple>Buy</WhiteSimple>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sameIcons} onPress={() => navigation.navigate('Swap')}>
                        <View style={styles.sameIconsSub}>
                            <Image
                                source={require('../../Src/media/ArrowOne.png')}
                                style={{ width: 22, height: 10 }}
                            />
                            <Image
                                source={require('../../Src/media/ArrowTwo.png')}
                                style={{ width: 22, height: 10 }}
                            />
                        </View>
                        <WhiteSimple>Swap</WhiteSimple>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sameIcons} onPress={() => navigation.navigate('Send')}>
                        <View style={styles.sameIconsSub}>
                            <Image
                                source={require('../../Src/media/Send.png')}
                                style={{ width: 15, height: 18 }}
                            />
                            <Image
                                source={require('../../Src/media/line.png')}
                                style={{ width: 20, height: 2 }}
                            />
                        </View>
                        <WhiteSimple>Send</WhiteSimple>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sameIcons} onPress={() => navigation.navigate('Receive')} >
                        <View style={styles.sameIconsSub}>
                            <Image
                                source={require('../../Src/media/Receive.png')}
                                style={{ width: 15, height: 18 }}
                            />
                            <Image
                                source={require('../../Src/media/line.png')}
                                style={{ width: 20, height: 2 }}
                            />
                        </View>
                        <WhiteSimple>Receive</WhiteSimple>
                    </TouchableOpacity>
                </View>

            </View>
            {/* Bottom */}
            <View style={styles.subTwo}>
                <View style={{ width: '100%', flex: 1, backgroundColor: '#FFF' }}>
                    <MyTabs />
                </View>
            </View>

            {/* Modal */}

            <Modal
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
                            onChangeText={(t) => setInputValue(t)}
                            placeholder='Amount'
                            style={{ fontSize: 15, fontWeight: '400', width: '100%', height: 40, borderBottomWidth: 0.5, borderColor: '#3275BB' }}
                        />
                        <View style={{ width: '100%', height: 50 }} />
                        <View style={{ width: '100%', height: 50, flexDirection: 'row' }} >
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#3275BB' }}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleConfirm}>
                                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#3275BB' }} > Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary
    },


    subOne: {
        flex: 1,
        backgroundColor: Colors.secondary
    },
    subOneOne: {
        flex: 2,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        bottom: 35
    },
    subOneOneSubA: {
        flex: 0.2,
        backgroundColor: Colors.secondary,
        justifyContent: 'center'
    },
    subOneOneSubAIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subOneOneSubB: {
        flex: 0.3,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subOneOneSubC: {
        flex: 0.2,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    subOneTwo: {
        flex: 1,
        backgroundColor: Colors.secondary,
        justifyContent: 'flex-start',
        alignItems: 'center',
        bottom: 15
    },
    subOneThree: {
        flex: 1,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 20
    },
    sameIcons: {
        width: '20%',
        flex: 0.2,
        backgroundColor: Colors.secondary,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    sameIconsSub: {
        width: 40,
        height: 40,
        backgroundColor: Colors.secondarySub,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    headerText: {
        fontSize: 20,
        color: Colors.primary
    },


    subTwo: {
        flex: 2,
        backgroundColor: '#AAA',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
})