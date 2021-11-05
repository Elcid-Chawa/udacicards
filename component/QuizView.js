import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class QuizView extends Component {
    render(){
        const { questions } = this.props;
        console.log(questions)
        return (
            <ScrollView>
                {questions && (
                    questions.map((q, index )=> (
                       <View key={index}>
                        <Text>Quiz View</Text>
                        <Text>{q.question}</Text>
                        <Text>Show Answer Button</Text>
                        <Text style={{display: 'none'}}>{q.answer}</Text>
                        <Button title="Correct" />
                        <Button title="Incorrect" />
                        <Text>Remaining Questions</Text>
                        <Text>Score</Text>
                        <Text>Restart Quiz</Text>
                        <Text>Back button</Text>
                    </View> 
                    ))
                )}
                
            </ScrollView>
                
        )
    }
}

function mapStateToProps(decks, {navigation, route}){
    const deckKey = route.params.deckKey
    const questions = decks[deckKey].questions

    return {

        decks,
        questions,
    }
}

export default connect(mapStateToProps)(QuizView);

