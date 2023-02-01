import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'



const SignInScreen = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed =() => {
    navigation.navigate('Home Page', {username: username});
  }
  const onForgotPasswordPressed =() => {
    navigation.navigate('Forget Password Page');
  }
  const onSignInFacebook =() => {
    alert('You tapped the sign in Facebook button!');
  }
  const onSignInGoogle =() => {
    alert('You tapped the sign in Google button!');
  }
  const onSignInApple =() => {
    alert('You tapped the sign in Apple button!');
  }
  const onSignUpPressed =() => {
    navigation.navigate('Sign Up Page');
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} 
              style={[styles.logo, {height: height*0.3}]} 
              resizeMode='containe'/>

        <CustomInput placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
        />
        <CustomInput placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
        />

        <CustomButton text="Sign In" 
                      onPress={onSignInPressed}
                      type="PRIMARY"
        />
        <CustomButton text="Forgot Password?" 
                      onPress={onForgotPasswordPressed}
                      type="TERTIARY"
        />
        <CustomButton text="Sign In with Facebook" 
                      onPress={onSignInFacebook}
                      bgColor="#E7EAF4"
                      fgColor="#4765A9"
        />
        <CustomButton text="Sign In with Google" 
                      onPress={onSignInGoogle}
                      bgColor="#FAE9EA"
                      fgColor="#DD4D44"
        />
        <CustomButton text="Sign In with Apple" 
                      onPress={onSignInApple}
                      bgColor="#e3e3e3"
                      fgColor="#363636"
        />
        <CustomButton text="Create New Account" 
                      onPress={onSignUpPressed}
                      type="TERTIARY"
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
  }
});

export default SignInScreen