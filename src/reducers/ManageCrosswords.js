export default function manageCrosswords(state = {crosswords: [], easyCrswds: [], medCrswds: [], hardCrswds: [], sunCrswds: []}, action) {
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
        default:
            return state;
    }
}