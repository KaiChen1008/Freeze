const initTutorialState = {
    card_amount:0,
    cards:[
        {
            cardName:'visa1',
            cardType:'credit-card/paypal/other',
            pwdTail:'xxxxxx',
        },
        {

        },
    ],
};


export function tutorial(state = initTutorialState, action) {
    switch (action.type) {
        case '@MAIN/SHOT':
            return {
            }
        default:
            return state;
    }
}