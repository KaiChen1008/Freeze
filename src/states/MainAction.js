export function changeBearState(bearState) {
    return {
        type: '@MAIN/CHANGEBEARSTATE',
        bearState: bearState,
    }
}

export function changePattern() {
    return {
        type: '@MAIN/CHANGEPATTERN',
    }
}

export function melting() {
    return {
        type: '@MAIN/MELTING',
    }
}