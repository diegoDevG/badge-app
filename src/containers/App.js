import React from 'react';
import Badges from './Badges';
import BadgeNew from './BadgeNew';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout';
import NotFound from '../containers/NotFound';
import Home from '../components/Home';
import EditBadge from '../containers/EditBadge';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/new-badge" component={BadgeNew} />
            <Route exact path="/edit-badge/:badgeId" component={EditBadge} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
