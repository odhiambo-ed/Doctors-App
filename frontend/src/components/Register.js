/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { register } from '../slices/auth';
import { clearMessage } from '../slices/message';

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val) => val
          && val.toString().length >= 3
          && val.toString().length <= 20,
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) => val
          && val.toString().length >= 6
          && val.toString().length <= 40,
      )
      .required('This field is required!'),
    password_confirmation: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) => val
          && val.toString().length >= 6
          && val.toString().length <= 40,
      )
      .required('This field is required!'),
  });

  const handleRegister = (formValue) => {
    const {
      username, email, password, password_confirmation,
    } = formValue;
    setSuccessful(false);

    dispatch(register({
      username, email, password, password_confirmation,
    }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div>
      <div>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div>
                  <label htmlFor="username">
                    Username
                    <Field name="username" type="text" />
                    <ErrorMessage
                      name="username"
                      component="div"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                  />
                </div>
                <div>
                  <label htmlFor="password_confirmation">Password Confirmation</label>
                  <Field
                    name="password_confirmation"
                    type="Password"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                  />
                </div>
                <div>
                  <button type="submit">Sign Up</button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {message && (
        <div>
          <div
            className={successful ? 'alert alert-success' : 'alert alert-danger'}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
