import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
