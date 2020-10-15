export default function manageCrosswords(state = {crosswords: [], easyCrswds: [], medCrswds: [], hardCrswds: [], sunCrswds: [], chosenCrswd: null, activeClue: null, activeBoxes: null}, action) {
    switch(action.type) {
        case 'ADD_CROSSWORDS':
            return {...state, crosswords: action.crosswords};
        case 'ADD_EASY_CRSWDS':
            return {...state, easyCrswds: action.crosswords};
        case 'ADD_MED_CRSWDS':
            return {...state, medCrswds: action.crosswords};
        case 'ADD_HARD_CRSWDS':
            return {...state, hardCrswds: action.crosswords};
        case 'ADD_SUN_CRSWDS':
            return {...state, sunCrswds: action.crosswords};
        case 'CHOOSE_CRSWD':
            return {...state, chosenCrswd: action.crossword};
        case 'REMOVE_CRSWD':
            return {...state, chosenCrswd: null};
        case 'SET_ACTIVE_CLUE':
            return {...state, activeClue: action.clue};
        case 'REMOVE_ACTIVE_CLUE':
            return {...state, activeClue: null};
        case 'ADD_ACTIVE_BOXES':
            return {...state, activeBoxes: action.boxes};
        case 'REMOVE_ACTIVE_BOXES':
            return {...state, activeBoxes: null};
        case 'ADD_ANSWER_IS':
            return {...state, ansBoxes: action.ansBoxes}
        case 'REMOVE_ANS_BOXES':
            return {...state, ansBoxes: null};
        default:
            return state;
    }
}