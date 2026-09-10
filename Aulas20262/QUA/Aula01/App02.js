import './App.css'

function Titulo() {
  return(
    <h1>Games Clássicos</h1>
  )
}

function Game() {
  return(
    <ul>
      <li>Título: Seaquest</li>
      <li>Ano de lançamento: 1983</li>
      <li>Console: Atari 2600</li>
    </ul>
  )
}

function App() {
  return (
    <>
      <Titulo />
      <Game />
    </>
  )
}

export default App