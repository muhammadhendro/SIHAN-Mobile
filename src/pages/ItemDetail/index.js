import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  heightMobileUI,
  responsiveWidth,
} from '../../utils';
import {
  CardProduct,
  Inputan,
  ItemSlider,
  Jarak,
  Pilihan,
  Tombol,
} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.route.params.item,
      images: this.props.route.params.item.gambar,
    };
  }

  render() {
    const {navigation} = this.props;
    const {item, images} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol
            icon="arrow-left"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ItemSlider images={images} />
        <View style={styles.container}>
          <View style={styles.product}>
            <CardProduct product={item.product} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.harga}>
              Harga: Rp. {numberWithCommas(item.harga)}
            </Text>
            <View style={styles.garis}></View>
            <View style={styles.wrapperJenisBerat}>
              <Text style={styles.jenisBerat}>Jenis: {item.jenis}</Text>
              <Text style={styles.jenisBerat}>Berat: {item.berat} Kg</Text>
            </View>
            <View style={styles.wrapperInput}>
              <Inputan
                label="Jumlah"
                width={responsiveWidth(166)}
                height={responsiveHeight(43)}
                fontSize={13}
              />
              <Pilihan
                label="Pilih Ukuran"
                width={responsiveWidth(166)}
                height={responsiveHeight(43)}
                fontSize={13}
                datas={item.ukuran}
              />
            </View>
            <Inputan
              label="Keterangan"
              textarea
              fontSize={13}
              placeholder="Isi jika ingin menambahkan keterangan"
            />
            <Jarak height={15} />
            <Tombol title="Masuk Keranjang" type="textIcon" icon="keranjang-putih" padding={responsiveHeight(17)} fontSize={18}  />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(500),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
    zIndex: 1,
  },
  desc: {
    marginHorizontal: 30,
  },
  nama: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.light,
  },
  product: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  garis: {
    borderWidth: 0.3,
    marginVertical: 5,
  },
  wrapperJenisBerat: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  jenisBerat: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
    marginRight: 60,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
