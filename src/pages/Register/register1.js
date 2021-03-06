import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {IlustrasiRegister1} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';

export default class Register1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Tombol
                icon="arrow-left"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            <View style={styles.ilustrasi}>
              <IlustrasiRegister1 />
              <Jarak height={5} />
              <Text style={styles.title}>D A F T A R</Text>
              {/* <Text style={styles.title2}>Isi Daftar Diri Anda</Text> */}

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Jarak width={10} />
                <View style={styles.circleDisabled}></View>
              </View>
            </View>

            <View style={styles.card}>
              <Inputan label="Nama" />
              <Inputan label="Email" />
              <Inputan label="No. Handphone" keyboardType="number-pad" />
              <Inputan label="Password" secureTextEntry />
              <Jarak height={25} />
              <Tombol
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={() => this.props.navigation.navigate('Login')}
              />
              
            </View>
            
                <Text
                  style={styles.register}
                  onPress={() =>
                    this.props.navigation.navigate('Login')
                  }>
                  Sudah punya akun?
                </Text>
              
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
  title2: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
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
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 30,
    position: 'absolute',
  },
  register: {
    textAlign: 'right',
    
   padding: 30,
   fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
  
});
