// utils:
import APIHandler from '../../../base';

// >>> POST, drop DB collection.
export const dropCollection = (collection: string) => APIHandler.post(`/${collection}/wipe`);
