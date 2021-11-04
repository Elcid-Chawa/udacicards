import { StatusBar } from 'expo-status-bar';
import Reac, {Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckListView from './component/DeckListView';
import NewDeck from './component/NewDeck';
import DeckView from './component/DeckView';
import { createStore } from 'redux';
import reducer from './reducers';

const Stack = createNativeStackNavigator();

const Tabs = Platform.OS === 'ios' 
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator()

class  App extends Component() {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Decks" component={DeckListView} />
            <Tabs.Screen name="Add Deck" component={NewDeck} />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
      
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect()(App)
