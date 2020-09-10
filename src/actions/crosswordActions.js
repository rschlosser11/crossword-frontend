const ADD_CROSSWORDS = 'ADD_CROSSWORDS';
const ADD_EASY_CRSWDS = 'ADD_EASY_CRSWDS';
const ADD_MED_CRSWDS = 'ADD_MED_CRSWDS';
const ADD_HARD_CRSWDS = 'ADD_HARD_CRSWDS';
const ADD_SUN_CRSWDS = 'ADD_SUN_CRSWDS';

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