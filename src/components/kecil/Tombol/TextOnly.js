import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors, fonts } from '../../../utils'

const TextOnly = ({ padding, title}) => {
    
    
    return (
        <TouchableOpacity style={styles.container(padding)}>
            <Text style={styles.text} >
                {title}
            </Text>
            
        </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 10,
    }),
    text : {
        color: colors.white,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: fonts.primary.bold,
        
    }
    
})
