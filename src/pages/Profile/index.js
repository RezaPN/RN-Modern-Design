import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {ProfileDummy} from '../../assets';
import fonts from '../../utils/fonts';
import { ProfileTabSection } from '../../components';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRowWrapper}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.profileName}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
      </View>
      <View style={styles.renderTabWrapper}>
        <ProfileTabSection/>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1},
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: colors.lightGrey,
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    marginBottom: 16,
  },
  profileName: {
    fontFamily: fonts.poppins[500],
    fontSize: 18,
    color: colors.black,
  },
  email: {
    fontFamily: fonts.poppins[500],
    fontSize: 14,
    color: colors.grey,
  },
  firstRowWrapper: {
    alignItems: 'center',
    paddingVertical: 26,
    backgroundColor: colors.white,
  },
  renderTabWrapper: {flex: 1, marginTop: 24},
});
