import React, { Component } from 'react';
import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';

class Container extends Component {
  render() {
    const user_text = 'Hudarko';

    return (
    <div>
      <h1>Testing Redux</h1> 
      <button onClick={() => console.log(this.props.user_input, this.props.stateProp1)}>Get State</button> <br/> <br/>
      <button onClick={() => this.props.action1()}>Dispatch Action 1</button> <br/> <br/>
      <button onClick={() => this.props.action2()}>Dispatch Action 2</button> <br/> <br/>
      <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button> <br/> <br/>
      <button onClick={() => this.props.action_creator2()}>Dispatch Action 2</button> <br/> <br/> <br/>
      <button onClick={() => this.props.action_creator3(user_text)}>Dispatch Action 3</button> <br/> <br/> <br/>
      {this.props.user_input
        ? <h2> {this.props.user_input} </h2>
        : null
      }
    </div>
  )
  }  
}

function mapStateToProps (state) {
  return {
    stateProp1: state.reducer1.stateProp1,
    user_input: state.user_reducer.user_input
  }
}

function mapDispatchToProps (dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
