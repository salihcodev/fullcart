// utils:
import APIHandler from '../../base';

// >>> POST, create new prod::
export const subscribeAtMailingList = (userEmail: string) => APIHandler.post(`/newsletter-subscription/${userEmail}`);
