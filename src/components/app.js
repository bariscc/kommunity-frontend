import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from '$/components/pages/home';
import Login from '$/components/pages/login';
import Logout from '$/components/pages/logout';
import MemberProfile from '$/components/pages/member-profile';

import '$/css/app.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/member/profile" component={MemberProfile} />
  </Switch>
);

export default App;
