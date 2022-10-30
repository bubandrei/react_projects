import React, { useEffect, useState } from 'react';
import { Block } from './block';
import './currency_style.scss';

const url = 'https://cdn.cur.su/api/latest.json'

function Currency() {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('EUR')
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((json) => setRates(json.rates))
        .catch((err)=> console.log(err))
    }, []);
    console.log(rates)
    return (
        <div className="App">
            <Block value={0} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
            <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
        </div>
    );
}

export default Currency;