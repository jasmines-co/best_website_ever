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
    if(!values.amount) {
      errors.phone = 'Amount is required'
    }
    if(!values.address) {
      errors.phone = 'Address is required'
    }
    if(!values.ETH) {
      errors.phone = 'ETH is required'
    }
    if(!values.owner) {
      errors.phone = 'Owner is required'
    }
  
    return errors;
}

const INITIAL_VALUES = {name: '', username: '', password: '', country: '', phone: '', address: '', amount: '', ETH: '', owner: ''}

const AccountForm = (initialValues, onSumbit, Error) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (

        <Form>
        <h1 className="Account">Create An Account</h1>
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
          <label>Phone:</label>
          <Field className="form-control" type="number" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Address</label>
          <Field className="form-control" type="text" name="address" />
          <ErrorMessage name="address" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Amount</label>
          <Field className="form-control" type="text" name="amount" />
          <ErrorMessage name="amount" component="div" />
        </FormGroup>
        <FormGroup>
          <label>ETH</label>
          <Field className="form-control" type="text" name="ETH" />
          <ErrorMessage name="ETH" component="div" />
        </FormGroup>
        <FormGroup>
          <label>Owner</label>
          <Field className="form-control" type="text" name="owner" />
          <ErrorMessage name="owner" component="div" />
        </FormGroup>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AccountForm;

