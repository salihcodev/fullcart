// utils:
import APIHandler from '../base';

// setup <user> network requests
// >>> READ user data
export const fetchInfo = (role: string, id: string, fields?: string) =>
  APIHandler.get(`/auth/${role}/user/${id}${fields || ``}`);

// >>> SIGNIN, manage existed user to login
export const signin = (role: string, userData: object) => APIHandler.post(`/auth/${role}/signin`, userData);

// >>> SIGNUP, create new user
export const signup = (role: string, userData: object) => APIHandler.post(`/auth/${role}/signup`, userData);
