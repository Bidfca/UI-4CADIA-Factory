import './styles.css';

function Input({ placeholder, children, type, onChange }) {
    return (
        <div className='input-container'>
            {children}
            <input type={type}
                placeholder={placeholder}
                onChange={({ target: { value } }) => onChange(value)} />
        </div>
    );
}

export default Input;