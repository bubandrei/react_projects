import React, { useState } from "react";
import './quiz_style.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

const Result = () => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали 3 ответа из 10</h2>
            <button>Попробовать снова</button>
        </div>
    );
}

const Game = ({ question, onClickVariants }) => {

    const note = question.variants.map((item, index) => {
        return <li key={index} onClick={() => { onClickVariants(index) }}>{item}</li>
    })

    return (
        <>
            {/* <div>{question}</div> */}
            <div className="progress">
                <div style={{ width: '50%' }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {note}
            </ul>
        </>
    );
}

const Quiz = () => {
    const [step, setStep] = useState(2);
    const question = questions[step];
    const onClickVariants = (index) => {
        console.log(index)
    }
    return (
        <div className="App">
            <Game question={question} onClickVariants={onClickVariants} />
            {/* <Result /> */}
        </div>
    );
}

export default Quiz;