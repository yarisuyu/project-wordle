import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guessResults, answer }) {


  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => {
        return (<Guess key={num} value={guessResults[num]} answer={answer} />);
      })}
    </div>
  );
}

export default GuessResults;
