import React, {Component} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

function Deck({ navigation, title, noOfCards }){
    return (
        <View style={styles.item}>
            <Text style={styles.heading}>{title}</Text>
            <Text>{noOfCards === 1 ? noOfCards + " card" : noOfCards + " cards"}</Text>
            <Button title="Add card" onPress={() => navigation.navigate('Add Card', {deckKey: title})} />
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('Quiz', {deckKey: title})}
                style={{backgroundColor: 'black', borderRadius: 5}}
            >
                <Text style={{color: 'white'}}>Start Quiz</Text>
            </TouchableOpacity>
                
            <Text>+++++++++++++++</Text>
            
        </View>
    )
}


class DeckView extends Component {
    render(){
        const { navigation, title, noOfCards } = this.props;
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Deck 
                navigation={navigation} 
                title={title}
                noOfCards={noOfCards} 
                />
            </View>                
        )
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

function mapStateToProps(decks, { navigation, route }){
    const title = route.params.title
    
    
    return {
        decks,
        title: decks[title].title,
        noOfCards: decks[title].questions.length,
    }
}

export default connect(mapStateToProps)(DeckView);

