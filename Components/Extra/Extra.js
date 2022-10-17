import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
    {
        kay: 's1',
        title: 'Safe and secure',
        text: 'Your private key never share outside this device',
        image: require('../../Src/media/Slider/imageOne.png'),
        backgroundColor: '#FFFFFF'
    },
    {
        kay: 's2',
        title: 'One Wallet, All Assets',
        text: 'All your assets in one place.',
        image: require('../../Src/media/Slider/ImageTwo.png'),
        backgroundColor: '#FFFFFF'
    },
    {
        kay: 's3',
        title: 'Trade Assets',
        text: 'Trade your assets anonymously',
        image: require('../../Src/media/Slider/ImageThree.png'),
        backgroundColor: '#FFFFFF'
    },
    {
        kay: 's4',
        title: 'Explore decentralized apps',
        text: 'Make your dreams come true in real world.',
        image: require('../../Src/media/Slider/ImageFour.png'),
        backgroundColor: '#FFFFFF'
    },
]

export default function Extra({ navigation }) {
    const [showRealApp, setShowRealApp] = useState(false)
    const onDone = () => {
        setShowRealApp(true)
    }
    const onSkip = () => {
        setShowRealApp(true)
    }
    const buttonLabel = (label) => {
        return (
            <View style={{ padding: 12 }}>
                <Text style={{ color: '#3275BB', fontSize: 15, fontWeight: '500' }}>
                    {label}
                </Text>
            </View>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingBottom: 100
            }}>
                <View style={{ flex: 0.8, width: '80%', backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', padding: 10 }}>
                    <Image
                        source={item.image}
                        style={{ bottom: 50 }}
                    />
                    <Text style={{
                        fontSize: 27,
                        color: '#000000',
                        textAlign: 'center',
                        fontWeight: '400',
                        marginVertical: 10
                    }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#828282'
                    }}>
                        {item.text}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <>
            {
                showRealApp ? (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <Text> App Intro Slider</Text >
                        <Button title='Show' onPress={() => setShowRealApp(false)} />
                    </View>
                ) : (
                    <AppIntroSlider
                        data={slides}
                        onDone={onDone}
                        onSkip={onSkip}
                        renderItem={renderItem}
                        activeDotStyle={
                            {
                                backgroundColor: '#3275BB',
                                width: 30,
                                bottom: 2
                            }
                        }
                        showSkipButton
                        renderNextButton={() => buttonLabel('New Wallet')}
                        renderSkipButton={() => buttonLabel('Already have!')}
                        renderDoneButton={() => buttonLabel('Done')}
                    />
                )
            }
        </>
    )
}

const styles = StyleSheet.create({})