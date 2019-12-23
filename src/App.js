import React, { Component, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as PlayerActionCreators from './actions/player';
import './App.css'
import Header from './Components/Header'
import Player from './Components/Player'
import AddPlayerForm from './Components/AddPlayerForm'
let arrayIndexSup = [];
let sup = 0;
class App extends Component {
//   state = {
//     players: [
//       {
//         name: 'Guil',
//         id: 1,
//         score: 0
//       },
//       {
//         name: 'Treasure',
//         id: 2,
//         score: 0
//       },
//       {
//         name: 'Ashley',
//         id: 3,
//         score: 0
//       },
//       {
//         name: 'James',
//         id: 4,
//         score: 0
//       }
//     ]
//   }
//    checkIfTieBefore = () => {
//     arrayIndexSup.forEach((currentIndex, index) => {
//       if (
//         this.state.players[currentIndex] > this.state.players[currentIndex + 1] &&
//         arrayIndexSup.length >= 2
//       ) {
//         console.log(arrayIndexSup, currentIndex);
//         arrayIndexSup.splice(index + 1);
//         console.log(arrayIndexSup);
//       }
//     });
//   };

//    handleHighestScoreAndTie = () => {
//      console.log(arrayIndexSup,"arrayofsupbefore",sup)
//     this.state.players.forEach((players, index) => {
//       if (sup < players.score) {
//         sup = players.score;
//         arrayIndexSup.splice(0, arrayIndexSup.length - 1);
        
//         arrayIndexSup[0] = index;
//         console.log(arrayIndexSup,"arrayofsup INTO")
//        this.checkIfTieBefore();
//        console.log(sup)
//       } else if (sup === players.score && players.score!==0) {
//         console.log("sup&pscore",sup,players.score)
//         sup = players.score;
//         arrayIndexSup.push(index);
//         console.log(arrayIndexSup,"arrayofsup INTO equal")
//       }
//     })
//   }
//   handleScoreChange = (operation, index,isHighscore) => {
//     if (isHighscore=== true){
//       sup-=1
//     }
//     this.setState(prevState => {
//       const updatedPlayers = [...prevState.players]
//       const updatedPlayer = { ...updatedPlayers[index] }
//       updatedPlayer.score += operation
//       updatedPlayers[index] = updatedPlayer
//       console.log('into handle score', updatedPlayers)
//       return { players: updatedPlayers }
//     })
//   }
//   handleRemovePlayer = id => {
//     this.setState(prevState => {
//       return {
//         players: prevState.players.filter(p =>{ 
//           arrayIndexSup=arrayIndexSup.filter((indexSup)=>{
//             return indexSup !== id-1
//           })
//          return p.id !==id
//           }
//       )
//       }
//     })
//     arrayIndexSup=[]
//     sup=0
    
//   }

// playersRendererWithHighScoreAndTie = () => {
//   return this.state.players.map((player, index) => {
//     if(arrayIndexSup.includes(index)){
//       return <Player
//       key={player.id.toString()}
//       playerName={player.name}
//       id={player.id}
//       handleRemovePlayer={this.handleRemovePlayer}
//       score={player.score}
//       handleScoreChange={this.handleScoreChange}
//       index={index}
//       highScore="is-high-score"
//     ></Player>
//     }else{
//       return <Player
//       key={player.id.toString()}
//       playerName={player.name}
//       id={player.id}
//       handleRemovePlayer={this.handleRemovePlayer}
//       score={player.score}
//       handleScoreChange={this.handleScoreChange}
//       index={index}
//       highScore="is-not-high-score"
//       ></Player>
//     }
// })
// }
  playersRenderer = () => {
    console.log(this.checkIfOnePointHasBeenScored())
    if(this.checkIfOnePointHasBeenScored()===false){
    return this.state.players.map((player, index) => {
      console.log(player.name)
      return (
        <Player
          key={player.id.toString()}
          playerName={player.name}
          id={player.id}
          handleRemovePlayer={this.handleRemovePlayer}
          score={player.score}
          handleScoreChange={this.handleScoreChange}
          index={index}
        ></Player>
      )
    })
  }else if(this.checkIfOnePointHasBeenScored()){
    this.handleHighestScoreAndTie()
    return this.playersRendererWithHighScoreAndTie()
  }
  }
//    handleUpdatePlayersState = (submittedName) =>{
//      this.setState(prevState =>{
//        const updatedPlayers = [...prevState.players]
//        console.log(updatedPlayers,"dfsdf")
//         updatedPlayers.push({name:submittedName,id:this.state.players.length+1,score:0})
//        console.log(updatedPlayers,"addp")
       
//        return {players:updatedPlayers}
//      }
//        )
//    }

//    checkIfOnePointHasBeenScored = () =>{
     
//      return this.state.players.some( (player,index) => {
//        return player.score >0
//      }
//      )}
  render() {
    const addPlaye = bindActionCreators(PlayerActionCreators.addPlayer,this.props.dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer,this.props.dispatch)
    const updatedPlayerScore = bindActionCreators(PlayerActionCreators.updatedPlayerScore,this.props.dispatch)
    return (
      <div>
        <Header title='scoreboard' players={this.state.players}></Header>
        {this.playersRenderer()}
        <AddPlayerForm addPlayer={this.handleUpdatePlayersState} />
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    players:state
  }
)  
export default connect(mapStateToProps)(App)
