import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { useEffect } from 'react';

import NotFound from '../not-found/not-found';
import OfferList from '../../components/offer-list/offer-list';
import OfferReviewsList from '../../components/offer-review/offer-review-list';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import Loader from '../../components/loader/loader';

import { useAppSelector, useAppDispatch } from '../../hooks/use-app';
import { fetchOfferNearby, fetchOfferInfo } from '../../store/offer/offer-api-actions';
import { isError, getOffer, getNearbyOffers } from '../../store/offer/offer-selectors';
import { ratingToPercent } from '../../utils';
import { OfferListStyle } from '../../const';
import { Offer as OfferType, OfferPreview} from '../../types';


function Offer(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const hasError = useAppSelector(isError);

  let offer: OfferType | null | undefined = null;
  useEffect(() => {
    if (id) {
      dispatch(fetchOfferInfo(id));
    }
  }, [dispatch, id]);
  offer = useAppSelector(getOffer);

  let offersNearby: OfferPreview[] = [];
  useEffect(() => {
    if (id) {
      dispatch(fetchOfferNearby(id));
    }
  }, [dispatch, id]);
  offersNearby = useAppSelector(getNearbyOffers);

  if (id === undefined) {
    return (<NotFound />);
  }

  if (!offer) {
    return <Loader />;
  }


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className={cn('offer__bookmark-button', 'button', { 'offer__bookmark-button--active': offer.isFavorite })} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingToPercent(offer.rating).toString()}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} {offer.bedrooms === 0 ? 'Bedroom' : 'Bedrooms'}</li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {offer.goods.length > 0 && (
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {Array.from(offer.goods).map((good) => (
                      <li className="offer__inside-item" key={Math.random()}>{good}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={`${offer.host.avatarUrl}`}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <OfferReviewsList offerId={offer.id} />
            </div>
          </div>
        </section>
        {offersNearby.length > 0 && <OfferList offers={offersNearby} offerListStyle={OfferListStyle.Nearby} />}
      </main >
    </div >
  );
}

export default Offer;
