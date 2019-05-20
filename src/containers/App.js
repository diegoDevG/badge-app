import React from 'react';
// import './App.css';
import Badge from './../components/badge';
import Badges from './Badges';
import BadgeNew from './BadgeNew';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout';
import NotFound from '../containers/NotFound';
import Home from '../components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/new-badge" component={BadgeNew} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
