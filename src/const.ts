
const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const SortBy = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRatedList: 'Top rated first',
} as const;
enum OfferListStyle {
  Main = 'MAIN',
  Nearby = 'NEARBY',
}

const ОfferCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const DEFAULT_CITY = ОfferCities[0];

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

enum ApiRoutes {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

enum NameSpace {
  User = 'USER',
  Offer = 'OFFER',
}

export {
  CITIES_NAMES,
  SortBy,
  CardType,
  LoginStatus,
  OfferListStyle,
  URL_MARKER_DEFAULT,
  URL_MARKER_ACTIVE,
  ApiRoutes,
  NameSpace,
  ОfferCities,
  DEFAULT_CITY
};
