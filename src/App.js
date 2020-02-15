import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Result from "./components/Result";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Wrapper}/>
            <Route exact path="/result" component={Result}/>
        </Switch>
    </div>
  );
}

export default App;
