import React from 'react';
import './App.css';
import Todo from './Components/todo'
import MirageServer from './Mirage'


MirageServer()
function App() {
  return (
    <div >
     <Todo/>
    </div>
  );
}

export default App;
