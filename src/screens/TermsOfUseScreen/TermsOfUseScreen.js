import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TermsOfUseScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>The following is the terms of use for this app. 
      The new sentence of the paragraph.</Text>
    </View>
  )
}

const styles  = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'black',
    marginVertical: 10,
    fontSize: 15,
  },
});

export default TermsOfUseScreen