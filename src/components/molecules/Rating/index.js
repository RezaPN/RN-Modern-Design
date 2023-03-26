import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StartOff, StartOn} from '../../../assets';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const Rating = () => {
  return (
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
  );
};

export default Rating;

const styles = StyleSheet.create({
  scoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starWrapper: {
    flexDirection: 'row',
    marginRight: 4,
  },
  score: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.poppins[400],
  },
});