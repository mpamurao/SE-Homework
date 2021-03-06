import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SearchResult from './components/SearchResult';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:result" component={SearchResult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
