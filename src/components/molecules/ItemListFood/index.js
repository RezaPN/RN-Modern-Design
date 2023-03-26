import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import Rating from '../Rating';

const ItemListFood = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.wrapperText}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 12,
  },
  wrapperText: {flex: 1},
  title: {
    fontFamily: fonts.poppins[400],
    color: colors.black,
    fontSize: 16,
  },
  price: {
    fontFamily: fonts.poppins[400],
    color: colors.grey,
    fontSize: 13,
  },
});
