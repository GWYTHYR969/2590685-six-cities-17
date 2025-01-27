import { OfferPreview } from '../../types';
import { useState } from 'react';
import { OfferListStyle } from '../../const';
import OffersListMain from './offer-list-main';
import OffersListNearby from './offer-list-nearby';

type OfferListProps = {
  offers: OfferPreview[];
  offerListStyle: OfferListStyle;
}

function OfferList({ offers, offerListStyle }: OfferListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<OfferPreview | null>(null);
  function changeHighlightOfferCard(offer: OfferPreview | null): void {
    setActiveOffer(offer);
  }

  switch (offerListStyle) {
    case OfferListStyle.Main:
      return <OffersListMain offers={offers} mapStartPosition={offers[0].city.location} activeOffer={activeOffer} changeHighlightCallback={changeHighlightOfferCard} />;
    case OfferListStyle.Nearby:
      return <OffersListNearby offers={offers} mapStartPosition={offers[0].city.location} activeOffer={activeOffer} changeHighlightCallback={changeHighlightOfferCard} />;
  }

}

export default OfferList;
