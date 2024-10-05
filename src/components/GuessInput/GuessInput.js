import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({addGuess}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log("Your guess is:", guess);
        addGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`[A-Za-z]{${WORD_LENGTH}}`}
        title={`The length of the word MUST be ${WORD_LENGTH}`}
        id="guess-input"
        type="text"
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
