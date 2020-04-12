const initMainState = {
    userID:'kaichen',
    total_countdown: 0,
    second:30000, // ms
    events:[
        {
            topic:'7-11', // 限10字
            date:'6/23',
            cost:'100',
            category:'eating',
            description:'not a good idea', // 一段話
            result:'success/fail',
        },

    ],
    moveDuration:2000,  //速度
    movePattern:0,
    x:45,
    y:-65,
    fixedSize:0,
    count:30,   // ms
};


export function main(state = initMainState, action) {
    switch (action.type) {
        case '@MAIN/CHANGEBEARSTATE':
            return {
                ...state,
                bearState: action.bearState,
            }
        case '@MAIN/CHANGEPATTERN':
            return {
                ...state,
                movePattern:(state.movePattern+1)%8,
            }
        // case '@MAIN/SETPOSITION':
        //     return {
        //         ...state,
        //         x: state.x+action.dist[0]*action.fixedSize,
        //         y: state.y+action.dist[1]*action.fixedSize,
        //     }
        case '@MAIN/MELTING': 
            return {
                ...state,
                fixedSize: (state.fixedSize+1)%4
            }
        default:
            return state;
    }
}

// const upload = {
//     enter_times:0,
//     userID:kaichen,
//     card_amount:2,
//     failure_times:3,    // int
//     total_countdown: 4,   // int 
//     cards:[
//         {
//             cardName:'visa1',
//             cardType:'credit-card/paypal/other',
//             pwdTail:'xxxxxx',
//         },
//         {

//         },
//     ],
//     events:[
//         {
//             topic:'',//限10字
//             date:'',
//             cost:'',
//             category:'',
//             description:'',//一段話
//             result:'success/fail',
//         },
//         {},

//     ]
// }