// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as servicesAPIs from '../../../../api/comps/contact-us/endpoints-referrers';
import { ContactInFormTypes } from '../../../../common/types/contact-form.types';
import { ContactFormResponse } from '../../../../common/types/contact-us.types';

// SLICE LOGICS::
export const mailSender = createAsyncThunk(
  `services/sendUserMail`,
  async (contactFormData: ContactInFormTypes, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<ContactFormResponse> =
        await servicesAPIs.sendEmailFromUser(contactFormData);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
