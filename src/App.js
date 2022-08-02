import './App.css';
import Navbar from './Navbar';
import Home from './Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Create from './newBlog';
import BlogDetails from './blogDetails';

function App() {


  return (

    <div className="App">
      <Router>

      <Navbar />
    <div className="content">
      <Switch>

        <Route exact path="/">

         <Home/>

        </Route>

      <Route path="/create">

         <Create />

      </Route>

      <Route path="/blog/:id" >

        <BlogDetails />
      </Route>


      </Switch>

    </div>

      </Router>


    </div>
  
    
  );
}

export default App;
