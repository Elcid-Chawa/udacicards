import React, { Component } from 'react'
import {View, Button, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {  receiveDecks } from '../actions';
import { initializeDecks } from '../utils/api';

function ToDeck({navigation, title, deck}){
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Deck', {title: title})}
        >
            <Text>-----------------------------</Text>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.subHeading}>
                {deck.questions.length === 1 
                ? deck.questions.length + " card" 
                : deck.questions.length + " cards"} 
            </Text>
            <Text>-----------------------------</Text>
        </TouchableOpacity>
       
    )
}

class DeckListView extends Component {

    componentDidMount(){
        const { dispatch } = this.props;
        initializeDecks()
            .then((decks) => dispatch(receiveDecks(decks)));
        
    }
        
    render(){
        const { navigation, decks } = this.props
        console.log(this.props)
        
        return (
            <View style={styles.container}>
                { decks !== {} 
                    ? Object.keys(decks).map((deck) => 
                                    (<View key={deck} style={styles.item}>
                                        <ToDeck 
                                        navigation={navigation} 
                                        
                                        title={decks[deck].title}
                                        deck={decks[deck]} 
                                        />
                                        </View>
                                    )) 
                    : <Text>No deck found. Add New Deck.</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    item: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    heading: {
        fontSize: 24,
        fontFamily: "Google Sans"
    },
    subHeading: {
        fontSize: 12,
        color: 'gray'
    }
})

export default connect(mapStateToProps)(DeckListView);

