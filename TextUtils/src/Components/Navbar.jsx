import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./About.jsx" onClick={(e) => { e.preventDefault(); props.toggleAbout(); }}>{props.about}</a>
                        </li>
                    </ul>
                    <button type="button" className={`btn btn-primary bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                        {props.btnText}
                        <div className="form-check form-switch d-inline-block ms-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired, 
    toggleMode: PropTypes.string.isRequired,
    toggleAbout: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
    
};

Navbar.defaultProps = {
    title: 'Set Title',
    about: 'About',
    mode: 'light', 
};

export default Navbar;
