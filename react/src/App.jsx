import { useEffect, useState } from 'react';
import './App.css';
import Add from './pages/Add';
import Posts from './pages/Posts';
import Home from './pages/Home';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([{}]);
  useEffect(() => {
    fetch("http://www.localhost:4000/posts")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const deletePost = (id) => {
    fetch(`http://www.localhost:4000/posts/${id}`, { method: 'DELETE' })
      .then(() => console.log("DUZELT BURAYI REFRESHLEMIYOR SAYFAYI"));
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" > <Home posts={posts} deletePost={deletePost} /> </Route>
          <Route exact path="/posts" > <Posts posts={posts} /></Route>
          <Route exact path="/add"> <Add /> </Route>
          <Route path="/form"> <Form  posts={posts}/> </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
