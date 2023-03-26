import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, TextInput, Button, Select} from '../../components';
import colors from '../../utils/colors';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title={'Address'}
        subtitle={`Make sure it's Valid`}
        onBack={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.textInputWrapper}>
        <TextInput label={'Phone No'} placeholder={'Type your phone number'} />
        <Gap height={16} />
        <TextInput label={'Address'} placeholder={'Type your address'} />

        <Gap height={16} />
        <TextInput label={'House No.'} placeholder={'Type your house number'} />
        <Gap height={16} />
        <Select label={'City'} />

        <Gap height={24} />
        <Button onPress={() => {navigation.replace('SuccessSignUp')}} text={'Continue'} />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.lightGrey, flex: 1},
  textInputWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
    textAlign: 'center',
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: colors.lightGrey,
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginBottom: 26,
  },
});
