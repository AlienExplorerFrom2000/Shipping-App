import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'


const SignUpScreen = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const onRegisterPressed =() => {
    alert('You tapped the sign up button!');
  };
  const onCancelPressed =() => {
    navigation.navigate('Sign In Page');
  };
  const onTermsOfUsePressed = () => {
    navigation.navigate('Terms Of Use Page');
  };
  const onPrivacyPolicyPressed = () => {
    alert('The privacy policies')
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
        />
        <CustomInput placeholder="Email" 
                    value={email} 
                    setValue={setEmail}
        />
        <CustomInput placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
        />
        <CustomInput placeholder="Repeat Password" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
        />

        <CustomButton text="Register" 
                      onPress={onRegisterPressed}
                      type="PRIMARY"
        />
        <CustomButton text="Cancel" 
                      onPress={onCancelPressed}
                      type="SECONDARY"
        />

        <Text>
          The <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and {' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>privacy policies</Text>
        </Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
});

export default SignUpScreen