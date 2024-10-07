import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({addGuess, disabled}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        addGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`[A-Za-z]{${WORD_LENGTH}}`}
        title={`The length of the word MUST be ${WORD_LENGTH}`}
        disabled={disabled}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={event => setTentativeGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
