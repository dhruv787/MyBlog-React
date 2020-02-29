import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Posts from './features/posts';

const DEFAULT_STATE = {
  posts: [
    { id: 1, title: "Post1", body: "Post1 goes here", published: true },
    { id: 2, title: "Post2", body: "Post2 goes here", published: true },
    { id: 3, title: "Post3", body: "Post3 goes here", published: true },
  ]
}
function loadPost() {
  return (
    <Posts posts={DEFAULT_STATE.posts} />
  );
}
function App() {
  return (
    <Router>

      <div className="container">
        <Nav />

        <Route exact path="/" render={loadPost} />
        <Route path="/posts" component={loadPost} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />

      </div>
    </Router>

  );
}

export default App;
