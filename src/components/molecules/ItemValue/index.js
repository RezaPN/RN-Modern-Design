import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../../utils/fonts'
import colors from '../../../utils/colors'

const ItemValue = ({label = 'Cherry Healthy', value='IDR 18.390.000', valueStyle}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.poppins[400],
        fontSize: 14,
        color: colors.grey
    },
    value: {
        fontFamily: fonts.poppins[400],
        fontSize: 14,
        color: colors.black
    }
})