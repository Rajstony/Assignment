import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './containers/Header';
import UserListing from './containers/UserListing';
import UserDetail from './containers/UserDetail';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path ="/" exact component={UserListing}/>
      <Route path ="/user/:userId" exact component={UserDetail}/>
      <Route >404 Not Found</Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
