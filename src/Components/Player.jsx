import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import Counter from './Counter'

class Player extends PureComponent {
  static propTypes = {
    score: PropTypes.number.isRequired,
    handleScoreChange: PropTypes.func,
    index: PropTypes.number,
    id: PropTypes.number,
    playerName: PropTypes.string.isRequired,
    handleRemovePlayer: PropTypes.func
  }
  handleRemovePlayer = () => {
    const { removePlayer, index } = this.props
    removePlayer(index)
  }

  handleUpdatePlayerDetails = () => {
    const { updatePlayerDetails, index } = this.props
    updatePlayerDetails(index)
  }
  render() {
    const { score, updatePlayerScore, playerName,index } = this.props

    return (
      console.log(this.props, 'propsdetails'),
      (
        <div className='player'>
          <button className='remove-player' onClick={this.handleRemovePlayer}>
            ✖
          </button>
          <span>
            <svg className={this.props.highScore} viewBox='0 0 44 35'>
              <path
                d='M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z'
                transform='translate(0 0.301727)'
              />
              <rect width='30.4986' height='3.07759' transform='translate(6.56987 31.5603)' />
            </svg>
          </span>
          <span className='player-name' onClick={this.handleUpdatePlayerDetails}>
            {playerName}
          </span>
          <Counter
            score={score}
            updatePlayerScore={updatePlayerScore}
            index={index}
            highScore={this.props.highScore}
          ></Counter>
        </div>
      )
    )
  }
}
export default Player

// Ok donc on est d'accord que c'est juste un simple appel de fonction ?oui
// Regarde bien ce que je vais surligner. Je vais surligner un truc a gauche et a droite
// je crois que j ai compris la function je la passe 
// Non c'est pas ca le probleme, la function tu la passe correctement.......................
// C'est mieux de passer les params non ? 
// ouais mais  s etait un truc que j avais vu passer sans param du coup j ai fais encor
// Comment ca que t'as vu passer sans params ?la faudrait que je remate la video tu me fais douter
// Je comprend pas ce que tu veux dire. En fait, te dis pas que redux c'est de la magie noire
// La c'est du function call de base, donc tu peux passer des params ou pas en fonction de tes besoin c'est tout
// T'utilises pas le dispatch en faisant ca, donc je suis meme pas sur que ca marche et si ca marche pour ca ca marchera pas pour les function async plus tard. Donc mauvaise idee
// apparement dispatch se fais automatiquement
// Ok, mais pour les petits wrapper alors, parce que si tu commence a avoir beaucoup de function c'est mieux de l'extraire pour la lisibilit'e en suivant l'exemple du mec. Je savais meme pas que c'etait possible c est sur qu qvec mass action sa deveien le bordel
// Regarde par exemple. Voila c'est bon. Encore mieux. Voilak, du coup merci pour le tips, connaissais pas. Sinon
// Plus de console.log dans les return et aussi plus de functions dans le render
// Tout ca, ca vire ouai je lavai mis la a cause du bind mais plsu besoin maintean
// sinon pour les svg il faut obligatoirement un xlmns? Je sais pas pourquoi ? bas j ai extrai mon svg crozn j avais test de le render marche pas,
// Je regarde
// Son css c'est la mort, oublis pour la svg, mais quand tu codera pour toi dis toi que la svg c'est dans un fichier
// Et chaque component a son css pas comme lui en mode gros porc dans 1 seul fichier  sinon extraire la svg dans un component  sa pourrait le faire??
// cA SERT A rien, ca reviens a faire ce que tu fait la en fait c est un peu plus props ta une tag au lieu d un gros paave
// Ouais mais tu creer un component pour mettre une tag dedans. Pas super utile, et surtout , la svg c'est un asset, pas du code. 
// C;est du code, a proprement parler mais tu dois le considerer comme un asset, comme une image ou une font quoi oui je vois bon bas c est tout sinon
// Si t'as pas d'autres questions ouais nope je dois m arracher de toute facon court !!!! cimer a +++++++++++++++++++++++ ==+++++