import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './components/navigationBar/NavigationBar';
import App from './App';
import HotCoffee from './routes/HotCoffee';
import IcedCoffee from './routes/IcedCoffee';
import HotTea from './routes/HotTea';
import IcedTea from './routes/IcedTea';
import SecretMenu from './routes/SecretMenu';
import Frappuccinos from './routes/Frappuccinos';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/hotCoffee" element={<HotCoffee />}/>
        <Route path="/icedCoffee" element={<IcedCoffee />}/>
        <Route path="/frappuccinos" element={<Frappuccinos />}/>
        <Route path="/hotTea" element={<HotTea />}/>
        <Route path="/icedTea" element={<IcedTea />}/>
        <Route path="/secretMenu" element={<SecretMenu />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

