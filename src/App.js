import lightning from './lightning.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lightning} className="App-lightning" alt="lightning" />
        <p>
          Learning with Coderhouse.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/macarenaarmijo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maca Armijo
        </a>
      </header>
    </div>
  );
}

export default App;
