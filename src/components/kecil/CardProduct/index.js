import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardProduct = ({product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={product.gambar} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 5,
    borderRadius: 15,
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(55),
  },
});
