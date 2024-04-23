import './header.css';

import { Link } from "react-router-dom";
import companyLogo from '../../assets/vet-logo.png';

const Header = () => {
  return (
    <div className="header-wrap">
      <Link to="/">
        <img className="header-logo" src={companyLogo}></img>
      </Link>
      <div className='header-nav'>
        <Link className="header-nav-item" to="/pets">Pets</Link>
        <Link className="header-nav-item" to="/medication">Medication</Link>
      </div>
    </div>
  )
}

export default Header