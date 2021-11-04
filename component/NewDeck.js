import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';

class NewDeck extends Component {
    state = {
            title: '',
            questions: []
        }
    render(){
        return (
            <View>
                <Text>What is the Title of your nex deck</Text>
                <Text>Text box</Text>
                <Button title="Submit" />
            </View>
        )
    }
}

export default NewDeck;

