import React from 'react';

function Keyboard({alphabet}) {
  // const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  // updateAlphabet(guessResults, answer);

  return <div className='keyboard'>
    <p key="1" className="keyboard-row">
      {alphabet.slice(0, 9).map(({ letter, status }) => <span key={letter} className={`cell letter ${status}`}>{letter}</span>)}
    </p>
    <p key="2" className="keyboard-row">
      {alphabet.slice(9, 17).map(({ letter, status }) => <span key={letter} className={`cell letter ${status}`}>{letter}</span>)}
    </p>
    <p key="3" className="keyboard-row">
      {alphabet.slice(17).map(({ letter, status }) => <span key={letter} className={`cell letter ${status}`}>{letter}</span>)}
    </p>
  </div>;
}

export default Keyboard;
