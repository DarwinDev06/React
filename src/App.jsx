import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/Winner'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

/* [Array(9).fill(null)] 'x','o','x','x','o','x','x','o','x', */
function App () {
  // const [board, setBoard] = useState(Array(9).fill(null))

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    if (boardFromStorage) return JSON.parse(boardFromStorage)

    return Array(9).fill(null)
  })

  // const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null -> hay ganador | false -> hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    console.log('updating')
    // no se actualiza esta posicion por que ya tiene algo
    if (board[index] || winner) return
    // acutalizamos tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // revisar si hay ganador
    const newWiner = checkWinnerFrom(newBoard)
    if (newWiner) {
      confetti()
      setWinner(newWiner) // ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Triki</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <button onClick={resetGame}>Empezar de nuevo</button>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>

  )
}

export default App
