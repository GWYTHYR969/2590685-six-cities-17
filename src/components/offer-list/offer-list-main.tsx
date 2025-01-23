import { Offer } from '../../types';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import Sort from '../sort/sort';
import { MapStartPosition } from '../../types';

type OfferListMainProps = {
  offers: Offer[];
  mapStartPosition: MapStartPosition;
  activeOffer: Offer | null;
  changeHighlightCallback: (activeOffer: Offer | null) => void;
}


function OfferListMain({ offers, mapStartPosition, activeOffer, changeHighlightCallback }: OfferListMainProps): JSX.Element {
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <Sort/>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard offer={offer} key={offer.id} changeHighlightCallback={changeHighlightCallback} className="cities__card" />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map startPosition={mapStartPosition} offers={offers} activeOffer={activeOffer} className='cities__map'></Map>
      </div>
    </>
  );

}

export default OfferListMain;
