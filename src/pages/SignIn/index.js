import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import colors from '../../utils/colors';
import { useForm } from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
  };

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
          value={form.email}
          onChangeText={value => {
            setForm('email', value);
          }}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}
          value={form.password}
          onChangeText={value => {
            setForm('password', value);
          }}
        secureTextEntry
        />
        <Gap height={24} />
        <Button text={'Sign In'} onPress={() => {
          onSubmit();
        }} />
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
