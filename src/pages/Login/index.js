import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ilustrasi, Logo} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Text style={styles.login}>L O G I N</Text>
          <Ilustrasi />
        </View>
        <View style={styles.cardLogin}>
          <Inputan label="Username/Email" />
          <Inputan label="Password" secureTextEntry />
          <Jarak height={25} />
          <Tombol
            title="Login"
            type="text"
            padding={12}
            fontSize={18}
            onPress={() => this.props.navigation.navigate('MainApp')}
          />
        </View>

        <View style={styles.register}>
          
          <Text
            style={styles.textBlue}
            onPress={() => this.props.navigation.navigate('register1')}>
             Daftar
          </Text>
          <Text
            style={styles.textBlue}
            onPress={() => this.props.navigation.navigate('lupapassword')}>
            Lupa Password?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(70),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    flexDirection: 'row',
   justifyContent: 'space-between',
    
   padding: 30,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
  login: {
    fontSize: 28,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    textAlign: 'center',
  },
});
