import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: SecondRoute,
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
    style={{backgroundColor: colors.white}}
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
