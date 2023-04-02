import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {EmptyOrder, Header} from '../../components';

const RenderOrder = ({}) => {
  return (
    <View>
      <Header title={'Your Orders'} subtitle={'Wait for the best meal'} />
    </View>
  );
}

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);

  return (
    <View style={styles.container}>
      {isEmpty ? <EmptyOrder /> : <RenderOrder /> }
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
