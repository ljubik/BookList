import React from 'react';
import style from "./Header.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookItem from '../../pages/BookItem';
import AddBook from '../../pages/AddBook';
import Main from '../Main/Main';

const Header = function () {
  return (
    <header className={style.header}>
      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booklist">booklist</Link>
            </li>
            <li>
              <Link to="/AddBook">AddBook</Link>
            </li>
          </ul>
        </nav>

 
        <Switch>
          <Route path="/">
          <Main />
          </Route>
          <Route path="/booklist">
            <BookItem />
          </Route>
          <Route path="/AddBook">
            <AddBook />
          </Route>
        </Switch>
      </div>
    </Router> */}
      
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/booklist">booklist</a></li>
          <li><a href="/AddBook">AddBook</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
