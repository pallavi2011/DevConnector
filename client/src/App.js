import './App.css';
import React, {Fragment, useEffect} from 'react';
import Navbar from './Components/layouts/Navbar';
import Landing from './Components/layouts/Landing';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './Components/layouts/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
    <div className="App">
      <Provider store={store}>
      <Router>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing}/>
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </section>
      </Fragment>
      </Router>
      </Provider>
    </div>
    )}


export default App;
