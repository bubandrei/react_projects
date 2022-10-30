import React, { useEffect, useState } from 'react';
import { Block } from './block';
import './currency_style.scss';

const url = 'https://cdn.cur.su/api/latest.json'

function Currency() {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('PLN')
    const [toCurrency, setToCurrency] = useState('EUR')
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(0);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((json) => setRates(json.rates))
            .catch((err) => console.log(err))
    }, []);
    console.log(rates)
    console.log(fromCurrency)
    console.log(rates[fromCurrency])
    const onChangeFromValue = (value) => {

        setValueFrom(value)
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setValueTo(result)
    }
    const onChangeToValue = (value) => {
        const result = (rates[fromCurrency]/rates[toCurrency])*value;
        setValueFrom(result)
        setValueTo(value)
    }
    console.log(valueTo)


    return (
        <div className="App">
            <Block value={valueFrom}
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromValue} />
            <Block
                value={valueTo}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToValue} />
        </div>
    );
}

export default Currency;