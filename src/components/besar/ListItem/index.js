import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CardItem} from '../../kecil/'

const ListItem = ({items}) => {
    return (
        <View style={styles.container} >
            {items.map((item) => {
                return (
                    <CardItem key={item.id} item={item} />
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
