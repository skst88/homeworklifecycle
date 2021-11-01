import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const changeFontPlus = () => {
        setCount((prev) => prev + 1)
    }
    const changeFontMinus = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <>
            <p>Вы нажали {count} раз</p>
            <button onClick={changeFontPlus}>+</button>
            <button onClick={changeFontMinus}>-</button>
        </>
    );
};

export default Counter;