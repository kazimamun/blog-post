import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Components/Posts/Posts';
import SinglePost from './Components/SinglePost/SinglePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        <Route exact path="/">
          <Posts></Posts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
