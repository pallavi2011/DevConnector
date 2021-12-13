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
import Dashboard from './Components/dashboard/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';
import CreateProfile from './Components/profile-forms/CreateProfile';
import EditProfile from './Components/profile-forms/EditProfile';
import AddExperience from './Components/profile-forms/AddExperience';
import AddEducation from './Components/profile-forms/AddEducation';
import Profiles from './Components/profiles/Profile';
import Profile from './Components/profile/Profile';
import Posts from './Components/posts/Posts';
import Post from './Components/post/Post';

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
            <Route exact path='/profiles' component={Profiles}/>
            <Route exact path='/profile/:id' component={Profile}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
            <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
            <PrivateRoute exact path='/add-experience' component={AddExperience}/>
            <PrivateRoute exact path='/add-education' component={AddEducation}/>
            <PrivateRoute exact path='/posts' component={Posts}/>
            <PrivateRoute exact path='/posts/:id' component={Post}/>
          </Switch>
        </section>
      </Fragment>
      </Router>
      </Provider>
    </div>
    )}


export default App;
