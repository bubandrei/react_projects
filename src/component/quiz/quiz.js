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

const Result = ({correct}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
            <button>Попробовать снова</button>
            </a>
            
        </div>
    );
}

const Game = ({ question, onClickVariants, step }) => {
    const persentage = Math.round((step / questions.length) * 100);
    console.log(step)
    const note = question.variants.map((item, index) => {
        return <li key={index} onClick={() => { onClickVariants(index) }}>{item}</li>
    })

    return (
        <>
            {/* <div>{question}</div> */}
            <div className="progress">
                <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {note}
            </ul>
        </>
    );
}

const Quiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const onClickVariants = (index) => {
        if (index == question.correct) {
            setCorrect(correct+1)
        }
        setStep(step + 1)
    }
    return (
        <div className="App">
            {step != questions.length ? <Game question={question} onClickVariants={onClickVariants} step={step}/> : <Result correct={correct}/>}

        </div>
    );
}

export default Quiz;