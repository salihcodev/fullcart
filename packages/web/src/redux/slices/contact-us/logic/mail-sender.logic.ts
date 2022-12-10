// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import { ContactInFormTypes } from '../../../../common/@types/contact-form.types';
import { ContactFormResponse } from '../../../../common/@types/slice-contact-us.types';
import * as servicesAPIs from '../../../../api/app-resources/contact-us/endpoints-referrers';

// SLICE LOGICS::
export const mailSender = createAsyncThunk(
  `services/sendUserMail`,
  async (contactFormData: ContactInFormTypes, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<ContactFormResponse> = await servicesAPIs.sendEmailFromUser(contactFormData);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
