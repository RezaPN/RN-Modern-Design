import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Success} from '../../assets';
import {Button, Gap} from '../../components';
import colors from '../../utils/colors';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Success />
   
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subtitle}>
       {' Now you are able to order\n some foods as a self-reward'}
      </Text>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
      <Button text={'Find Foods'} onPress={() => navigation.replace("MainApp")} />
      </View>
 
    </View>
  );
};
 
export default SuccessSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.grey,
    fontFamily: 'Poppins-Light',
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  buttonWrapper: {
    width: '100%'
  }
});
