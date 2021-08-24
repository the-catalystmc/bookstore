import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Route, BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';
import store from './redux/configureStore';
import Categories from './components/Categories';
import Books from './components/Books';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="Nav-Container">
          <h1>Bookstore CMS</h1>
          <nav>
            <ul className="Nav-Items">
              <li className="Nav-Item"><Link exact to="/">Books</Link></li>
              <li className="Nav-Item"><Link to="/categories">Categories</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <div className="App">
            <Route path="/categories"><Categories text="Under Construction." /></Route>
            <Route path="/" exact><Books /></Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
