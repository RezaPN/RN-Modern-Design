import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessOrder} from '../../assets';
import React from 'react';
import {Button, Gap} from '../../components';
import colors from '../../utils/colors';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ILSuccessOrder />

      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subtitle}>
        {'Just stay at home while we are\npreparing your best foods'}
      </Text>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          text={'Order Other Foods'}
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12}/>
        <Button
          text={'View My Order'}
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color={colors.grey}
          textColor={colors.white}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

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
