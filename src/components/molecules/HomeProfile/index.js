import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import { ProfileDummy } from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.substitle}>Let's get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 24,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  title: {fontFamily: fonts.poppins[500], fontSize: 22, color: colors.black},
  substitle: {fontFamily: fonts.poppins[300], fontSize: 14, color: colors.grey},
  profile: {width: 50, height: 50, borderRadius: 8},
});
