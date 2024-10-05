import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guessResults }) {
  const guessList = [
    ...guessResults,
    ...range(0, NUM_OF_GUESSES_ALLOWED - guessResults.length).map(item => " ".repeat(WORD_LENGTH))
  ];
  console.log("GuessList:", guessList);

  return (
    <div className="guess-results">
      {guessList.map((guess, index) => {
        console.log("Guess", index, guess);
        return (<Guess key={index} value={guess} />);
      })}
    </div>
  );
}

export default GuessResults;
