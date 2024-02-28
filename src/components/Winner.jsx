import { Square } from './Square'

export function WinnerModal ({ winner, resetGame, showSquare }) {
  if (winner === null || winner===true) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó'

  return (
    <section className='winner'>
      <div className='text'>
        <h2> {winnerText} </h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <h4 className='check' onClick={showSquare}>Check</h4>
          <button onClick={resetGame}>Emperzar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
