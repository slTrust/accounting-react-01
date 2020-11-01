import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from 'components/Layout';


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

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Nomatch() {
  return (
    <div>页面不存在，你输错了地址！！</div>
  )
}

export default App;
