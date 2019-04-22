import React, { Component } from 'react';
import {reduxForm , Field} from 'redux-form';
import {compose} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../action'
import './auth.css'

class Signup extends Component {

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature")
    })
  }
  render() {
    const { handleSubmit } = this.props
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field 
                  name="email"
                  type="text"
                  component="input"
                  className="formField"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field 
                  name="password"
                  type="password"
                  component="input"
                  className="formField"
                />
            </fieldset>
            <div>
              {this.props.errorMessage}
            </div>
            <button>Signup</button>
        </form>
    )
  }
}

function mapStateToProps(state){
   return {
     errorMessage: state.auth.errorMessage
   }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form:'signup'})
)(Signup)
