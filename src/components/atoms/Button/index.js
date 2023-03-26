import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, color = '#FFC700', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
