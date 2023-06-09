import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../assets/Dummy';
import {FoodCard, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.foodCardContainer}>
            <FoodCard img={FoodDummy1} />
            <FoodCard img={FoodDummy2} />
            <FoodCard img={FoodDummy3} />
            <FoodCard img={FoodDummy4} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginBottom: 24,
  },
  tabContainer: {flex: 1},
});
