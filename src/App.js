import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OperatorsTable from './components/OperatorsTable';
import Home from './components/Home';
import Traffic from './components/Traffic';
import Transit from './components/Transit';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<OperatorsTable />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/traffic" element={<Traffic />}></Route>
            <Route path="/transit" element={<Transit />}></Route>
          </Routes>     
        </BrowserRouter> 
    </div>
  );
}

