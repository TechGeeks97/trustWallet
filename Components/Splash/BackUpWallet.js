import { StyleSheet, TouchableOpacity, View, Text, Image, Button } from 'react-native'
import React, { useState } from 'react'

import CheckBox from 'react-native-custom-checkbox'

export default function LegalStatus({ navigation }) {
    const [check, setCheck] = useState(false)
    const [buttonDisable, setButtonDisable] = useState(!check)
    const [first, setFirst] = useState('')
    const handleCheck = (name, checked) => {
        if (checked == false) {
            setCheck(!check)
            setButtonDisable(!buttonDisable)
            setFirst('#8C8C8C')
        }
        else {
            setCheck(!check)
            setButtonDisable(!buttonDisable)
            setFirst('#3275BB')
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.7, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '700',
                    lineHeight: 23,
                    color: '#000',
                    marginVertical: 5
                }}>
                    Back up wallet now!
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#545454',
                    marginVertical: 5
                }}>
                    In the next step you will see your 12 words Secret Phrase that you can use to recover your wallet.
                </Text>
            </View>
            <View style={{ flex: 2.1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../../Src/media/BackUp.png')}
                    style={{ width: 133, height: 159 }}
                />
            </View>
            <View style={{ flex: 0.7, backgroundColor: '#FFF', alignItems: 'center' }}>
                <View style={{
                    width: '90%',
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderWidth: 0.5,
                    borderColor: first,
                    borderRadius: 5,
                    overflow: 'hidden',
                    alignItems: 'center',
                    flex: 0.8,
                    padding: 5
                }}>
                    <View style={{ flex: 0.1 }}>
                        <CheckBox
                            name='CheckBox'
                            checked={check}
                            style={{
                                backgroundColor: '#FFF',
                                color: first,
                                borderWidth: 1,
                                borderRadius: 3,
                                borderColor: '#3275BB',
                            }}
                            onChange={(name, checked) => handleCheck(name, checked)}
                        />
                    </View>
                    <View style={{ flex: 0.9, height: '100%', justifyContent: 'center' }}>
                        <Text style={{ marginHorizontal: 10, color: first, textAlign: 'justify', fontSize: 13 }}>
                            I understand if I loss my secret phrase, or I expose or share it to anybody,my funds may stolen. Trust PLUS will NEVER ask for it.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.5, backgroundColor: '#FFF', alignItems: 'center' }}>
                <View style={{
                    width: '90%', height: 43.6, margin: 10
                }}>
                    <Button onPress={() => navigation.navigate('Your Secret Phrase')} title='CONTINUE' disabled={buttonDisable} />
                </View>
            </View>
        </View>
    )
}

// #8C8C8C
// #3275BB

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
})