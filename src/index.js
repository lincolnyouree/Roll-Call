import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
  <React.StrictMode>
<Route render ={()=> <App /> }/>
  </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();