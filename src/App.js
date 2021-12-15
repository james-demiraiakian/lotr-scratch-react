import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main.js';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/films">
            Films
          </NavLink>
          <NavLink className="navlink" to="/characters">
            Characters
          </NavLink>
          <NavLink className="navlink" to="/books">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/films">
            <Films films={Films} />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
