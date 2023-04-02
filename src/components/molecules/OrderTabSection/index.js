import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import ItemListFood from '../ItemListFood';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.itemListFoodWrapper}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          items={3}
          price={'18.000.000'}
          type={'in-progress'}
          name={'Sop Bumil'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          items={3}
          price={'18.000.000'}
          type={'in-progress'}
          name={'Sop Bumil'}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          items={3}
          price={'18.000.000'}
          type={'in-progress'}
          name={'Sop Bumil'}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          items={3}
          price={'18.000.000'}
          type={'in-progress'}
          name={'Sop Bumil'}
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.itemListFoodWrapper}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          price={'18.000.000'}
          type={'past-orders'}
          name={'Sop Bumil'}
          date={'Jun 12, 14:00'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          price={'18.000.000'}
          type={'past-orders'}
          name={'Sop Bumil'}
          date={'Mei 2, 09:00'}
          status={'Cancelled'}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
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

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({
  itemListFoodWrapper: {paddingTop: 8, paddingHorizontal: 24},
});
