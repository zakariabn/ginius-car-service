import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import{useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');


  function handelFormSubmit(e) {
    e.preventDefault();
    /* const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;  */

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value; 
    if (password !== confirmPassword) {
      console.log("Password did't match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate('/home');
  }


  return (
    <div className="container w-50 mt-5">
      <h2 className="text-center text-primary">Please Register</h2>
      <div className="">
        <Form onSubmit={handelFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" ref={emailRef}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" ref={passwordRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='confirm_password' placeholder="Password" ref={confirmPasswordRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>Already have an Account ? <Link to='/login' className="text-decoration-none ms-1">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;