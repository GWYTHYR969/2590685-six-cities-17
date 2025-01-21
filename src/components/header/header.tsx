import { userMock } from '../../mocks/user';
import { mockOffers } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../routes/const';


function Header(): JSX.Element {
  const isAuthed = Object.keys(userMock).length > 0;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={RoutePath.Index}>
              <img
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthed ?
                <>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${userMock.avatarUrl})` }}>
                      </div>
                      <span className="header__user-name user__name">{userMock.email}</span>
                      <span className="header__favorite-count">{mockOffers.length}</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
                :
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
