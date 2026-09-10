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
  constructor(props) {
    super(props)
    this.descricao = props.descricao
    this.ano = props.ano
    this.fabricante = props.fabricante
  }

  render() {
    return(
      <ul>
        <li>Descrição: {this.descricao}</li>
        <li>Ano de lançamento: {this.ano}</li>
        <li>Fabricante no Brasil: {this.fabricante}</li>
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <>
        <Titulo />
        <Console descricao="Magnavox Odyssey" ano="1972" fabricante="Philips" />
        <Console descricao="Telejogo" ano="1976" fabricante="Ford Philco" />
        <Console descricao="Atari 2600" ano="1977" fabricante="Polivox" />
        <Console descricao="Master System" ano="1986" fabricante="TecToy" />
        <Console descricao="Phantom System" ano="1989" fabricante="Gradiente" />
      </>
    )
  }
}

export default App