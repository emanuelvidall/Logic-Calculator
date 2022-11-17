import React, { useState } from 'react';

export default function Calculator(){

    const [result, setResult] = useState('');

    const handleClick = () => {
        console.log(result);
    }

    const addToExpression = () => {
        var exp = document.getElementById('expressao').value;
        exp += 'A';
        console.log(exp);
        setResult(exp);
    }

    return(
        <div>
            <h1>Calculadora Lógica</h1>

            <button onClick={addToExpression}>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>∼</button>
            <button>∧</button>
            <button>∨</button>
            <button>→</button>
            <button>↔</button>
            <button>⊻</button>
            <button>↓</button>
            <button>↑</button>
            <button>(</button>
            <button>)</button>

            <input id="expressao" placeholder='digite sua expressão' value={result} onInput={e => setResult(e.target.value)}/>
            <button onClick={handleClick}>Resultado</button>
        </div>
    )}