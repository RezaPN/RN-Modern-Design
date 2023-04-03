import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import ItemListMenu from '../ItemListMenu';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemListFoodWrapper}>
      <ItemListMenu text='Edit Profile' />
      <ItemListMenu text='Home Address' />
      <ItemListMenu text='Security' />
      <ItemListMenu text='Payments' />
    </View>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemListFoodWrapper}>
      <ItemListMenu text='Rate App' />
      <ItemListMenu text='Help Center' />
      <ItemListMenu text='Privacy & Policy' />
      <ItemListMenu text='Terms & Conditions'/>
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={{width: 'auto'}}
    // labelStyle={{fontFamily: fonts.poppins[500], fontSize: 13}}
    indicatorStyle={{
      backgroundColor: colors.black,
      height: 3,
      width: 0.53,
      // marginLeft: '1%'
    }}
    style={{
      backgroundColor: colors.white,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: colors.thickWhite,
      borderBottomWidth: 1,
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: fonts.poppins[500],
          fontSize: 13,
          color: focused ? colors.black : colors.grey,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  itemListFoodWrapper: {paddingTop: 16, paddingHorizontal: 24},
});
