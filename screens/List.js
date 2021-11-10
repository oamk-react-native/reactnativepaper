import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {FlatList, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import Item from '../components/Item';
import DATA  from '../Data';
import StyleSheet from '../styles/Styles';

function List(props) {
  const { colors } = props.theme; // Props includes also custom theme (defined in Theme.js) for this app.
  
  /**
   * Use effect is for reading search phrase. This code does not do anything with the search phrase, but you could perform search
   * against API or filter data. This version just prints out received search phrase to the console.
   */
  useEffect(() => {
    console.log("This search phrase was received: " + props.extraData);
  }, [props.extraData]) // Use effect is executed everytime, extraData passed from the App.js is changed (search state variable is updated).

  return (
    <>
      <View style={StyleSheet.container}>
        <FlatList // FlatList is used to render Items.
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={(item) => Item(item,props)} // Pass item and props to Item component.
        />
        <StatusBar backgroundColor={colors.primaryVariant} // Set background color for the StatusBar. 
        /> 
      </View>
      </>
  )
}


export default withTheme(List);

