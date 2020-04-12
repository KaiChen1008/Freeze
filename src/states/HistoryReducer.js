const initHistoryState = {

};


export function history(state = initHistoryState, action) {
    switch (action.type) {
        case '@MAIN/SHOT':
            return {
                ...state,
            }
        default:
            return state;
    }
}