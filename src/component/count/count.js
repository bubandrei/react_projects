import React, { useState } from "react";
import './count_style.scss';

const Count = () => {
    const [count, setCount] = useState(0);
    const minus = () => {
        setCount(count - 1)
    }
    const plus = () => {
        setCount(count + 1)
    }
    return (
        <div className="App">
            <div>
                <h2>Count</h2>
                <h1>{count}</h1>
                <button className="minus" onClick={() => minus()}>- Minus</button>
                <button className="plus" onClick={() => plus()}>+ Plus</button>
            </div>
        </div>

    )
}
export default Count
