import { Image, StyleSheet, ScrollView, View, Dimensions, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const { width } = Dimensions.get('window')
const height = width * 0.6
const images = [
    {
        key: '1',
        title: 'Safe and Secure',
        img: require('../../Src/media/Slider/ImageOne.png'),
        text: 'Your private key never share outside the device.'
    },
    {
        key: '2',
        title: 'One Wallet, All Assets',
        img: require('../../Src/media/Slider/Imagetwo.png'),
        text: 'All your assets in one place.'
    },
    {
        key: '3',
        title: 'Trade assets',
        img: require('../../Src/media/Slider/Imagethree.png'),
        text: 'Trade your assets anonymously.'

    },
    {
        key: '4',
        title: 'Explore decentralized apps',
        img: require('../../Src/media/Slider/Imagefour.png'),
        text: 'Make your dreams come true in digital world.'
    },
]

export default class Welcome extends Component {
    state = {
        active: 0
    }
    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== this.state.active) {
            this.setState({ active: slide })
        }
    }
    render() {
        const handleNew = () => {
            this.props.navigation.navigate('Legal')
        }
        const handleAlready = () => {
            this.props.navigation.navigate('Import (Selected Item)')
        }
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <ScrollView onScroll={this.change} horizontal style={{ width }} pagingEnabled showsHorizontalScrollIndicator={false}>
                        {
                            images.map(item => (
                                <View key={item.key} style={{ width, top: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={item.img} style={{ width: 133, height: 159, resizeMode: 'contain' }} />
                                    <Text style={{ top: 20, fontSize: 27, fontWeight: '400' }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ top: 20, fontSize: 15, fontWeight: '400', color: '#828282' }}>
                                        {item.text}
                                    </Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{ flex: 0.1, flexDirection: 'row', position: 'relative', alignSelf: 'center' }}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? styles.textPagingActive : styles.textPaging}>⬤</Text>
                        ))
                    }
                </View>
                <View style={{ flex: 0.4, backgroundColor: '#FFF', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleNew} style={{ width: 333, height: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3275BB', borderRadius: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFF' }}>NEW WALLET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAlready}>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#507499', top: 10 }}>Already have a Wallet?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: '#FFF'
    },
    textPaging: {
        marginHorizontal: 5,
        color: '#D9D9D9'
    },
    textPagingActive: {
        marginHorizontal: 5,
        color: '#2C78C8'
    },
})