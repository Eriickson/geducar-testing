import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import AppContainer from './components/AppContainer';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <AppContainer>
          <App />
        </AppContainer>
      </Switch>
    </Router>
  </>
  ,
  document.getElementById('root')
);
