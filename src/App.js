import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <div className="App">
          <NavBar />
          <Route path="/categories"><Categories text="Under Construction." /></Route>
          <Route path="/" exact><Books /></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
