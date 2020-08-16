import React, { Component } from 'react';
import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';

class Container extends Component {
  render() {
    return (
    <div>
      <h1>Testing Redux</h1> 
      <button onClick={() => console.log(this.props.stateProp1)}>Get State</button> <br/> <br/>
      <button onClick={() => this.props.action1()}>Dispatch Action 1</button> <br/> <br/>
      <button onClick={() => this.props.action2()}>Dispath Action 2</button> <br/> <br/>
      <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button> <br/> <br/>
      <button onClick={() => this.props.action2()}>Dispath Action 2</button> <br/>
    </div>
  )
  }
  
}

function mapStateToProps (state) {
  return {
    stateProp1: state.stateProp1
  }
}

function mapDispatchToProps (dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);