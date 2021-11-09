import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { styles } from '../utils/helpers';

class QuizView extends Component {

    state = {
        questionNumber: 0,
        score: 0,
        showAnswer: false,
    }

    flipCard = () => {
        this.setState((previousState) => ({
            showAnswer: !previousState.showAnswer
        }))
    }

    correct = () => {
        this.setState((previousState) => ({
            score: 1 + previousState.score,
            questionNumber: 1 + previousState.questionNumber
        }))
    }

    incorrect = () => {
        this.setState((previousState) => ({
            questionNumber: 1 + previousState.questionNumber
        }))
    }

    resetQuiz = () => {
        this.setState(() => ({
            score: 0,
            questionNumber: 0
        }))
    }

    render(){
        const { questions, navigation } = this.props;
        const {showAnswer, questionNumber, score } = this.state;
        const cardLength = questions.length;
        if(questions.length === 0){
            return (
                <View>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Text>Add cards to Deck</Text>
                        </TouchableOpacity>
                </View>
            )
        }
        if(questionNumber >= questions.length){
            return(
                    <View style={styles.item}>
                        <Text style={styles.heading}>Score: {score}/{cardLength} </Text>
                        <Button title="Reset Quiz" onPress={this.resetQuiz} />
                    </View>
                )
        }
        return (
            <ScrollView>
                <View key={questionNumber} style={styles.container}>
                       <Text> {questionNumber+1} / {cardLength} </Text>
                        {!showAnswer && <View style={styles.item}>
                                            <Text style={styles.heading}>
                                                {questions[questionNumber].question}
                                            </Text>
                                            <TouchableOpacity onPress={this.flipCard}>
                                                <Text>Show Answer</Text>
                                            </TouchableOpacity>  
                                        </View>
                        }
                        {showAnswer && <View style={styles.item}>
                                            <Text style={styles.heading}>
                                                {questions[questionNumber].answer}
                                            </Text>
                                            <TouchableOpacity onPress={this.flipCard}>
                                                <Text>Show Question</Text>
                                            </TouchableOpacity>  
                                        </View>
                        }
                        <Button title="Correct" onPress={this.correct} />
                        <Button title="Incorrect" onPress={this.incorrect}  />
                        <Text style={styles.subHeading}>Remaining Questions: {cardLength - questionNumber-1} </Text>
                    </View>                
            </ScrollView>
                
        )
    }
}

function mapStateToProps(decks, {navigation, route}){
    const {deckKey} = route.params
    const questions = decks[deckKey].questions

    return {

        decks,
        questions,
        navigation,
    }
}

export default connect(mapStateToProps)(QuizView);

