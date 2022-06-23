import Dice from "./Dice";
import "./Board.css";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function Board({ name, color, gameHistory, className }) {

    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);
    const board = `Board ${className}`;

    return (
       
        <div className={board}>
            <h2 className="Board-heading">{name}</h2>
            <Dice color={color} num={num} />
            <h2 className="Board-heading">총점</h2>
            <p>{sum}</p>
            <h2 className="Board-heading">기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
        
    );
}

export default Board;