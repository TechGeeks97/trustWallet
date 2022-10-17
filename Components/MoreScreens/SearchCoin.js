import {
    StyleSheet,
    TouchableOpacity,
    View,
    Platform,
    StatusBar,
    Image
} from 'react-native'
import React from 'react'

import Colors from '../../Styles/Colors'
import { Input, Icon } from 'react-native-elements'

import AppBoldText from '../../Styles/Texts/AppBoldText'
import AppText from '../../Styles/Texts/AppText'
import AppSmallText from '../../Styles/Texts/AppSmallText'
import AppSmallDanger from '../../Styles/Texts/AppSmallDanger'
import AppSmallSuccess from '../../Styles/Texts/AppSmallSuccess'
import ItemsDivider from '../../Styles/ItemsDivider'


export default function SearchCoin() {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: Colors.secondary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Input
                    rightIcon={
                        <Icon
                            name='search'
                            type='font-awesome'
                            size={24}
                            color={Colors.primary}
                        />
                    }
                    backgroundColor={Colors.primary}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        margin: 5,
                        fontSize: 15,
                        borderColor: Colors.secondary
                    }}
                />
            </View>
            <View style={{
                flex: 7,
                backgroundColor: Colors.primary
            }}>
                {/* 1 */}

                <TouchableOpacity style={styles.one}>
                    <View style={styles.OneImageContainer}>
                        <Image
                            source={require('../../Src/bitCoin.png')}
                            style={styles.ImageStyle}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textSub}>
                            <AppBoldText>Bitcoin</AppBoldText>
                            <View style={styles.textSubA}>
                                <AppSmallText>$19,520.15</AppSmallText>
                                <AppSmallDanger>-3.65%</AppSmallDanger>
                            </View>
                        </View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 2 */}

                <TouchableOpacity style={styles.one}>
                    <View style={styles.OneImageContainer}>
                        <Image
                            source={require('../../Src/ethereum.png')}
                            style={styles.eImageStyle}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textSub}>
                            <AppBoldText>Ethereum</AppBoldText>
                            <View style={styles.textSubA}>
                                <AppSmallText>$1,750.87</AppSmallText>
                                <AppSmallDanger>-12.5%</AppSmallDanger>
                            </View>
                        </View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 ETH</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 3 */}

                <TouchableOpacity style={styles.one}>
                    <View style={styles.OneImageContainer}>
                        <Image
                            source={require('../../Src/bnb1.png')}
                            style={styles.ImageStyle}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textSub}>
                            <AppBoldText>BNB</AppBoldText>
                            <View style={styles.textSubA}>
                                <AppSmallText>$450.23</AppSmallText>
                                <AppSmallSuccess>+5.35%</AppSmallSuccess>
                            </View>
                        </View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BNB</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    one: {
        flex: 0.1,
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