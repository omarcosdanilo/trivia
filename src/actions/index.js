export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

export const newAction = (state, action) => ({ type: action, state });

export const getToken = (token, type) => ({ type, token });

export const getQuestions = (token, type) => ({ type, token });

export function fetchQuestions(Token) {
  return async (dispatch) => {
    const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${Token}`);
    const response = await request.json();
    dispatch(getQuestions(response.results, SAVE_QUESTIONS));
    // console.log('chamou a primeira');
  };
}

export function fetchToken() {
  return async (dispatch) => {
    const request = await fetch('https://opentdb.com/api_token.php?command=request');
    const response = await request.json();
    dispatch(getToken(response.token, SAVE_TOKEN));
  };
}
