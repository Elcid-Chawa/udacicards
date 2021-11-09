import React, {Component} from 'react'
import {View, Text, Button, TextInput, Keyboard, StyleSheet, Alert} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import { styles } from '../utils/helpers';

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
        const { title } = this.state;
        const { dispatch } = this.props;
        if(title !== ""){
            saveDeckTitle(title)
                .then( dispatch(
                        addDeck({
                                    [title]: {
                                        title: title,
                                        questions: []
                                    }
                        })
                    )
                );

            Keyboard.dismiss();
            this.props.navigation.goBack()
            this.setState(() => ({
                title: ""
            }))
        } else {
            return Alert.alert("Please Enter a Title.")
        }

    }

    render(){
        
        const { title } = this.state;
        return (
            <View style={styles.item}>
                <Text style={styles.heading}>What is the Title of your new deck</Text>
                <TextInput
                    placeholder="Enter Deck Title"
                    value={title}
                    onChangeText={this.handleEntry}
                    style={styles.textBox}
                >
                </TextInput>
                <Button title="Create Deck" onPress={this.submit} />
            </View>
        )
    }
}

function mapStateToProps (decks){
    return {
        decks
    }
}

export default connect(mapStateToProps)(NewDeck);

