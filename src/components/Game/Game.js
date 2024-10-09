import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
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

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [alphabet, setAlphabet] = React.useState(letters.split("").map(letter => ({ letter, status: 'initial' })));

function updateAlphabet(guess, answer) {
  const guessed = checkGuess(guess, answer);

  const nextAlphabet = alphabet.map(alphItem => {
    const found = guessed.filter(item => item.letter === alphItem.letter);
    if (found && found.length > 0) {
      if (alphItem.status === "initial" || alphItem.status === "misplaced") {
        const statuses = found.map(i => i.status);
        const stableStatuses = statuses.filter(st => st !== "misplaced");
        const finalStatus = stableStatuses.length > 0 ? stableStatuses[0] : "misplaced";
        console.log("Letter", alphItem.letter, "statuses", statuses, "stableStatuses", stableStatuses, "finalStatus", finalStatus);
        return { letter: alphItem.letter, status: finalStatus };
      }
    }
    return { letter: alphItem.letter, status: alphItem.status };
  }) ;

  setAlphabet(nextAlphabet);
}

  function addGuess(guess) {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }

    updateAlphabet(guess, answer);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={status !== 'running'} />
      <Keyboard alphabet={alphabet} />
      {(status === 'won') &&
        <WonBanner guessCount={guessResults.length} />}
      {(status === 'lost') &&
        <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
