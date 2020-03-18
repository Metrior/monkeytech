import React from 'react';
import Wrapper from "./components/Wrapper";
import Result from "./components/Result";
import {Route, Switch} from 'react-router-dom';

import Root from "./App.styled";

function App() {
  return (
    <Root>
        <Switch>
            <Route exact path="/" component={Wrapper}/>
            <Route exact path="/result" component={Result}/>
        </Switch>
    </Root>
  );
}

export default App;
