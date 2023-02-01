import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ForgetPasswordScreen = ({ route, navigation }) => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const onResetPressed =() => {
        alert('You tapped the reset password!');
    };
    const onCancelPressed =() => {
        navigation.navigate('Sign In Page');
    };
    return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} 
              style={[styles.logo, {height: height*0.3}]} 
              resizeMode='containe'
        />
        <CustomInput placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
        />
        <CustomButton text="Reset Password" 
                      onPress={onResetPressed}
                      type="PRIMARY"
        />
        <CustomButton text="Cancel" 
                      onPress={onCancelPressed}
                      type="SECONDARY"
        />
      </View>
    </ScrollView>
  )
}

const styles  = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
      marginBottom: 15,
    }
});

export default ForgetPasswordScreen