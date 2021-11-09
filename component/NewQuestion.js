import React, {Component} from 'react'
import {View, Text, TextInput, Button, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';

class NewQuestion extends Component {

    state = {
        question: "",
        answer: "",
    }

    handleQuestion = (question) => {
        if (question !== '') {
            this.setState(() => ({
                question: question
            }))
        }
    }

    handleAnswer = (answer) => {
        if (answer !== '') {
            this.setState(() => ({
                answer: answer
            }))
        }
    }

    submit = () => {
        const { question, answer } = this.state;
        const { dispatch, deck, navigation} = this.props;

        const card = {
            question: question,
            answer: answer
            }

        addCardToDeck(deck.title, card);
        dispatch(addCard(deck, card));

        Keyboard.dismiss();

        navigation.goBack()

        this.setState(() => ({
            question: "",
            answer: "",
        }))
    }
 
    render(){
        const { question, answer } = this.state;
        return (
            <View>
                <Text>Question</Text>
                <TextInput 
                    placeholder="Add New Question"
                    value={question}
                    onChangeText={this.handleQuestion}
                />
                <TextInput 
                    placeholder="Add Answer"
                    value={answer}
                    onChangeText={this.handleAnswer}
                />
                <Button title="Submit" onPress={this.submit} />
            </View>
        )
    }
}

function mapStateToProps (decks, {navigation, route}) {

    const {deckKey} = route.params
    
    return {
        deck: decks[deckKey],
        navigation
    }
}

export default connect(mapStateToProps)(NewQuestion);

