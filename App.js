import { StatusBar } from 'expo-status-bar';
import React, {Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Provider, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckListView from './component/DeckListView';
import NewDeck from './component/NewDeck';
import DeckView from './component/DeckView';
import NewQuestion from './component/NewQuestion'
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import QuizView from './component/QuizView';
import { setLocalNotifcations } from './utils/helpers';

const Stack = createNativeStackNavigator();

const Tabs = Platform.OS === 'ios' 
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator()


const RootView = ()  => {
  return (<Tabs.Navigator>
            <Tabs.Screen 
            name="Desks" 
            component={DeckListView}
            />
            <Tabs.Screen name="Add Deck" component={NewDeck} />
          </Tabs.Navigator>
          )
}

class  App extends Component {

  componentDidMount(){
    setLocalNotifcations()
  }
 
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={RootView} options={{headerShown: false}} />
            <Stack.Screen name="Deck" component={DeckView} />
            <Stack.Screen name="Quiz" component={QuizView} />
            <Stack.Screen name = "Add Card" component={NewQuestion} />
          </Stack.Navigator>
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

export default App;
