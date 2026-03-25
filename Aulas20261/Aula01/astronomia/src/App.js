import logo from './Terra.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">Planeta Terra</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Terra é o quinto maior planeta do Sistema Solar.
        </p>
        <a
          className="App-link"
          href="https://pt.wikipedia.org/wiki/Terra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais...
        </a>
      </header>
    </div>
  );
}

export default App;
