import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const RenderOrder = ({}) => {
  return (
    <View style={styles.content}> 
      <Header title={'Your Orders'} subtitle={'Wait for the best meal'} />
      <View style={styles.tabContainer}>
        <OrderTabSection/>
      </View>
    </View>
  );
};

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);

  return (
    <View style={styles.container}>
      {isEmpty ? <EmptyOrder /> : <RenderOrder />}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  }
});
