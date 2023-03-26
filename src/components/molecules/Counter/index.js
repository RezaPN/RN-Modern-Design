import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcMin, IcAdd} from '../../../assets';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const Counter = () => {
  const Button = ({children, onPress}) => (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button children={<IcMin />} />

      <Text style={styles.count}>16</Text>
      <Button children={<IcAdd />} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  count: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.poppins[400],
    marginHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
