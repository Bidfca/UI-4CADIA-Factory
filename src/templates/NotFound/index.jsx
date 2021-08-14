import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.css';

function NotFound() {
  return (
    <div className='notfound-container'>
      <h1>Error 404</h1>
      <p>Page not found.</p>
      <Link to='/'><Button className='blue' label={'Go back to home'}></Button></Link>
    </div>
  );
}

export default NotFound;
