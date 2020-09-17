import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import SinglePost from './Components/SinglePost/SinglePost';

function App() {
  return (    
    <Router>
      <Header />
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
