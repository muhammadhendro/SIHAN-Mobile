import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IconHome, IconHomeAktif, IconPesan, IconPesanAktif, IconProfile, IconProfileAktif} from '../../../assets'
import { colors } from '../../../utils'

const TabItem = ({ isFocused, onPress, onLongPress, label}) => {

  const Icon = () => {
    if(label === "Home") {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if(label === "Pesan") {
      return isFocused ? <IconPesanAktif /> : <IconPesan />;
    }
    if(label === "Profile") {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }

    return <IconHome />;
  }
    return (
        <TouchableOpacity
        
          
          
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.container}>
            <Icon />
          <Text style={styles.text(isFocused)}>
            {label}
          </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
  text: (isFocused) => ({
color: isFocused ? colors.white : colors.secondary,
fontSize: 11,
marginTop: 4,

  })
})
