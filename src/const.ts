import { SortType, MapStartPosition } from './types';

const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const SortOptions: SortType[] = [
  {
    name: 'Popular',
    value: 'Popular'
  },
  {
    name: 'PriceToHigh',
    value: 'Price: low to high'
  },
  {
    name: 'PriceToLow',
    value: 'Price: high to low'
  },
  {
    name: 'TopRated',
    value: 'Top rated first'
  }
];

const mapStartPosition: MapStartPosition = {
  center: { lat: 52.3809553943508, lng: 4.8936781654840 },
  zoom: 10,
};

enum OfferListStyle {
  Main = 'MAIN',
  Nearby = 'NEARBY',
}

const URL_MARKER_DEFAULT = '/img/pin.svg';
const URL_MARKER_ACTIVE = '/img/pin-active.svg';

const enum CardType {
  Favorites = 'favorites',
  Cities = 'cities',
  NearPlaces = 'near-places',
}

const enum LoginStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export { CITIES_NAMES, SortOptions, CardType, LoginStatus, mapStartPosition, OfferListStyle, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE };
