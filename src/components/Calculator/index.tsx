import React, { useState } from 'react';

export default function Calculator(){

    const [result, setResult] = useState('');

    function handleClick(){
        console.log('ae');
    }

    //placeholder3.innerHTML += `<br><tr>${datapoints.alunos[i].nascimento}<tr>`;

    const addToExpression = () => {
        const exp = document.getElementById('expressao').value;  
        const exp2 = document.getElementById('tabela');
        if (exp == '(A∧B)'){
           exp2.innerHTML += `<br><tr>123123123</tr>`
        }
        for (let i = 0; i < exp.length; i++) {
            if (exp[i] !== '∧' && exp[i] !== 'v' && exp[i] !== '~' && exp[i] !== '(' && exp[i] !== ')' && exp[i] !== 'A' && exp[i] !== 'B' && exp[i] !== 'C' && exp[i] !== 'D' && exp[i] !== 'E' && exp[i] !== 'F' && exp[i] !== 'G' && exp[i] !== 'H' && exp[i] !== 'I' && exp[i] !== 'J' && exp[i] !== 'K' && exp[i] !== 'L' && exp[i] !== 'M' && exp[i] !== 'N' && exp[i] !== 'O' && exp[i] !== 'P' && exp[i] !== 'Q' && exp[i] !== 'R' && exp[i] !== 'S' && exp[i] !== 'T' && exp[i] !== 'U' && exp[i] !== 'V' && exp[i] !== 'W' && exp[i] !== 'X' && exp[i] !== 'Y' && exp[i] !== 'Z') {
                console.log('nao deu certo');
        }if (exp[i] == ')' && exp[i-1] == '(' || exp[i] == '(' && exp[i+1] == ')' || exp[i] == '∧' && exp[i+1] == '∧' || exp[i] == 'v' && exp[i+1] == 'v' || exp[i] == '∧' && exp[i+1] == 'v' || exp[i] == 'v' && exp[i+1] == '∧' || exp[i] == '∧' && exp[i+1] == '~' || exp[i] == 'v' && exp[i+1] == '~' || exp[i] == '~' && exp[i+1] == '∧' || exp[i] == '~' && exp[i+1] == 'v' || exp[i] == '~' && exp[i+1] == '~' || exp[i] == '~' && exp[i+1] == '(' || exp[i] == '(' && exp[i+1] == '~' || exp[i] == ')' && exp[i+1] == '~' || exp[i] == '~' && exp[i+1] == ')' || exp[i] == '∧' && exp[i+1] == ')' || exp[i] == 'v' && exp[i+1] == ')' || exp[i] == ')' && exp[i+1] == '∧' || exp[i] == ')' && exp[i+1] == 'v' || exp[i] == '∧' && exp[i+1] == 'A' || exp[i] == 'v' && exp[i+1] == 'A' || exp[i] == '~' && exp[i+1] == 'A' || exp[i] == '∧' && exp[i+1] == 'B' || exp[i] == 'v' && exp[i+1] == 'B' || exp[i] == '~' && exp[i+1] == 'B' || exp[i] == '∧' && exp[i+1] == 'C' || exp[i] == 'v' && exp[i+1] == 'C' || exp[i] == '~' && exp[i+1] == 'C' || exp[i] == '∧' && exp[i+1] == 'D' || exp[i] == 'v' && exp[i+1] == 'D' || exp[i] == '~' && exp[i+1]) {
            console.log('nao deu certo');
        }if (exp[i] == ')' && exp[i+1] == ')'){
            console.log('nao deu certo');
        }if (exp[i] == '(' && exp[i+1] == '('){
            console.log('nao deu certo');
        }
        console.log(exp);
        setResult(exp);
    }
}
    return(
        <>
            <div>
                <h1>Calculadora Lógica</h1>
                <button onClick={addToExpression}>A</button>
                <button onClick={handleClick}>B</button>
                <button onClick={handleClick}>C</button>
                <button onClick={handleClick}>D</button>
                <button onClick={handleClick}>∼</button>
                <button onClick={handleClick}>∧</button>
                <button onClick={handleClick}>∨</button>
                <button onClick={handleClick}>→</button>
                <button onClick={handleClick}>↔</button>
                <button onClick={handleClick}>(</button>
                <button onClick={handleClick}>)</button>
                
                <input id='expressao' placeholder='digite sua expressão' value={result} onInput={e => setResult(e.target.value)}/>
                <button onClick={handleClick}>Resultado</button>
            </div>
            <div>
                <h1>Resultado</h1>
                <table id='tabela'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>First Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Doe</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )}