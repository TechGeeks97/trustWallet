import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemsDivider from '../../../Styles/ItemsDivider'

export default function TransferNext({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[styles.allSame, styles.one]}>
                <Text style={{ fontSize: 20, fontWeight: '700', marginVertical: 5, color: '#FF3939' }}>-100(Token Symbol)</Text>
                <Text style={{ fontSize: 16, fontWeight: '400' }}>=$ 6.45</Text>
            </View>
            <View style={[styles.allSame, styles.two]}>
                <View style={{ width: 305, height: 145, overflow: 'hidden', backgroundColor: '#FFFFFF', borderWidth: 0.5, borderColor: '#E2E2E2', borderRadius: 10 }}>
                    <ScrollView>
                        <View style={{ flex: 1, padding: 10, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '400', flex: 1 }}>Date</Text>
                            <TextInput
                                placeholder='August 23,2022 at 1:45 PM'
                                multiline={true}
                                style={{ fontSize: 15, fontWeight: '400', color: '#8C8C8C', flex: 2 }}
                            />
                        </View>
                        <ItemsDivider />
                        <View style={{ flex: 1, padding: 10, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '400', flex: 2 }}>Status</Text>
                            <TextInput
                                placeholder='In Progress'
                                multiline={true}
                                placeholderTextColor={'#F99622'}
                                style={{ fontSize: 16, fontWeight: '400', color: '#8C8C8C', flex: 1 }}
                            />
                        </View>
                        <ItemsDivider />
                        <View style={{ flex: 1, padding: 10, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '400', flex: 1 }}>From</Text>
                            <TextInput
                                placeholder='TSMZmd5rqmgbznzSTL'
                                multiline={true}
                                style={{ fontSize: 15, fontWeight: '400', color: '#8C8C8C', flex: 2 }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={[styles.allSame, styles.three]}>
                <View style={{ width: 305, height: 65, overflow: 'hidden', backgroundColor: '#FFFFFF', borderWidth: 0.5, borderColor: '#E2E2E2', borderRadius: 10 }}>
                    <ScrollView>
                        <View style={{ flex: 1, padding: 10, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '400', flex: 1 }}>Network Fee</Text>
                            <TextInput
                                placeholder='0.3 (token symbol) $ 0.012'
                                multiline={true}
                                style={{ fontSize: 16, fontWeight: '400', color: '#8C8C8C', flex: 1 }}
                            />
                        </View>
                    </ScrollView>
                </View>
                <Text style={{ color: '#3275BB', fontSize: 14, fontWeight: '400', marginTop: 20 }}>
                    View on block explorer
                </Text>
            </View>
            <View style={[styles.allSame, styles.four]}>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={{ width: '90%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3275BB', borderRadius: 5 }}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#E2E2E2' }}>DONE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    allSame: {
        backgroundColor: '#F9F9F9'
    },
    one: {
        flex: 1,
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    two: {
        flex: 2,
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    three: {
        flex: 2,
        backgroundColor: '#E2E2E2',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    four: {
        flex: 1,
        backgroundColor: '#E2E2E2',
        alignItems: 'center'
    }
})