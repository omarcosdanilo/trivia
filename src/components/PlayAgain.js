import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { RESET_LOGIN } from '../reducers/main';
import { newAction, CLEAR_TOKEN } from '../actions';
import { RESET_QUESTIONS_SAVED } from '../reducers/questionsReducer';

import '../css/feedback.css';

class PlayAgain extends Component {
  playAgain = () => {
    const { history, resetLogin, clearToken, resetQuestionsSaved } = this.props;
    resetLogin();
    clearToken();
    resetQuestionsSaved(false, RESET_QUESTIONS_SAVED);
    history.push('/');
  }

  render() {
    return (
      <button
        className="playAgain-button"
        type="button"
        onClick={ this.playAgain }
        data-testid="btn-play-again"
      >
        Play Again
      </button>
    );
  }
}

PlayAgain.propTypes = {
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

export default connect(null, mapDispatchToProps)(PlayAgain);
