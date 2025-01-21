import { Offer, OfferCity } from '../../types';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

type FavoritesPageProps = {
  offers: Offer[];
}

function Favorites({ offers }: FavoritesPageProps): JSX.Element {
  const hasOfferData = Object.keys(offers).length > 0;
  const markedOffers: Offer[] = offers.filter((offer: Offer) => offer.isMarked);
  markedOffers.sort((a: Offer, b: Offer) => Number(b.isPremium) - Number(a.isPremium));

  type CategorizedOffers = {
    [cityName in OfferCity]?: Offer[];
  };

  const categorizedOffers: CategorizedOffers = {};

  markedOffers.forEach((offer: Offer) => {
    const offerCity: OfferCity = offer.city;
    if (categorizedOffers[offerCity] === undefined) {
      categorizedOffers[offerCity] = [];
    }
    if (offer.isMarked) {
      categorizedOffers[offerCity].push(offer);
    }
  });


  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${hasOfferData ? '' : 'page__main--favorites-empty'}`}>
        {hasOfferData ?
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(categorizedOffers).map(([cityName, offersInCity]: [string, Offer[]]) => (
                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersInCity.map((offer: Offer) => (
                        <FavoriteCard offer={offer} key={offer.id} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          :
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>}
      </main>
      <Footer />
    </div>
  );
}


export default Favorites;
