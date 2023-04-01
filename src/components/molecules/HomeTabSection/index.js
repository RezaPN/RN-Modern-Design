import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import ItemListFood from '../ItemListFood';



const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.itemListFoodWrapper}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.itemListFoodWrapper}>
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.itemListFoodWrapper}>
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={5}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
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
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  itemListFoodWrapper: {paddingTop: 8, paddingHorizontal: 24}
});
