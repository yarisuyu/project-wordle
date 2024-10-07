import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //
  const [status, setStatus] = React.useState('running');
  const [guessResults, setGuessResults] = React.useState([]);

  function addGuess(guess) {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={status !== 'running'} />
      {(status === 'won') &&
        <WonBanner guessCount={guessResults.length} />}
      {(status === 'lost') &&
        <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
