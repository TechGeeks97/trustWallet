import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../Styles/Colors'

export default function ImportSelectedItems({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.one}>
                <TextInput
                    style={styles.input}
                    placeholder='Main Wallet'
                />
                <TextInput
                    style={[styles.input, styles.inputSub]}
                    placeholder='Words'
                    multiline={true}
                />
                <Text style={{ top: 130 }}>
                    It is 12 (Sometimes 24) words separated by spaces.
                </Text>
            </View>
            <View style={styles.two}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ALogin')}>
                    <Text style={styles.buttonText}>IMPORT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    one: {
        flex: 3,
        backgroundColor: Colors.primary,
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.light,
        borderRadius: 10,
        padding: 10,
        top: 100
    },
    inputSub: {
        height: 150,
        marginVertical: 10
    },
    two: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 15,
        color: Colors.primary
    }
})