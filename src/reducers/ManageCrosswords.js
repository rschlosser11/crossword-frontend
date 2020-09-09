export default function manageCrosswords(state = {crosswords: []}, action) {
    switch(action.type) {
        case 'ADD_CROSSWORDS':
            return {crosswords: action.crosswords};
        default:
            return state;
    }
}