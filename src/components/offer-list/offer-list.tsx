import { Offer } from '../../types';
import { useState } from 'react';
import { OfferListStyle } from '../../const';
import { MapStartPosition } from '../../types';
import OffersListMain from './offer-list-main';
import OffersListNearby from './offer-list-nearby';

type OfferListProps = {
  offers: Offer[];
  mapStartPosition: MapStartPosition;
  offerListStyle: OfferListStyle;
}

function OfferList({ offers, mapStartPosition, offerListStyle }: OfferListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  function changeHighlightOfferCard(offer: Offer | null): void {
    setActiveOffer(offer);
  }

  switch (offerListStyle) {
    case OfferListStyle.Main:
      return <OffersListMain offers={offers} mapStartPosition={mapStartPosition} activeOffer={activeOffer} changeHighlightCallback={changeHighlightOfferCard} />;
    case OfferListStyle.Nearby:
      return <OffersListNearby offers={offers} mapStartPosition={mapStartPosition} activeOffer={activeOffer} changeHighlightCallback={changeHighlightOfferCard} />;
  }

}

export default OfferList;
