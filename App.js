import React,{useState,useEffect} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from "./styles/Theme";
import Login from './screens/Login';
import List from './screens/List';
import Details from './screens/Details';
import MainAppBar from './components/MainAppBar';

export default function App() {
  const [search, setSearch] = useState(''); // State variable for relaying search phrase to list. 
  const Stack = createNativeStackNavigator();

  return (  
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="login" 
          screenOptions = {{
            header: () => <MainAppBar setSearchPhrase={setSearch}/> // MainAppBar will be displayd on every screen, if not hidden.
          }}>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}} // MainAppBar is not shown on login screen.
          />
          <Stack.Screen name="list">
              {props => <List {...props} extraData={search} // Pass search phrase (from state variable) to list.
              />} 
          </Stack.Screen>  
          <Stack.Screen
            name="details"
            component={Details}
            options={{headerShown: false}} // MainAppBar is not shown on details screen and it is replaced within Details component.
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}