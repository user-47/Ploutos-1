import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
