
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>This is a basic React application  for main flow internship !</p>

        {}
        <img 
          src={`${process.env.PUBLIC_URL}/react-context-api.png`} 
          className="App-image" 
          alt="React Context API" 
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn more about React
        </a>
      </header>
    </div>
  );
}

export default App;

