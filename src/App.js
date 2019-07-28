import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Denominations from './Denominations';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/denominations" component={Denominations} />
      </div>
    </BrowserRouter>
  );
}

export default App;
