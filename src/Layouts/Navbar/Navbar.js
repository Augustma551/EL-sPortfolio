import './Navbar.scss';
import About from '../About/About';
import { Link } from 'react-router-dom';



const Navbar =() =>{
    return(
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top  ">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-3 text-decoration-none" >
                <Link to="/Home" style={{ textDecoration: 'none' }}>EL's Sandbox</Link>
                    </a>
                    <div className="navbar-nav d-flex flex-row-reverse me-3">
                        <a className="nav-link text-light"  href="https://www.linkedin.com/in/cherellenio/" >Contact</a>
                        <a className="nav-link text-light "><Link to="/"  href="#Work" style={{ textDecoration: 'none' }}>Work</Link></a>
                        <a className="nav-link text-light" ><Link to="/About" style={{ textDecoration: 'none' }}>About</Link></a>
                    </div>
         </div>
        </nav>
     </div>

    )
}

export default Navbar;