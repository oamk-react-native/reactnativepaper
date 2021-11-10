import React,{useState} from 'react';
import { Appbar } from "react-native-paper";
import { TextInput } from 'react-native';
import StyleSheet from '../styles/Styles';

export default function MainAppBar({setSearchPhrase}) {
  // State variables for search phrase and for controlling UI (Should we display search view or "normal" app bar).
  const [search, setSearch] = useState('');
  const [doSearch, setDoSearch] = useState(false);

  // Function for updating state variables, when search is executed (user presses search on soft keyboard).
  const submit = (e) => {
    setSearchPhrase(search);
    setDoSearch(false);
  }

  // If not doing search, app bar with title and magnifying class is displayed.
  if (!doSearch) {
    return (
      <Appbar.Header>
        <Appbar.Content title="News" />
        <Appbar.Action icon="magnify" onPress ={() => {setDoSearch(true)}}/> 
      </Appbar.Header>
    )
  } else {
  // If doing search, back arrow and text input for typing in search phrase is displayed.
    return (
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.BackAction onPress ={() => {setDoSearch(false)}} />
        <TextInput 
          style={[StyleSheet.search]}
          placeholder='Search...'
          returnKeyType='search' // Show magnifying class or term search (appearance depends on platform) on softkeyboard.
          value={search}
          onChangeText = {text => setSearch(text)}
          onSubmitEditing={(e) => submit(e)} // Executed, when user hits search on softkeyboard.
        />
      </Appbar.Header>
    )
  }
}