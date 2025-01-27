import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app';
import { getUser } from '../../store/user/user-selectors';
import NavLogged from './nav-logged';
import NavNotLogged from './nav-not-logged';

function Header(): JSX.Element {
  const user = useAppSelector(getUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
          <div className="header__left">
          </div>
          <nav className="header__nav">
            {user ? <NavLogged user={user} /> : <NavNotLogged />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
