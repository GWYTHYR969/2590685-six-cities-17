import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { getFavoriteOfferById } from '../../store/offer/offer-selectors';
import { getLoginStatus } from '../../store/user/user-selectors';
import { putFavoriteStatus } from '../../store/offer/offer-api-actions';
import { RoutePath } from '../../routes/const';
import { LoginStatus } from '../../const';

type FavoriteButtonProps = {
  className: 'offer' | 'place-card';
  offerId: string;
}

function FavoriteButton({className, offerId}: FavoriteButtonProps): JSX.Element {
  const iconWidth = className === 'offer' ? 31 : 18;
  const iconHeight = className === 'offer' ? 33 : 19;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);
  const isLogined = loginStatus === LoginStatus.Auth;
  const isFavorite = useAppSelector((state) => getFavoriteOfferById(state, offerId));

  const handleFavoriteClick = () => {
    if (isLogined) {
      dispatch(putFavoriteStatus({offerId, isFavorite}));
    } else {
      navigate(RoutePath.Login);
    }
  };

  return (
    <button
      className={`${className}__bookmark-button button ${isFavorite && isLogined ? `${className}__bookmark-button--active` : ''}`}
      type='button'
      onClick={handleFavoriteClick}
    >
      <svg className={`${className}__bookmark-icon`} width={iconWidth} height={iconHeight}>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{isFavorite && isLogined ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
