import React, { Component } from 'react'
import requireAuth from './requireAuth';
import {Link, Route} from 'react-router-dom'
import Signin from './auth/Signin';

class Feature extends Component { 
  renderText(){
    if(this.props.dataList){
     return(
       <div>
          <h3>Pokemons Ability</h3>
          {this.renderPokemon(this.props.dataList.results)}
       </div>
     )
    } else {
      return (<p>Working on it</p>)
    }
  }

  navigateScreen(url){
    const [extractId] = url.split('/').slice(-2);
    console.log(extractId)
    this.props.history.push(`/pokemon/${extractId}`)
  }

  renderPokemon(pokemons) {
    return(
      <ul>
        {pokemons && pokemons.map((pokemon,index) => (<li key={pokemon.url} onClick={() => this.navigateScreen(pokemon.url)}>{pokemon.name}</li>))}
      </ul>
    )
  }
  render() {
    return (
      <div>
        {this.renderText()}
      </div>
    )
  }
}

export default requireAuth(Feature)
