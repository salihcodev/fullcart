// utils:
import APIHandler from '../base';

/* 
  ***PLEASE***
   make sure to build user interface in interfaces directory,
   and get ride of dummy object below
*/

// setup <user> network requests
// >>>> SIGNIN, manage existed user to login
export const signin = (userData: object) =>
  APIHandler.post('/auth/signin', userData);

// >>>> SIGNUP, create new user
export const signup = (userData: object) =>
  APIHandler.post('/auth/signup', userData);
