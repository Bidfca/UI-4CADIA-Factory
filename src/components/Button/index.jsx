import './styles.css';

function Button(props) {
    const { label } = props;
    return (
        <div className='button-container'>
            <button {...props}>{label}</button>
        </div> 
    );
}

export default Button;