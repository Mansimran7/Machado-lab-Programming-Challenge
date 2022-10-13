import React  from 'react'
import './App.css';

import Button from 'react-bootstrap/Button';
import Authenticate from './components/Authenticate';
import {useState} from 'react';
import NewRecords from './components/NewRecords';
import Data from './components/Data';

function App() {

  const [isAuth, setAuth] = useState(false);
  const [isData, setData] = useState(false);
  const [isAddData, setAddData] = useState(false);
  

  const handleAuthClick = event => {
    setAuth(isAuth => !isAuth);
    if(isAuth === false)
    {
      setData(isData => false)
      setAddData(isAddData => false)
    }
  };

  const handleDataClick = event => {
    setData(isData => !isData);
    if(isData === false)
    {
      setAuth(isAuth => false)
      setAddData(isAddData => false)
    }
  };

  const handleAddDataClick = event => {
    setAddData(isAddData => !isAddData);
    if(isAddData === false)
    {
      setAuth(isAuth => false)
      setData(isData => false)
    }
  };
  
  return (
    <div className="App">
      <div>
        <Button onClick={handleAuthClick} variant="primary">Authenticate User</Button>{' '}
        <Button onClick={handleDataClick} variant="primary">Data</Button>{' '}
        <Button onClick={handleAddDataClick} variant="primary">Add New Records</Button>{' '}
        
      </div>
      {isAuth && <Authenticate /> }
      {isData && <Data /> } 
      {isAddData && <NewRecords /> } 
    </div>
  );
}

export default App;