import {BrowserRouter as Router,Switch,Route} from'react-router-dom';
import './App.css';
import Header from './components/Headers';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/detail/:id' component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
