import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import Rating from '../Rating';

const ItemListFood = ({image, onPress, rating, items, price, type, name, date, status}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.wrapperText}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.wrapperText}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
           <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.wrapperText}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items.IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.wrapperText}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items.IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.wrapperText}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
  items: {
    fontFamily: fonts.poppins[400],
    fontSize: 13,
    color: colors.grey,
  },
  date: {
    fontFamily: fonts.poppins[400],
    fontSize: 10,
    color: colors.grey,
    textAlign: 'right'
  },
  status: {
    fontFamily: fonts.poppins[400],
    fontSize: 10,
    color: colors.red,
    textAlign: 'right'
  }
});
