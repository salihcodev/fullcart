// utils:
import APIHandler from '../../base';

// >>>> POST, create new door::
export const sendEmailFromUser = (contactFormData: object) =>
  APIHandler.post(`/services/contact-us`, contactFormData);
