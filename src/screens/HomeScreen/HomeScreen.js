import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,} from 'react-native'
import Profile from '../../../assets/images/Profile.jpg'

const HomeSreen = ({ route, navigation }) => {
  const {username} = route.params;
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={[styles.componentL, {flexDirection: "row"}]}>
          <Image source={Profile} style={styles.image}/>
          <View style={styles.component}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>{username}</Text>
            <Text style={styles.text}>PhoneNumber</Text>
            <Text style={styles.text}>Address</Text>
          </View>
        </View>
        <View style={styles.componentL}>
          <Text style={styles.text}>My Address</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles  = StyleSheet.create({
  root: {
    alignItems: 'left',
    padding: 20,
    borderColor: 'black',
  },
  component: {
    direction: 'LTR',
    padding: 5,
    marginBottom: 15,
  },
  componentL: {
    direction: 'LTR',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 35,
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    marginBottom: 12
  }
});

export default HomeSreen