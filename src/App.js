import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar />
          <Route path="/categories"><Categories text="Under Construction." /></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
