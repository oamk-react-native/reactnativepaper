import * as React from 'react';
import { Pressable } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import StyleSheet from '../styles/Styles';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

/**
 * Item component displays data inside card.
 * @param item Data for the card. 
 * @param props Properties passed from the parent component. Contains navigation, which is required for navigating to details component.
 * @returns 
 */
function Item({item},props) {
  return (
    // User can navigate to details view by pressing card. Item (that is pressed) is passed as parameter.
    <Pressable key={item.id} onPress={() => props.navigation.navigate('details',{item: item})}> 
      <Card style={StyleSheet.card}>
        <Card.Title title={item.title} subtitle={item.id} left={LeftContent} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.content}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.cover }} />
      </Card>
    </Pressable>  
  )
}

export default Item;