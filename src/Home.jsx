import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <h1>Games</h1>
    <nav>
      <ul>
        <li>
          <Link to="/blackjack">Blackjack</Link>
        </li>
        <li>
          <Link to="/towerofhanoi">Tower of Hanoi</Link>
        </li>
        <li>
          <Link to="/tictactoe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/sudoku">Sudoku</Link>
        </li>
        <li>
          <Link to="/connectfour">Connect Four</Link>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default Home;
