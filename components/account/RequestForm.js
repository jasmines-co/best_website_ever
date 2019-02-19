// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';

const validateInputs = (values) => {
    let errors = {};

    if(!values.name) {
      errors.title = 'Name is required'
    }

    if(!values.password) {
      errors.password = 'Password is required'
    }

    if(!values.country) {
      errors.country = 'Country code is required'
    }

    if(!values.phone) {
      errors.phone = 'Phone number is required'
    }
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
}

const INITIAL_VALUES = {name: '', username: '', password: '', country: '', phone: ''}

const RequestForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (

        <Form>
        <h1 className="Account">Create a Request</h1>
       <FormGroup>        
        <label>Name: </label>
          <Field className="form-control" type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </FormGroup>
        <FormGroup>
        <label>Username: </label>
          <Field className="form-control" type="text" name="username" />
          <ErrorMessage name="username" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Password: </label>
          <Field className="form-control" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Country Code:</label>
          <Field className="form-control" type="number" name="country" />
          <ErrorMessage name="country" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Phone Number</label>
          <Field className="form-control" type="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </FormGroup>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RequestForm;
