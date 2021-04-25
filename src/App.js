import {BrowserRouter as Router,Switch,Route} from'react-router-dom';
import './App.css';
import Header from './components/Headers';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
