import React, {Component} from 'react'
import {View, Button, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckView from './DeckView';
import QuizView from './QuizView';
import { connect } from 'react-redux';
import { initializeDeck } from '../actions';

const DeckStack = createNativeStackNavigator();

function ToDeck({ navigation }){
    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Deck2')}
            >
                <Text>Deck Name</Text>
            </TouchableOpacity>
        </View>
    )
}

class DeckListView extends Component {
    componentDidMount(){
        const { dispatch } = this.props
        dispatch(initializeDeck());
        
    }

    render(){
        return (
                
                <DeckStack.Navigator>

                    <DeckStack.Screen 
                        name='Deck'
                        component={ToDeck}
                    />
                        <DeckStack.Screen 
                            name='Deck2'
                            component={DeckView}
                        />
                    
                    <DeckStack.Screen 
                        name='Quiz'
                        component={QuizView}
                    />
                </DeckStack.Navigator>
                
                
            
            
        )
    }
}

function mapStateToProps({decks}){
    return{
        decks
    }
}

export default connect(mapStateToProps)(DeckListView);

