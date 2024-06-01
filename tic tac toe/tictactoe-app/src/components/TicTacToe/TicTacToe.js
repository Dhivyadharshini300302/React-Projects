import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Asserts/circle.png';
import cross_icon from '../Asserts/cross.png';

let data = ["","","","","","","","",""];

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock || data[num]) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} alt="cross">`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src=${circle_icon} alt="circle">`;
            data[num] = "o";
        }
        setCount(count + 1);
        checkwin();
    };

    const checkwin = () => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `CONGRATULATIONS : <img src=${winner === 'x' ? cross_icon : circle_icon} alt="${winner}" > wins`;
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
        box_array.forEach((box) => {
            box.current.innerHTML = "";
        });
    };

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' ref={box1} onClick={(e) => toggle(e, 0)}></div>
                    <div className='boxes' ref={box2} onClick={(e) => toggle(e, 1)}></div>
                    <div className='boxes' ref={box3} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e) => toggle(e, 3)}></div>
                    <div className='boxes' ref={box5} onClick={(e) => toggle(e, 4)}></div>
                    <div className='boxes' ref={box6} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' ref={box7} onClick={(e) => toggle(e, 6)}></div>
                    <div className='boxes' ref={box8} onClick={(e) => toggle(e, 7)}></div>
                    <div className='boxes' ref={box9} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    );
};

export default TicTacToe;
