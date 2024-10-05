import React from 'react';

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
        minLength="5"
        maxLength="5"
        pattern="[A-Za-z]{5}"
        title="The length of the word MUST be 5"
        id="guess-input"
        type="text"
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
