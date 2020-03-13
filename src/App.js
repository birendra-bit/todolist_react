import React from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Indexpage from './container/Indexpage'
import {BrowserRouter} from 'react-router-dom'
const App = ()=> {
  return (
    <BrowserRouter>
        <Indexpage/>
    </BrowserRouter>
  );
}

export default App;
