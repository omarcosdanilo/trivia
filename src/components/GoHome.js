import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { newAction, CLEAR_TOKEN } from '../actions';
import { RESET_LOGIN } from '../reducers/main';
import { RESET_QUESTIONS_SAVED } from '../reducers/questionsReducer';

class GoHome extends Component {
  goHome = () => {
    const { history, resetLogin, clearToken, resetQuestionsSaved } = this.props;
    resetLogin();
    clearToken();
    resetQuestionsSaved(false, RESET_QUESTIONS_SAVED);
    history.push('/');
  }

  render() {
    return (
      <button
        type="button"
        data-testid="btn-go-home"
        onClick={ this.goHome }
      >
        Home
      </button>
    );
  }
}

GoHome.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  resetLogin: PropTypes.func.isRequired,
  clearToken: PropTypes.func.isRequired,
  resetQuestionsSaved: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetLogin: () => dispatch(newAction(null, RESET_LOGIN)),
  clearToken: () => dispatch(newAction('', CLEAR_TOKEN)),
  resetQuestionsSaved: (state, type) => dispatch(newAction(state, type)),
});

export default connect(null, mapDispatchToProps)(GoHome);
