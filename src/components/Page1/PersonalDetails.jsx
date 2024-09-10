import React from "react";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import "./Personal Details.css";
import Inputs from "./Inputs";
import Button from "./Button";

export const personalSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'), // Added validation for phone number
});

const PersonalDetails = ({ control, onSubmit }) => {
  return (
    <div className="page1">
      <div className="header">
        <h1>Personal Details</h1>
        <p>Required fields *</p>
      </div>
      <form className="input-section" onSubmit={onSubmit}>
        <div>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="First Name" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Last Name" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Email Address" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Phone Number" {...field} />}
          />
        </div>
        <Button btntext="SAVE AND CONTINUE" type="submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
