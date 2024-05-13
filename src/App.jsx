import { useState } from 'react';
import './App.css';
import UserInput from './userInput';
import UserInfo from './userInfo';

function App() {
  const [currentSearch, setCurrentSearch] = useState(null);

  const handleReset = () => {
    setCurrentSearch(null);
  };

  return (
    <>
      <h3>GitHub username:</h3>
      <UserInput onComplete={(inputValue) => {
        setCurrentSearch(inputValue)
      }} />
      {/* Provjera je li postavljena trenutna pretraga, ako jest, prikazi UserInfo i gumb za resetiranje */}
      {currentSearch && (
        <>
          <UserInfo userName={currentSearch} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </>
  );
}

export default App;
