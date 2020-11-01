import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import styled from 'styled-components';

const Wrapper = styled.div`
  border:1px solid red;
  min-height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`;

const Nav = styled.nav`
  border:1px solid blue;
  > ul{
    display:flex;
    > li {
      width:33.333333%;
      text-align:center;
      padding:16px;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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
