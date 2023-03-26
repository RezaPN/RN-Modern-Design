import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, TextInput, Button} from '../../components';
import colors from '../../utils/colors';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title={'Sign Up'}
        subtitle={'Register and eat'}
        onBack={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.textInputWrapper}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label={'Full Name'} placeholder={'Type your full name'} />
        <Gap height={16} />
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
        />

        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button
          text={'Continue'}
          onPress={() => {
            navigation.navigate('SignUpAddress');
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
