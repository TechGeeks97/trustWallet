import {
    Text,
    View,
    Image,
    Switch,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Platform,
    StatusBar,
} from 'react-native';

import React, { useState } from 'react';
import Colors from '../../Styles/Colors';

const AddToken = ({ navigation }) => {

    // BitCoinOne

    const [isBitCoinEnabled, setIsBitCoinEnabled] = useState(false)
    const handleBitCoinSwitch = () => {
        if (isBitCoinEnabled) { }
        else { }
        setIsBitCoinEnabled(previousState => (!previousState))
    }

    // BitCoinTwo
    const [isBitCoinTwoEnabled, setIsBitCoinTwoEnabled] = useState(false)
    const handleBitTwoCoinSwitch = () => {
        if (isBitCoinTwoEnabled) { }
        else { }
        setIsBitCoinTwoEnabled(previousState => (!previousState))
    }
    // BitCoinThree
    const [isBitCoinThreeEnabled, setIsBitCoinThreeEnabled] = useState(false)
    const handleBitCoinThreeSwitch = () => {
        if (isBitCoinThreeEnabled) { }
        else { }
        setIsBitCoinThreeEnabled(previousState => (!previousState))
    }

    // EthereumOne

    const [isEthereumEnabled, setEthereumEnabled] = useState(false)
    const handleEthereumSwitch = () => {
        if (isEthereumEnabled) { }
        else { }
        setEthereumEnabled(previousState => (!previousState))
    }
    // EthereumTwo
    const [isEthereumTwoEnabled, setEthereumTwoEnabled] = useState(false)
    const handleEthereumTwoSwitch = () => {
        if (isEthereumTwoEnabled) { }
        else { }
        setEthereumTwoEnabled(previousState => (!previousState))
    }
    // EthereumThree
    const [isEthereumThreeEnabled, setEthereumThreeEnabled] = useState(false)
    const handleEthereumThreeSwitch = () => {
        if (isEthereumThreeEnabled) { }
        else { }
        setEthereumThreeEnabled(previousState => (!previousState))
    }
    // BNBOne

    const [isBnbEnabled, setBnbEnabled] = useState(false)
    const handleBnbSwitch = () => {
        if (isBnbEnabled) { }
        else { }
        setBnbEnabled(previousState => (!previousState))
    }

    // BNBTwo
    const [isBnbTwoEnabled, setBnbTwoEnabled] = useState(false)
    const handleBnbTwoSwitch = () => {
        if (isBnbTwoEnabled) { }
        else { }
        setBnbTwoEnabled(previousState => (!previousState))
    }

    // BNBThree
    const [isBnbThreeEnabled, setBnbThreeEnabled] = useState(false)
    const handleBnbThreeSwitch = () => {
        if (isBnbThreeEnabled) { }
        else { }
        setBnbThreeEnabled(previousState => (!previousState))
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>

                    <View style={{
                        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                        width: '100%',
                        height: 80,
                        flexDirection: 'row',
                        backgroundColor: Colors.secondary,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                            <Image
                                source={require('../../Src/media/ArrowTwo.png')}
                                style={{ width: 17, height: 12 }}
                            />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='search token'
                            placeholderTextColor={'#F5F5F5'}
                            style={{
                                color: '#FFF',
                                borderWidth: 0.5,
                                borderColor: '#F5F5F5',
                                borderRadius: 10,
                                width: '60%',
                                height: 40,
                                padding: 5
                            }}
                        />
                        <Image source={require('../../Src/media/plus.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </View>

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bitCoin.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBitCoinEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBitCoinSwitch}
                                    value={isBitCoinEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/ethereum.png')}
                                    style={{ width: 20, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isEthereumEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleEthereumSwitch}
                                    value={isEthereumEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bnb1.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBnbEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBnbSwitch}
                                    value={isBnbEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    {/* Two */}

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bitCoin.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBitCoinTwoEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBitTwoCoinSwitch}
                                    value={isBitCoinTwoEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/ethereum.png')}
                                    style={{ width: 20, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isEthereumTwoEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleEthereumTwoSwitch}
                                    value={isEthereumTwoEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bnb1.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBnbTwoEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBnbTwoSwitch}
                                    value={isBnbTwoEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    {/* Three */}

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bitCoin.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBitCoinThreeEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBitCoinThreeSwitch}
                                    value={isBitCoinThreeEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/ethereum.png')}
                                    style={{ width: 20, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isEthereumThreeEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleEthereumThreeSwitch}
                                    value={isEthereumThreeEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                    <View style={{ height: 50, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                        <View style={{ height: 50, width: '90%', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../Src/bnb1.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <View style={{ flex: 5, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BNB</Text>
                                <Switch
                                    trackColor={{ false: '#8C8C8C', true: '#74B2F3' }}
                                    thumbColor={isBnbThreeEnabled ? '#3275BB' : '#C8C8C8'}
                                    ios_backgroundColor='#C8C8C8'
                                    onValueChange={handleBnbThreeSwitch}
                                    value={isBnbThreeEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#CCC' }} />

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default AddToken;
