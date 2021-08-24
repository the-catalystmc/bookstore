import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="App">
            <NavBar />
            <Route path="/categories"><Categories text="Under Construction." /></Route>
            <Route path="/" exact ><Books /></Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
