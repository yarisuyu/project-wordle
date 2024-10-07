import React from 'react';

import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const letters = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(WORD_LENGTH).map(num => (
        <span
          key={num}
          className={`cell ${letters ? letters[num]?.status : ""}`}>
          {letters ? letters[num]?.letter : undefined}
        </span>
      ))}

    </p>
  );
}

export default Guess;
