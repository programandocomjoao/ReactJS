import './App.css'

function Titulo() {
  return(
    <h1>Games Clássicos</h1>
  )
}

function Game(props) {
  return(
    <ul>
      <li>Título: {props.titulo}</li>
      <li>Ano de lançamento: {props.ano}</li>
      <li>Console: {props.console}</li>
    </ul>
  )
}

function App() {
  return (
    <>
      <Titulo />
      <Game titulo="Futebol" ano="1977" console="Telejogo" />
      <Game titulo="Come-Come!" ano="1982" console="Odyssey" />
      <Game titulo="Seaquest" ano="1983" console="Atari 2600" />
      <Game titulo="Super Mario Bros" ano="1985" console="Nintendo(NES)" />
      <Game titulo="Sonic The Hedgehog" ano="1991" console="Master System" />
    </>
  )
}

export default App