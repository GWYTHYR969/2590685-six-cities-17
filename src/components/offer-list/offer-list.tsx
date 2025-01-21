import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types';
import { useState } from 'react';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const changeHighlightOfferCard = (offerId : number | null): void => {
    setActiveOfferCardId(offerId);
  };

  return (
    <>
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} callback={changeHighlightOfferCard} />
      ))}
    </>
  );
}

export default OfferList;
