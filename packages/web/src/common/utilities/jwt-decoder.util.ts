// pks:
import decode from 'jwt-decode';

// utils:
import { localStorageObjGetter } from './localstorage-dealer/localstorage-getters.util';
import { JWTTypes } from '../@types/auth.type';

const accessToken = localStorageObjGetter(`@authedUser`)?.accessToken;

export const jwtDecoder = () => {
  try {
    if (accessToken) {
      const decoded: JWTTypes = decode(accessToken);

      return decoded;
    }
  } catch (err) {
    console.log(err);
  }
};
