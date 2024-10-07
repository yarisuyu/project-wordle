import React from 'react';

function Success({guessCount}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guessCount > 1  ? `${guessCount} guesses` : '1 guess'}</strong>.
      </p>
    </div>
  );
}

function Failure({answer}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
}

function GameResult({ answer, guessCount, isSuccess }) {
  console.log("Render game result, answer", answer, "guessCount", guessCount, "isSuccess", isSuccess);

  return (
    <>
      {isSuccess && <Success guessCount={guessCount}/>}
      {!isSuccess && <Failure answer={answer}/>}
    </>
  );
}

export default GameResult;
