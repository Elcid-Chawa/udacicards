import React, {Component} from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizView from './QuizView';

const QuizStack =  createNativeStackNavigator();

function ToQuiz({ navigation }){
    return (
        <View>
            <Text>Deck View Title</Text>
                <Text>Number of Cards in Deck</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <Text>Quiz</Text>
                </TouchableOpacity>
                <Text>Add Question</Text>
                <Text>+++++++++++++++</Text>
            
        </View>
    )
}


class DeckView extends Component {
    render(){
        return (
            <QuizStack.Navigator>
                <QuizStack.Screen name="Quiz1" component={ToQuiz} />
            </QuizStack.Navigator>                
        )
    }
}

export default DeckView;

