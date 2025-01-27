import { RoutePath } from './routes/const';
import { OfferPreview } from './types';

const ratingToPercent = (rating: number, base: number = 5.0): number => rating * 100.0 / base;

const getLinkToOffer = (id: string): string => RoutePath.Offer.replace(':id', id.toString());

const sortCards = (offers: OfferPreview[], sortingType:string): OfferPreview[] => {
  switch (sortingType) {
    case sortingType = 'Price: low to high':
      offers = [...offers].sort((cardA, cardB) => cardA.price - cardB.price);
      break;
    case sortingType = 'Price: high to low':
      offers = [...offers].sort((cardA, cardB) => cardB.price - cardA.price);
      break;
    case sortingType = 'Top rated first':
      offers = [...offers].sort((cardA, cardB) => cardB.rating - cardA.rating);
      break;
    case sortingType = 'Popular':
      return [...offers];
  }

  return offers;
};

export {
  ratingToPercent,
  getLinkToOffer,
  sortCards
};
