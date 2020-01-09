import * as PlayerActionTypes from '../ActionTypes/player'

const today = new Date();
const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

const initialState = {
	players: [{
    name: 'Jim Hoskins',
    id: 1,
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
    name: 'Andrew Chalkley',
    id: 2,
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
    name: 'Alena Holligan',
    id: 3,
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      console.log(state.players,"into add")
      return {
        players:[...state.players,
        {
          name: action.name,
          id: state.players.length + 1,
          score: 0,
          created:date,
          updated:date,
        }
        ],
        selectedPlayerIndex:state.selectedPlayerIndex
      }
    case PlayerActionTypes.REMOVE_PLAYER:
      return {
        players: [...state.players.slice(0, action.index), ...state.players.slice(action.index + 1)],
        selectedPlayerIndex:-1
      }
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return{players: state.players.map((player, index) => {
        if (index === action.index) {
          console.log(action.score,"actionscore",action.index,state.players)
          return {
            ...player,
            score: player.score + action.score,
            updated:date
          }
        }
        return player
      }),
      selectedPlayerIndex:state.selectedPlayerIndex
    }
    case PlayerActionTypes.UPDATE_PLAYER_DETAILS:
      return {
        ...state,
        selectedPlayerIndex:action.index
      }
    default:
      return state
  }
}
