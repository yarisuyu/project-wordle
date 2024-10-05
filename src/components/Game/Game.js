import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function addGuess(guess) {
    const nextGuessResults = [...guessResults, { id: guessResults.length, guess }];
    setGuessResults(nextGuessResults);
  }

  return (
    <>
      <GuessResults guessResults={guessResults}/>
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
