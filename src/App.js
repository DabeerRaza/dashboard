import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import './utils/Styles/App.css';

import store from './redux/store'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import BlogDashboard from './components/BlogDashboard/BlogDashboard'
import BlogPosts from './components/BlogPosts/BlogPosts'
import AddNewPost from './components/AddNewPost/AddNewPost'
import FormsAndComponents from './components/Errors/FormsAndComponents/FormsAndComponents'
import Tables from './components/Tables/Tables'
import UserProfile from './components/UserProfile/UserProfile'
import Errors from './components/Errors/Errors'
import Footer from './components/Footer';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <SideBar />
          <NavBar />
          <div className="row">
            <div className="col-lg-2 col-md-3 col-12"></div>
            <main className="main col-lg-10 col-md-9 col-12">
              <Switch>
                <Route exact path="/sale-purchase-dashboard" component={BlogDashboard} />   
                <Route path="/sale-purchase-dashboard/blog-posts" component={BlogPosts}/>              
                <Route path="/sale-purchase-dashboard/add-new-post" component={AddNewPost}/>              
                <Route path="/sale-purchase-dashboard/forms-and-components" component={FormsAndComponents}/>              
                <Route path="/sale-purchase-dashboard/tables" component={Tables}/>              
                <Route path="/sale-purchase-dashboard/user-profile" component={UserProfile}/>            
                <Route path="/sale-purchase-dashboard/errors" component={Errors}/>    
              </Switch> 
            </main>
          </div>
          <div className="row">
            <footer className="col-lg-10 offset col-md-9">
              <Footer />
            </footer>
          </div>    
        </div>
      </Router>
    </Provider>
  );
}

export default App;
