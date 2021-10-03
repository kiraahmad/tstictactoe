import React, { useState, useEffect } from "react"
import Board from "./Board"
import axios from 'axios'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const [winner, setWinner] = useState('')
  const xO = xIsNext ? "X" : "O";

  //Call the api to determine if winner is already set
  useEffect(() => {
    const fetchWinner = async () => {
      const {data} = await axios.post('/api/tic', history[stepNumber])
      const winners = data.winner
      setWinner(winners)
    }
    fetchWinner()
  },[history, stepNumber])


const handleClick = async (i) => {
  const historyPoint = history.slice(0, stepNumber + 1)
  const current = historyPoint[stepNumber]
  const squares = [...current] 

  // stop the function if there is a winner or game is even
  if (winner || squares[i]) return

  // select square if the game is not finished
  squares[i] = xO
  setHistory([...historyPoint, squares])
  setStepNumber(historyPoint.length)
  setXisNext(!xIsNext)
}

// will reset the game 
const resetGame = () => {
  setHistory([Array(9).fill(null)])
  setStepNumber(0)
  setXisNext(true)
  setWinner('')
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h3>{winner ? "Winner: " + winner : !winner && history.length === 10 ? "Game is drraw" : "Next Player: " + xO }</h3>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </>
  );
};

export default Game
