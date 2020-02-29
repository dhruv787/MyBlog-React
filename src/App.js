import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Posts from './features/posts/posts';
import Read from './features/posts/read';

const DEFAULT_STATE = {
  posts: [
    {
      id: 1, title: "Post1",
      body: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
      It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
      Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
      more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
      the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from s
      ections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
       by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
       The first line of Lorem Ipsum, 
      "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
      published: true,
      commentsCnt: 0
    },
    { id: 2, title: "Post2", body: "Post2 goes here", published: true, commentsCnt: 0 },
    { id: 3, title: "Post3", body: "Post3 goes here", published: true, commentsCnt: 0 },
  ],
  comments: [
    { id: 1, post_id: 1, title: "Comment 1", body: "Comment 1 goes here!" },
    { id: 2, post_id: 1, title: "Comment 2", body: "Comment 2 goes here!" },
    { id: 3, post_id: 3, title: "Comment 3", body: "Comment 3 goes here!" },
    { id: 4, post_id: 4, title: "Comment 4", body: "Comment 4 goes here!" }
  ]
}
function loadPost() {
  return (
    <Posts posts={DEFAULT_STATE.posts} comments={DEFAULT_STATE.comments} />
  );
}

function readPost(props) {
  let postId = props.match.params.id;
  let post = DEFAULT_STATE.posts.find(p => p.id == postId);
  console.log(post);

  let comments = DEFAULT_STATE.comments.filter((c) => {
    return c.post_id == post.id;
  });

  return (
    <Read post={post} comments={comments} />
  );
}

function App() {
  return (
    <Router>

      <div className="container">
        <Nav />

        <Route exact path="/" render={loadPost} />
        <Route exact path="/posts" component={loadPost} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/posts/:id/read" render={readPost} />

      </div>
    </Router>

  );
}

export default App;
