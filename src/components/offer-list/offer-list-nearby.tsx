import { OfferPreview } from '../../types';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import { OfferLocation } from '../../types';

type OfferListNearbyProps = {
  offers: OfferPreview[];
  mapStartPosition: OfferLocation;
  activeOffer: OfferPreview | null;
  changeHighlightCallback: (activeOffer: OfferPreview | null) => void;
}


function OfferListNearby({ offers, mapStartPosition, activeOffer, changeHighlightCallback }: OfferListNearbyProps): JSX.Element {
  return (

    <>
      {offers.length > 0 && <Map startPosition={mapStartPosition} offers={offers} activeOffer={activeOffer} className='offer__map'></Map>}
      <div className="container" >
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>

          <div className="near-places__list places__list">
            {offers.map((offer) => (
              <OfferCard offer={offer} key={offer.id} changeHighlightCallback={changeHighlightCallback} className="near-places__card" />
            ))}
          </div>
        </section >
      </div>
    </>
  );
}

export default OfferListNearby;
