import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Redirect } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import './styles.css';
import joi from 'joi';
import { useState } from "react";

function SignUp() {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postSignUp = async () => {
    const { error: joiError } = joi.object({
      name: joi.string().required(),
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().min(6).required(),
    }).validate({ name, email, password });

    if (joiError) return setError(joiError.message);

    const response = await fetch('http://localhost:3333/signup', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
      .then((data) => data.json());

    if (response.token) {
      localStorage.setItem('token', response.token);
      setShouldRedirect(true);
    } else {
      setError(response.message);
    }
  }

  if (shouldRedirect) return <Redirect to='/dashboard' />

  return (
    <Form>
      <div className='signup-form'>
        <span style={{ visibility: error ? 'visible' : 'hidden' }}>{error || 'no error'}</span>
        <Input
          placeholder={'Name'}
          type={'text'}
          value={name}
          onChange={setName}><FaUser /></Input>
        <Input
          placeholder={'E-mail'}
          type={'text'}
          value={email}
          onChange={setEmail}><MdEmail /></Input>
        <Input
          placeholder={'Password'}
          type={'password'}
          value={password}
          onChange={setPassword}><RiLockPasswordFill /></Input>
        <Link to='login'><p>Already have an account?</p></Link>
        <button onClick={() => postSignUp()}>Sign Up</button>
      </div>
    </Form>
  );
}

export default SignUp;
