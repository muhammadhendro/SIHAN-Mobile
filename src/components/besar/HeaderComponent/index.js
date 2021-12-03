import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { IconCari } from '../../../assets'
import { colors, fonts, responsiveHeight } from '../../../utils'
import { Jarak, Tombol } from '../../kecil'


export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperHeader}>
                <View style={styles.searchSection}>
                    <IconCari />
                    <TextInput placeholder="Mau cari apa hari ini..." style={styles.input} />
                </View>
                <Jarak width={10} />
                <Tombol icon="keranjang"  padding={10} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: responsiveHeight(125)
    },
    wrapperHeader: {
marginTop: 15,
marginHorizontal: 30,
flexDirection: 'row',
    },
    searchSection : {
        flex: 1,
        flexDirection: 'row',
backgroundColor: colors.white,
borderRadius: 10,
paddingLeft: 10,
alignItems: 'center',
    },
    input: {
        fontSize: 16,
fontFamily: fonts.primary.regular
    }
})
