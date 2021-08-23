import { NavLink  } from 'react-router-dom';

function Header() {
    return (
    <div className="header root__section root__border">
     <ul className="menu">
      <li> <NavLink  to="/de" activeClassName="header__lang-link_active" className="header__lang-link " >De</NavLink></li>
      <li> <NavLink  to="/ru" activeClassName="header__lang-link_active" className="header__lang-link" target="_self" >Ru</NavLink ></li>
     </ul>
    </div>
    )}

export default Header;