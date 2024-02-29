import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/Winner'
import { saveGameToStorage, resetGameStorage } from './logic/storage'
import { MouseFollower } from './components/MouseFollower'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    if (boardFromStorage) return JSON.parse(boardFromStorage)

    return Array(9).fill(null)
  })

  // constante para maejo de la posicion del mause
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enable, setEnable] = useState(true)

  // const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null -> hay ganador | false -> hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    console.log('reseteando')
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
    setPosition({ x: 0, y: 0 })
    setEnable(true)
  }

  const showSquare = () => {
    setWinner(true)
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
      setEnable(false)
      setWinner(newWiner) // ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
      setEnable(false)
    }
  }

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event

      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

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
      <h3>{winner ? 'juego terminado' : ''}</h3>
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

      <WinnerModal resetGame={resetGame} winner={winner} showSquare={showSquare} />

      <MouseFollower enable={enable} position={position} turn={turn} />

    </main>

  )
}

export default App
