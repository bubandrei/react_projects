import React from 'react';
import { Block } from './block';
import './currency_style.scss';

function Currency() {
  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default Currency;