import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './component/Header'
import ProductCard from './component/ProductCard';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <React.StrictMode>
    <Grid>
      <Header />
      <ProductCard />
      <App />
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
