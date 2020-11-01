import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Nomatch() {
  return (
    <div>页面不存在，你输错了地址！！</div>
  )
}

export default App;
