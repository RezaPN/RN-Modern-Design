import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcFordward} from '../../../assets';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

const ItemListMenu = ({text = 'Edit Profile'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <IcFordward />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center'},
  text: {
    fontSize: 14,
    fontFamily: fonts.poppins[400],
    color: colors.black,
  },
});
