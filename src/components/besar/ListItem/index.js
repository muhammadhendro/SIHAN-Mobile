import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CardItem} from '../../kecil/'

const ListItem = ({items, navigation}) => {
    return (
        <View style={styles.container} >
            {items.map((item) => {
                return (
                    <CardItem key={item.id} item={item} navigation={navigation} />
                )
            })}
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    }
})
