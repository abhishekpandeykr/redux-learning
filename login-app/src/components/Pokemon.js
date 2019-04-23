import React, { Component } from 'react'
import requireAuth from './requireAuth';
import {compose} from 'redux';
import {connect} from 'react-redux'
import * as actions from '../action'
import Flavortable from './tables/Flavortable';
import './tables/style.css'

class Pokemon extends Component {
    componentDidMount(){
        this.props.getOneAbility(this.props.match.params.id)
    }
  render() {
      const ability = this.props.pokemonsAbility;
    return (
      <div className="align-table">
        <div>
            <h5>Pokemon's Specification's</h5>
            <p><b>Pokemon's Ability :</b> {ability && ability.name}</p>
            <p><b>Pokemon's Generation:</b> {ability && ability.generation && ability.generation.name}</p>
            <p><b>Pokemon's Effect Entries:</b> {ability && ability.effect_entries[0] && ability.effect_entries[0].effect}</p>
        </div>
        {ability && ability.flavor_text_entries && <Flavortable flavor={ability.flavor_text_entries} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        pokemonsAbility:state.ability.data
    }
}

export default compose (requireAuth, connect(mapStateToProps, actions))(Pokemon)