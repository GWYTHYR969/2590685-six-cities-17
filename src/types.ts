import { ОfferCities } from './const';

type Token = string

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type User = Host & {
  email: string;
  token: string;
}

type HousingType = 'Apartament' | 'Room';

type City = {
  name: string;
  location: OfferLocation;
}

type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type SotringType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

type OfferCity = typeof ОfferCities[number];

type OfferСonvenience = 'Wi-Fi' | 'Washing machine' | 'Towels' | 'Heating' | 'Coffee machine' | 'Baby seat' | 'Kitchen' | 'Dishwasher' | 'Cabel TV' | 'Fridge';
type OfferConveniences = OfferСonvenience[];

type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: OfferCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

type Comment = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}


type MapStartPosition = {
  center: OfferLocation;
  zoom: number;
}

type ErrorType = {
  type: string;
  message: string;
}

type CategorizedOffers = {
  [cityName in OfferCity]?: OfferPreview[];
};

type CitiesMapStartPosition = {
  [K in typeof ОfferCities[number]]: MapStartPosition
};

export type {
  User,
  Offer,
  OfferCity,
  OfferСonvenience,
  OfferConveniences,
  Comment,
  HousingType,
  MapStartPosition,
  ErrorType,
  OfferPreview,
  CitiesMapStartPosition,
  CategorizedOffers,
  Token,
  SotringType,
  OfferLocation
};
