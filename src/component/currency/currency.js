import React, { useEffect, useRef, useState } from 'react';
import { Block } from './block';
import './currency_style.scss';

const url = 'https://cdn.cur.su/api/latest.json'

function Currency() {

    // const [rates, setRates] = useState({});

    const ratesRef = useRef({});

    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('PLN')
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(0);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                ratesRef.current = json.rates;
                onChangeFromValue(1)
            })
            .catch((err) => console.log(err))
    }, []);
    const onChangeFromValue = (value) => {
        setValueFrom(value)
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];
        setValueTo(result.toFixed(2))
    }
    const onChangeToValue = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setValueFrom(result.toFixed(2))
        setValueTo(value)
    }
    useEffect(() => {
        onChangeFromValue(valueFrom)
    }, [fromCurrency, valueFrom]);

    useEffect(() => {
        onChangeToValue(valueTo)
    }, [toCurrency, valueTo])

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