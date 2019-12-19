import React from "react";
// import { Redirect } from "react-router-dom";
import Redirect from "react-router-dom/Redirect";

// Route Views

import BlogDashboard from './components/BlogDashboard/BlogDashboard'
import BlogPosts from './components/BlogPosts/BlogPosts'
import AddNewPosts from './components/AddNewPosts/AddNewPosts'
import FormsAndComponents from './components/FormsAndComponents/FormsAndComponents'
import Tables from './components/Tables/Tables'
import UserProfile from './components/UserProfile/UserProfile'
import Errors from './components/Errors/Errors'

export default [
  {
    path: "/",
    exact: true,
    layout: BlogDashboard,
    component: () => <Redirect to="BlogDashboard" />
  },
  {
    path: "/blog-dashboard",
    layout: BlogDashboard,
    component: BlogDashboard
  },
  // SuppliersList
  {
    path: "/blog-posts",
    layout: BlogPosts,
    component: BlogPosts
  },
  {
    path: "/add-new-posts",
    layout: AddNewPosts,
    component: AddNewPosts
  },
  {
    path: "/forms-and-components",
    layout: FormsAndComponents,
    component: FormsAndComponents
  },
  {
    path: "/tables",
    layout: Tables,
    component: Tables
  },
  // customer-contact-list
  {
    path: "/user-profile",
    layout: UserProfile,
    component: UserProfile
  },
  {
    path: "/errors",
    layout: Errors,
    component: Errors
  }
];
