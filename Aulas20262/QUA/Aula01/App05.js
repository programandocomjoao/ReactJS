import './App.css'
import React from 'react'

class Titulo extends React.Component {
  render() {
    return(
      <h1>Consoles Retrô</h1>
    )
  }
}

class Console extends React.Component {
  render() {
    return(
      <ul>
        <li>Descrição: Magnavox Odyssey</li>
        <li>Ano de lançamento: 1972</li>
        <li>Fabricante no Brasil: Philips</li>
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <>
        <Titulo />
        <Console />
      </>
    )
  }
}

export default App