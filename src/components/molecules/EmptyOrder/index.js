import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILOrderEmpty} from '../../../assets';
import {Button, Gap} from '../../../components';
import colors from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ILOrderEmpty />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subtitle}>
        {'Seems like you have not\nordered any food yet'}
      </Text>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          text={'Find Foods'}
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
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
    width: '100%',
  },
});
