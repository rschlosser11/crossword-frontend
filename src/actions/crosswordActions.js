const ADD_CROSSWORDS = 'ADD_CROSSWORDS'

export const fetchCrosswords = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/crosswords')
        .then(res => res.json())
        .then(obj => dispatch({type: ADD_CROSSWORDS, crosswords: obj}))
        .catch(err => console.log(err))
    }
}