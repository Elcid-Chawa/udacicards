import React, {Component} from 'react'
import {View, Text} from 'react-native';

class QuizView extends Component {
    render(){
        return (
            <View>
                <Text>Quiz View</Text>
                <Text>Quiz Question</Text>
                <Text>Show Answer Button</Text>
                <Text>Correct Button</Text>
                <Text>Incorrect Button</Text>
                <Text>Remaining Questions</Text>
                <Text>Score</Text>
                <Text>Restart Quiz</Text>
                <Text>Back button</Text>
            </View>
        )
    }
}

export default QuizView;

