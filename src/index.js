import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Movielist from './components/filimoBox';
import MovieItem from './components/movieItem';
import {filimoBox} from './filimoBox';
import { filimoBox2 } from './filimoBox';
import { filimoBox3 } from './filimoBox';
import { popularMovies } from './movieItem';
import { popularMovies2 } from './movieItem';
import { popularMovies3 } from './movieItem';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MovieItem data={popularMovies}></MovieItem>
    <MovieItem data={popularMovies2}></MovieItem>
    <MovieItem data={popularMovies3}></MovieItem>
    <Movielist data={filimoBox}></Movielist>
    <Movielist data={filimoBox2}></Movielist>
    <Movielist data={filimoBox3}></Movielist>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
