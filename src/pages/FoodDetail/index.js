import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FoodDummy5, IcBack, IcBackWhite} from '../../assets';
import {Button, Counter, Gap, Rating} from '../../components';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy5} style={styles.imgBackground}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <Gap height={40} />
        <View style={styles.bottomWrapper}>
          <View>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.price}>IDR 12.289.000</Text>
          </View>
          <View style={{width: 163, height: 45}}>
            <Button text={'Order Now'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  imgBackground: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: -40,
    paddingTop: 26,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.poppins[400],
    color: colors.black,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.poppins[400],
    color: colors.grey,
    marginBottom: 16,
  },
  label: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.poppins[400],
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: 13,
    fontFamily: fonts.poppins[400],
    color: colors.grey,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.poppins[400],
    color: colors.black,
  },
  mainContent: {flex: 1},
});
