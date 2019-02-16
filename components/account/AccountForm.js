// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';

const validateInputs = (validate) => {
    let errors = {};
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

const AccountForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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

export default AccountForm;

































// import React from 'react';

// export default class AccountForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {name: '', username: '', password: '', country: '', phoneNumber: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleChangeUsername = this.handleChangeUsername.bind(this);
//       this.handleChangePassword = this.handleChangePassword.bind(this);
//       this.handleChangeCountry = this.handleChangeCountry.bind(this);
//       this.handleChangePhone = this.handleChangePhone.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({name: event.target.value});
//     }

//     handleChangeUsername(event) {
//         this.setState({username: event.target.value});
//       }

//     handleChangePassword(event) {
//         this.setState({password: event.target.value});
//     }

//     handleChangeCountry(event) {
//         this.setState({country: event.target.value});
//     }

//     handleChangePhone(event) {
//         this.setState({phone: event.target.value});
//       }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.name + " " + this.state.username + " " + this.state.password + " " + this.state.country + " " + this.state.phone);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Username:
//             <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
//           </label>
//           <label>
//             Password:
//             <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
//           </label>
//           <label>
//             Country Code:
//             <input type="text" value={this.state.country} onChange={this.handleChangeCountry} />
//           </label>
//           <label>
//             Phone Number:
//             <input type="text" value={this.state.phone} onChange={this.handleChangePhone} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }