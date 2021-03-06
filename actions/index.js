import { _addNewDeck } from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const GET_CARDS = 'GET_CARDS';
export const ADD_CARD = 'ADD_CARD';

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

export function addCard (deck, card){
    return {
        type: ADD_CARD,
        deck,
        card
    }
}
