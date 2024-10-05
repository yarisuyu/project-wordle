import React from 'react';

function Guess({ value }) {
  console.log("Guess: ", value);
  return (
    <p className="guess">
      {value.toString().split('').map((letter, index) => <span key={index} className="cell">{letter ?? ''}</span>)}
    </p>
  );
}

export default Guess;
