import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import Nomatch from 'views/Nomatch';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        {/* 设置默认路由 */}
        <Redirect exact from="/" to="money" />
        {/* 404页面 都匹配不上的时候 */}
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
