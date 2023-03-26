import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FoodDummy1, StartOff, StartOn} from '../../../assets';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const FoodCard = ({img}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} resizeMode={'cover'} />
      <View style={styles.bottomContent} >
        <Text style={styles.text}>Cherry Healthy</Text>

        <View style={styles.scoreWrapper}>
          <View style={styles.starWrapper}>
            <StartOn />
            <StartOn />
            <StartOn />
            <StartOn />
            <StartOff />
          </View>
          <Text style={styles.score}>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 24,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    width: 200,
    marginRight: 24,
  },
  image: {
    width: 200,
    height: 140,
  },
  bottomContent: {
    padding: 12,
  },
  scoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starWrapper: {
    flexDirection: 'row',
    marginRight: 4,
  },
  text: {
    color: colors.black,
    fontFamily: fonts.poppins[400],
    fontSize: 16,
  },
  score: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.poppins[400],
  },
});
