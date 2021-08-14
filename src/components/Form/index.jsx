import Logo from '../Logo';
import './styles.css';

function Form({ children }) {
    return (
        <div className='form-container'>
            <div className='form-section'>
                <div className='form-header'>
                    <Logo className={'logo'} />
                    <h2>Welcome to Open Banking.</h2>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Form;