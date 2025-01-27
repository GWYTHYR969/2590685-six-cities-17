import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app';
import { logoutAction } from '../../store/user/user-api-actions';
import { RoutePath } from '../../routes/const';
import { getFavoriteOffers } from '../../store/offer/offer-selectors';

type NavLoggedProps = {
  user: User;
}

function NavLogged({ user }: NavLoggedProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favCardsQuantity = useAppSelector(getFavoriteOffers).length;

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logoutAction())
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          navigate(RoutePath.Index);
        }
      });
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={RoutePath.Favorites }>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{user.email}</span>
          <span className="header__favorite-count">{favCardsQuantity}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#"
          onClick={handleLogout}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default NavLogged;
