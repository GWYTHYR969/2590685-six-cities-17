type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type UserData = User & {
  email: string;
  token: string;
};

export type HousingType = 'Apartament' | 'Room';

export type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferLocation = {
  lat: number;
  lon: number;
}


export type OfferCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type OfferСonvenience = 'Wi-Fi' | 'Washing machine' | 'Towels' |
  'Heating' | 'Coffee machine' | 'Baby seat' | 'Kitchen' | 'Dishwasher' | 'Cabel TV' | 'Fridge';

export type OfferConveniences = Set<OfferСonvenience>;

export type Review = {
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
  host: OfferHost;
  text: string;
}

type SortType = {
  name: string;
  value: string;
};

export type {UserData, Offer, SortType};
