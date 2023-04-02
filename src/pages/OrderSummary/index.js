import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import {FoodDummy1} from '../../assets';

const FirstRowRender = ({}) => {
  return (
    <>
      <Text style={styles.title}>Item Ordered</Text>
      <ItemListFood image={FoodDummy1} items={16} type={'order-summary'} name={'Cherry Healthy'} price={'289.000'} />
    </>
  );
};

const SecondRowRender = ({}) => {
  return (
    <>
      <Text style={styles.title}>Details Transaction</Text>
      <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
      <ItemValue label="Driver" value="IDR 50.000" />
      <ItemValue label="Tax 10%" value="IDR 1.800.390" />
      <ItemValue
        label="Total Price"
        value="IDR 390.803.000"
        valueStyle={{color: colors.green}}
      />
    </>
  );
};

const ThirdRowRender = ({}) => {
  return (
    <>
      <Text style={styles.title}>Deliver to:</Text>
      <ItemValue label="Name" value="Angga Risky" />
      <ItemValue label="Phone No." value="0822 0819 9688" />
      <ItemValue label="Address" value="Setra Duta Palima" />
      <ItemValue label="House No." value="A5 Hook" />
      <ItemValue label="City" value="Bandung" />
    </>
  );
};

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title={'Payment'}
        subtitle={'You deserve better meal'}
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.rowWrapper}>
            <FirstRowRender />
            <Gap height={16} />
            <SecondRowRender />
            <Gap height={16} />
          </View>
          <View style={styles.rowWrapper}>
            <ThirdRowRender />
          </View>
          <Gap height={24} />
          <View style={{marginBottom: 26, marginHorizontal: 24}}>
            <Button
              text={'Checkout Now'}
              onPress={() => {
                navigation.replace('SuccessOrder');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.poppins[400],
    fontSize: 14,
    color: colors.black,
    marginBottom: 8,
  },
  rowWrapper: {
    paddingVertical: 16,
    backgroundColor: colors.white,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  container: {flex: 1},
});
