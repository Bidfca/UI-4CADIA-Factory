import Input from '../../components/Input';
import './styles.css'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link, Redirect } from 'react-router-dom';
import Form from '../../components/Form';
import { useState } from 'react';

function Login() {
  const [error, setError] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    const response = await fetch('http://localhost:3333/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((data) => data.json());

    if(response.token) {
      localStorage.setItem('token', response.token);
      setShouldRedirect(true);
    } else {
      setError('Invalid e-mail or password');
    }
  }

  if(shouldRedirect) return <Redirect to='/dashboard'/>

  return (
    <Form>
      <div className='login-form'>
        <span style={{ visibility: error ? 'visible' : 'hidden' }}>{error || 'no error'}</span>
        <Input placeholder={'E-mail'}
          type={'text'}
          value={email}
          onChange={setEmail}><MdEmail /></Input>
        <Input
          placeholder={'Password'}
          type={'password'}
          value={password}
          onChange={setPassword}><RiLockPasswordFill /></Input>
        <Link to='signup'><p>Don't have an account?</p></Link>
        <button onClick={() => postLogin()}>Log In</button>
      </div>
    </Form>
  );
}

export default Login;
