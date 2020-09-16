const ADD_CROSSWORDS = 'ADD_CROSSWORDS';
const ADD_EASY_CRSWDS = 'ADD_EASY_CRSWDS';
const ADD_MED_CRSWDS = 'ADD_MED_CRSWDS';
const ADD_HARD_CRSWDS = 'ADD_HARD_CRSWDS';
const ADD_SUN_CRSWDS = 'ADD_SUN_CRSWDS';
const CHOOSE_CRSWD = 'CHOOSE_CRSWD';
const REMOVE_CRSWD = 'REMOVE_CRSWD';
const SET_ACTIVE_CLUE = 'SET_ACTIVE_CLUE';
const REMOVE_ACTIVE_CLUE = 'REMOVE_ACTIVE_CLUE';

export const fetchAllCrosswords = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/crosswords')
        .then(res => res.json())
        .then(obj => dispatch({type: ADD_CROSSWORDS, crosswords: obj}))
        .catch(err => console.log(err))
    }
}

export const fetchCrswdsByDifficulty = (level) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/crosswords?q=${level}`)
        .then(res => res.json())
        .then(obj => {
            if (level === 'easy') {
                return dispatch({type: ADD_EASY_CRSWDS, crosswords: obj})
            } else if (level === 'medium') {
                return dispatch({type: ADD_MED_CRSWDS, crosswords: obj})
            } else if (level === 'hard') {
                return dispatch({type: ADD_HARD_CRSWDS, crosswords: obj})
            } else if (level === 'sunday') {
                return dispatch({type: ADD_SUN_CRSWDS, crosswords: obj})
            }
        }).catch(err => console.log(err))
    }
}

export const fetchChosenCrswd = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/crosswords/${id}`)
        .then(res => res.json())
        .then(obj => dispatch({type: CHOOSE_CRSWD, crossword: obj}))
        .catch(err => console.log(err))
    }
}

export const removeCrswd = () => {
    return {type: REMOVE_CRSWD}
}

export const setActiveClue = (clue) => {
    return {type: SET_ACTIVE_CLUE, clue: clue}
}

export const removeActiveClue = () => {
    return {type: REMOVE_ACTIVE_CLUE}
}