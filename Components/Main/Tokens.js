import { Image, StyleSheet, ScrollView, TouchableOpacity, View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'

import Colors from '../../Styles/Colors'
import AppBoldText from '../../Styles/Texts/AppBoldText'
import AppText from '../../Styles/Texts/AppText'
import AppSmallText from '../../Styles/Texts/AppSmallText'
import AppSmallDanger from '../../Styles/Texts/AppSmallDanger'
import AppSmallSuccess from '../../Styles/Texts/AppSmallSuccess'

export default function Tokens({ navigation }) {
    const handleBitCoin = () => {
        navigation.navigate('Bitcoin')
    }
    const handleEthereumCoin = () => {
        navigation.navigate('Ethereum')
    }
    const handleBnbCoin = () => {
        navigation.navigate('BNB')
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.same}>

                {/* 1 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBitCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 2 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 3 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 4 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBitCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 5 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 6 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 7 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBitCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 8 */}
                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 9 */}
                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />
                {/* 10 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, backgroundColor: '#AAA', flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, backgroundColor: '#FFF', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 11 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 12 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 13 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBitCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 14 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 15 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 16 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBitCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bitCoin.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$19,520.15</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35%</Text>
                                <Text style={{ fontSize: 15 }}>0 BTN</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 17 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleEthereumCoin} style={{ height: 50, width: '90%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/ethereum.png')}
                                style={{ width: 25, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 1750.87</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'red', marginLeft: 10 }}>-12.5%</Text>
                                <Text style={{ fontSize: 15 }}>0 ETH</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                {/* 18 */}

                <View style={{ height: 70, justifyContent: 'center', width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBnbCoin} style={{ height: 50, width: '90%', flexDirection: 'row', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/bnb1.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Text style={{ fontSize: 13, color: '#CCC' }}>$ 450.23</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: 'green', marginLeft: 10 }}>+5.35</Text>
                                <Text style={{ fontSize: 15 }}>0 BNB</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                <View style={{ height: 200, width: '100%' }}>
                    <View style={{ height: 30, width: '100%' }} />
                    <View style={{ height: 40, width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Add Token')} style={{ width: '40%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../Src/SliderBlack.webp')}
                                style={{ width: 30, height: 30, color: '#000' }}
                            />
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>Add Token</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
    },
    same: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.primary
    },
    one: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    OneImageContainer: {
        flex: 0.2,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle: {
        width: 50,
        height: 50
    },
    eImageStyle: {
        width: 30,
        height: 50
    },
    textContainer: {
        flex: 0.6,
        backgroundColor: Colors.primary,
        justifyContent: 'center'
    },
    textSub: {
        flex: 0.8,
        backgroundColor: Colors.primary
    },
    textSubA: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between'
    },
    endText: {
        flex: 0.2,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})