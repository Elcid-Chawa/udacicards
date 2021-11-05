import React, {Component} from 'react'
import {View, Text, Button, TextInput, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';

class NewDeck extends Component {
    state = {
            title: '',
        }

    handleEntry = (title) => {
        if (title !== '') {
            this.setState(() => ({
                title: title
            }))
        }
    }

    submit = () => {
        const deck = this.state;
        this.props.dispatch(addNewDeck(deck.title));
        Keyboard.dismiss();
        this.props.navigation.goBack()
        this.setState(() => ({
            title: ""
        }))

    }

    render(){
        
        const { title } = this.state;
        return (
            <View>
                <Text>What is the Title of your new deck</Text>
                <TextInput
                    placeholder="Enter Deck Title"
                    value={title}
                    onChangeText={this.handleEntry}
                >
                </TextInput>
                <Button title="Submit" onPress={this.submit} />
            </View>
        )
    }
}


export default connect()(NewDeck);

