/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { login } from '../slices/auth';
import { clearMessage } from '../slices/message';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        setLoading('success');
        navigate('/profile');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

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
          onSubmit={handleLogin}
        >
          <Form>
            <div>
              <label htmlFor="username">
                Username
              </label>
              <Field name="username" type="text" />

              <ErrorMessage
                name="username"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="Password" />
              <ErrorMessage
                name="password"
                component="div"
              />
            </div>

            <div>
              <button type="submit" disabled={loading}>
                {loading && (
                  <span />
                )}
                <span>Login</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
        <div>
          <div role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
