import LocationList from '../../components/location-list/location-list';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import { useAppSelector } from '../../hooks/use-app';
import { getSortedOffers } from '../../store/offer/offer-selectors';
import { OfferListStyle } from '../../const';

function Main(): JSX.Element {
  const offersList = useAppSelector(getSortedOffers);
  const hasOfferData = Object.keys(offersList).length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${hasOfferData ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList IsFavorites={false}/>
          </section>
        </div>
        <div className="cities">
          {hasOfferData ?
            <div className="cities__places-container container">
              <OfferList offers={offersList} offerListStyle={OfferListStyle.Main} />
            </div>
            :
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default Main;
