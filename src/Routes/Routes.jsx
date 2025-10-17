import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Components/Pages/Home/Home';
import Profile from '../Components/Pages/Profile/Profile';
import Signin from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/',
        Component: Profile,
      },
      {
        path: '/about-us',
        Component: Profile,
      },
      {
        path: '/profile',
        Component: Profile,
      },
      {
        path: '/signup',
        Component: SignUp,
      },
      {
        path: '/signin',
        Component: Signin,
      },
    ]
  },
]);