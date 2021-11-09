import React, {Component} from 'react'
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Animated
} from 'react-native';
import { connect } from 'react-redux';
import {styles } from '../utils/helpers'

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

    state = {
        opacity: new Animated.Value(0)
    }

    componentDidMount(){
        const {opacity} = this.state
        Animated.timing(opacity, {toValue: 1, duration: 1000 }).start()
    }

    render(){
        const { navigation, title, noOfCards } = this.props;
        const { opacity } = this.state;
        
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

function mapStateToProps(decks, { navigation, route }){
    const title = route.params.title
    
    
    return {
        decks,
        title: decks[title].title,
        noOfCards: decks[title].questions.length,
    }
}

export default connect(mapStateToProps)(DeckView);

