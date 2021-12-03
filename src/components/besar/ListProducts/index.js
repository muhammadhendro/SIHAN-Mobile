import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardProduct} from '../../kecil'
const ListProducts = ({products}) => {
  return (
    <View style={styles.container}>
      {products.map(product => {
        return <CardProduct product={product} key={product.id} />
      })}
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});
