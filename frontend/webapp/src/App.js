
import SignIn from './signin';
import SignUp from './signup';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
        <Route exact path='/' component={SignUp}/> 
        <Route exact path='/signin' component={SignIn}/> 
        </Switch>
      </Router>
  );
}

export default App;
