import { getDecks, initDeck } from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const GET_CARDS = 'GET_CARDS'

export function receiveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck){
    return {
        type: ADD_DECK,
        deck,
    }
}

export function initializeDeck(){
    return (dispatch) => {
        initDeck()
        return getDecks().then(({decks}) => {
            dispatch(receiveDecks(decks))
        })
    }
}