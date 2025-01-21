import { useParams } from 'react-router-dom';

import NotFound from '../not-found/not-found';
import OfferList from '../../components/offer-list/offer-list';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Gallery from '../../components/gallery/gallery';

import { ratingToPercent } from '../../utils';
import { LoginStatus } from '../../const';
import { Offer as OfferType, OfferСonvenience } from '../../types';


type OfferPageProps = {
  offers: OfferType[];
  authorizationStatus: LoginStatus;

}
function Offer({ offers, authorizationStatus }: OfferPageProps): JSX.Element {
  const { id } = useParams();

  const offer = offers.find((iteration: OfferType) => iteration.id === Number(id));

  if (offer === undefined) {
    return (<NotFound />);
  }

  const offerConveniences: OfferСonvenience[] = Array.from(offer.conveniences);

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
                <button className={`offer__bookmark-button button${(offer.isMarked ? ' offer__bookmark-button--active' : '')}`} type="button">
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
                <li className="offer__feature offer__feature--entire">{offer.housingType}</li>
                {offer.housingType === 'Apartament' ? (
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.roomsCount} Bedrooms
                  </li>
                ) : ''}
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdult} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {offerConveniences.length > 0 ? (
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {Array.from(offerConveniences).map((convenience, key) => (
                      <li className="offer__inside-item" key={key}>{convenience}</li>
                    ))}
                  </ul>
                </div>
              ) : ''}
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
                  <p className="offer__text">{offer.text}</p>
                </div>
              </div>
              <OfferReviews authorizationStatus={authorizationStatus} />
            </div>
          </div>
          <Map type={'offer'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList offers={offers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
