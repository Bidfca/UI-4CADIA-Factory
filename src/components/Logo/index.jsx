import logo from '../../assets/logo.png';

function Logo(props) {
    return (
        <img {...props} src={logo} alt="logo" />
    );
}

export default Logo;
