// utils:
import APIHandler from '../../base';

// >>> POST, send a new email from the user::
export const sendEmailFromUser = (contactFormData: object) => APIHandler.post(`/services/contact-us`, contactFormData);
