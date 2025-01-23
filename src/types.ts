type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type UserData = User & {
  email: string;
  token: string;
};

type HousingType = 'Apartament' | 'Room';

type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type OfferLocation = {
  lat: number;
  lng: number;
}


type OfferCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

type OfferСonvenience = 'Wi-Fi' | 'Washing machine' | 'Towels' |
  'Heating' | 'Coffee machine' | 'Baby seat' | 'Kitchen' | 'Dishwasher' | 'Cabel TV' | 'Fridge';

type OfferConveniences = Set<OfferСonvenience>;

type Review = {
  id: number;
  text: string;
  rating: number;
  date: Date;
}

type Offer = {
  id: number;
  city: OfferCity;
  title: string;
  price: number;
  rating: number;
  housingType: HousingType;
  isMarked: boolean;
  isPremium: boolean;
  location: OfferLocation;
  images: string[];
  titleImage: string;
  conveniences: OfferConveniences;
  roomsCount: number;
  maxAdult: number;
  nearbyOffersId: number[];
  host: OfferHost;
  text: string;
}

type SortType = {
  name: string;
  value: string;
};

type MapStartPosition = {
  center: OfferLocation;
  zoom: number;
}

export type { UserData, Offer, SortType, OfferCity, OfferСonvenience, OfferConveniences, Review, HousingType, MapStartPosition };
