// utils:
import APIHandler from '../../base';

// >>>> POST, create new prod::
export const sendEmailFromUser = (contactFormData: object) =>
  APIHandler.post(`/services/contact-us`, contactFormData);
