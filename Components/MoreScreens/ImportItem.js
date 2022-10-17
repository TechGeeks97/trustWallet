import {
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Platform,
    StatusBar
} from 'react-native'
import React from 'react'

import Colors from '../../Styles/Colors'
import AppBoldText from '../../Styles/Texts/AppBoldText'
import AppText from '../../Styles/Texts/AppText'
import AppSmallText from '../../Styles/Texts/AppSmallText'
import AppSmallDanger from '../../Styles/Texts/AppSmallDanger'
import AppSmallSuccess from '../../Styles/Texts/AppSmallSuccess'
import ItemsDivider from '../../Styles/ItemsDivider'

export default function ImportItem() {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 0.1,
                width: '100%',
                backgroundColor: Colors.lightSuccess,
                overflow: 'hidden',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 30
            }}>
                <Image
                    style={{
                        width: 50,
                        height: 50
                    }}
                    source={require('../../Src/shield.png')}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>
                    Multi-Coin Wallet
                </Text>
            </View>
            <ScrollView style={styles.same}>

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

                {/* 4 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 5 */}

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

                {/* 6 */}

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

                {/* 7 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 8 */}
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

                {/* 9 */}
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

                {/* 10 */}

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

                {/* 11 */}

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

                {/* 12 */}

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

                {/* 13 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 14 */}

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

                {/* 15 */}

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

                {/* 16 */}

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

                {/* 17 */}

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

                {/* 18 */}

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

                {/* 19 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 20 */}

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

                {/* 21 */}

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

                {/* 22 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 23 */}
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

                {/* 24 */}
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

                {/* 25 */}

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

                {/* 26 */}

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

                {/* 27 */}

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

                {/* 28 */}

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
                        <View></View>
                    </View>
                    <View style={styles.endText}>
                        <AppText>0 BTC</AppText>
                    </View>
                </TouchableOpacity>
                <ItemsDivider />

                {/* 29 */}

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

                {/* 30 */}

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

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    same: {
        width: '95%',
        flex: 0.9,
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