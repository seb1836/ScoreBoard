import * as PlayerActionTypes from '../ActionTypes/player';


export const addPlayer = name => {
    return {
        type:PlayerActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = index => {
    return{
        type:PlayerActionTypes.REMOVE_PLAYER,
        index
    }
}

export const UpdatePlayerScore = (score,index) => {
    return{
        type:PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
}

export const UpdatePlayerDetails = (index) => {
    return {
        type:PlayerActionTypes.UPDATE_PLAYER_DETAILS,
        index,
    }
}