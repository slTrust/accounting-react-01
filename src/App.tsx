import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Tags from 'views/Tags';
import Tag from 'views/Tag';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import Nomatch from 'views/Nomatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color:#333;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags" exact>
          <Tags />
        </Route>
        <Route path="/tags/:tag" exact>
          <Tag />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
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
