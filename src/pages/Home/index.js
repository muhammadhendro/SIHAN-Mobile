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

export default class Home extends Component {
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
        <ScrollView showsVerticalScrollIndicator={false} >
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.pilihProduct}>
          <Text style={styles.label}>Pilih Kategori</Text>
          <ListProducts products={products} />
        </View>

        <View style={styles.pilihItem}>
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}> Produk </Text> yang anda
            inginkan
          </Text>
          <ListItem items={items} />
          <Tombol title="Lihat Semua" type="text" padding={7} />
        </View>
        <Jarak height={70} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihProduct: {
    marginHorizontal: 30,
    marginTop: 10,
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
