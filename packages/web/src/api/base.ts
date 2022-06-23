// pkgs:
import axios from 'axios';

// utils:
import { localStorageObjGetter } from '../common/utilities/localstorage-dealer/localstorage-getters.util';

// >>> the connection bases:
let baseUrl: string;
const API_VERSION = `api/v1`;

// all potential locals
const LOCALS: string[] = [`localhost`, `127.0.0.1`, ``];

// check wether the app hosted on local or not:
if (LOCALS.includes(window.location.hostname)) {
  baseUrl = `http://localhost:8000/${API_VERSION}`;
} else {
  baseUrl = `your-api-server`;
}

// >>> create axios instance:
const APIHandler = axios.create({ baseURL: baseUrl });

// make a verification with every future sent req
APIHandler.interceptors.request.use((req) => {
  const auth = localStorageObjGetter(`@currentAuthedUser`);

  if (auth) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }

  return req;
});

export default APIHandler;
