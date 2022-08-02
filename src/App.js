import './App.css';
import Navbar from './Navbar';
import Home from './Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {


  return (

    <div className="App">
      <Router>

      <Navbar />
    <div className="content">
      <Switch>

        <Route path="/">

        <Home/>

        </Route>

      </Switch>

    </div>

      </Router>


    </div>
  
    
  );
}

export default App;
