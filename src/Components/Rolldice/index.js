import './style.css';
import '../Dados';
import Dados from '../Dados';
import { useState } from 'react';

function Rolldice(){

    const [dice1, setDice1] = useState('one');
    const [dice2, setDice2] = useState('one');
    const [rollingDice, setRolling] = useState(false);
    const [diceAnimation, setDiceAnimation] = useState(false);


const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

function roll(){
    // Ele recebe o metodo como false e o deixa em true
    setRolling(true);
    // pega o dado e os lados(lista) e os torna aleaorio pegando a lista inteira
    setDice1(sides[Math.floor(Math.random() * sides.length)]);
    setDice2(sides[Math.floor(Math.random() * sides.length)]);

    setDiceAnimation(true)
    setTimeout(()=>{
        setDiceAnimation(false)
    }, 1000)

    // setTimeout metodo q chama uma função e determina o tempo em milisegundos
    setTimeout(()=>{
        setRolling(false);
    }
    // 1 seg 
    ,1000)
}

    return(
        <>
            <div className={diceAnimation ? 'shaking' : ''}>
                <Dados dices= {dice1}/>
                <Dados dices= {dice2}/>
            </div>
            <div id='container_button'>
                {/* onClick pega a ação do button e dentro dela esta a função roll 
                disabled  desabilita o click do button, ele pode receber funções mais normalmente ele recebe true ou false*/}
                <button type='submit' onClick={roll} disabled={rollingDice}>{rollingDice ? 'Rolling...' : 'RollDice!'}</button>
            </div>
        </>
    );
}

export default Rolldice;