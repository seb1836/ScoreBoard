import * as PlayerActionTypes from '../ActionTypes/player'


const initialState = [{
    name: 'Guil',
    id: 1,
    score: 0
  },
  {
    name: 'Treasure',
    id: 2,
    score: 0
  },
  {
    name: 'Ashley',
    id: 3,
    score: 0
  },
  {
    name: 'James',
    id: 4,
    score: 0
  }]

  export default function Player(state=initialState,action){
switch(action.type){
    case PlayerActionTypes.ADD_PLAYER:
        return [...state,
            {
               name:action.name,
               score:0 
            }
        ]
}
  }