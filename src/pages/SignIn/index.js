import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import colors from '../../utils/colors';

const SignIn = ({navigation}) => {
  return (
    <View style={{backgroundColor: colors.default}}>
      <Header title={'Sign In'} subtitle={'Find your best ever meal'} />
      <View
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 24,
          paddingVertical: 26,
          marginTop: 20,
        }}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
        />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button text={'Sign In'} />
        <Gap height={12} />
        <Button
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          text={'Create New Account'}
          color={colors.grey}
          textColor={colors.white}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
