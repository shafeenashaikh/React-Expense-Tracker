import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;
