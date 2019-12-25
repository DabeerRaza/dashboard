import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import './utils/Styles/App.css';

import store from './redux/store'

import Login from './views/Login';
import AuthenticateUsers from './views/AuthenticateUsers'

const App = () => {

  // if(window.location.href === "http://localhost:3000/") {
  //   return (
  //     <Router>
  //       <Redirect to="/login" />  
  //     </Router>
  //   )
  // }

  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/auth-users" component={AuthenticateUsers} />
            <Route path="*" component={() => "404, page not found"} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
