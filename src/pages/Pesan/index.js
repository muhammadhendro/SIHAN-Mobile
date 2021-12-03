import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  Jarak,
  ListItem,
  ListProducts,
  Tombol,
} from '../../components';
import {dummyItems, dummyProducts} from '../../data';
import {colors, fonts} from '../../utils';

export default class Pesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: dummyProducts,
      items: dummyItems,
    };
  }

  render() {
    const {products, items} = this.state;
    return (
      <View style={styles.page}>
          <HeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
        
        
        <View style={styles.pilihProduct}>
          
          <ListProducts products={products} />
        </View>

        <View style={styles.pilihItem}>
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}> Produk </Text> yang anda
            inginkan
          </Text>
          <ListItem items={items} />
          
        </View>
        <Jarak height={70} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {
marginTop: -30
  },
  pilihProduct: {
    marginHorizontal: 30,
   
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  pilihItem: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
