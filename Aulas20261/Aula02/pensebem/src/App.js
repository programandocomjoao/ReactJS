import './App.css'
import Titulo from './Titulo'
import Telas from './Telas'
import Botoes from './Botoes';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Telas />
        <Botoes />
        <Start />
      </header>
    </div>
  );
}

export default App
