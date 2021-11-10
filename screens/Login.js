import React from 'react';
import {View } from 'react-native';
import {withTheme, TextInput,Headline, Button} from 'react-native-paper';
import StyleSheet from '../styles/Styles';

function Login(props) {
  // Props contains (automatically) theme and navigation objects, since component is wrapped inside PaperProvider and NavigationContainer.
  const { colors } = props.theme;
  const navigation  = props.navigation;

  return (
    <View style={StyleSheet.login}> 
      <View style={StyleSheet.form}>
      <Headline style={[{color: colors.primaryVariant},StyleSheet.headline]}>Login</Headline>   
        <TextInput 
          label="Email"
          mode="outlined"
          left={<TextInput.Icon name="email" />}
          style={StyleSheet.textInput}
        />
        <TextInput 
          label="Password"
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon name="lock" />}
          style={[StyleSheet.textInput,{marginBottom: 24}]}
        />
        <Button 
          mode="contained" 
          style={StyleSheet.button}
          onPress={() => navigation.navigate('list')}
        >Submit</Button>
      </View>
    </View>
  )
}

export default withTheme(Login);
