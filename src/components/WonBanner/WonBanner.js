import React from 'react';

import Banner from '../Banner';

function WonBanner({guessCount}) {
  return <Banner status="happy">
    <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guessCount > 1  ? `${guessCount} guesses` : '1 guess'}</strong>.
      </p>
  </Banner>;
}

export default WonBanner;
