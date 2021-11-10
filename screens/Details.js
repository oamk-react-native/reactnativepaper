import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import {View,Text } from 'react-native';
import {withTheme} from 'react-native-paper';
import { Appbar } from "react-native-paper";
import Item from '../components/Item';
import StyleSheet from '../styles/Styles';

function Details(props) {
  // Props contains theme and navigation objects.
  const { colors } = props.theme;
  const navigation = props.navigation;

  return (
    <>
      {/* Display Appbar for details view (it is different from MainAppBar) */ }
      <Appbar.Header>
        <Appbar.BackAction onPress ={() => {navigation.navigate('list')}} />
        <Appbar.Content title="Details" />
      </Appbar.Header>
       {/* Display Item component and relay data received as (route) parameter. */ }
      <View style={StyleSheet.container}>
        <Item item={props.route?.params.item} />
        <StatusBar backgroundColor={colors.primaryVariant} />
      </View>
      
    </>
  )
}

export default withTheme(Details);