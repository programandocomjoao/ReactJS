import './App.css'
import Titulo from './Titulo'
import Telas from './Telas'
import Botoes from './Botoes'
import Start from './Start'

function App() {
  return (
    <div className="App">
      <div id="quadro">
        <Titulo />
        <Telas />
        <Botoes />
        <Start />
      </div>
    </div>
  )
}

export default App
