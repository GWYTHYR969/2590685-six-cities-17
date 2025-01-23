import { Offer, OfferСonvenience } from '../types';

export const mockOffers: Offer[] = [
  {
    id: 1,
    city: 'Brussels',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    rating: 4.8,
    housingType: 'Apartament',
    isMarked: false,
    isPremium: true,
    location: { lat: 52.3909553943508, lng: 4.85309666406198 },
    images: ['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/room.jpg','img/apartment-01.jpg'],
    titleImage: 'img/apartment-01.jpg',
    conveniences: new Set<OfferСonvenience>(['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']),
    roomsCount: 2,
    maxAdult: 4,
    nearbyOffersId: [21,31,41],

    host: {
      name: 'Oliver Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.'
  },
  {
    city: 'Cologne',
    id: 2,
    title: 'Wood and stone place',
    price: 80,
    rating: 4.8,
    housingType: 'Room',
    isMarked: true,
    isPremium: false,
    location: { lat: 52.3609553943508, lng: 4.85309666406198 },
    images: ['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/room.jpg','img/apartment-01.jpg'],
    titleImage: 'img/room.jpg',
    conveniences: new Set<OfferСonvenience>(['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']),
    roomsCount: 2,
    maxAdult: 4,
    host: {
      name: 'Oliver Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    nearbyOffersId: [1,2,4],
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.'
  },
  {
    id: 3,
    city: 'Dusseldorf',
    title: 'Canal View Prinsengracht',
    price: 132,
    rating: 4.8,
    housingType: 'Apartament',
    isMarked: false,
    isPremium: false,
    location: { lat: 52.3909553943508, lng: 4.929309666406198 },
    images: ['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/room.jpg','img/apartment-01.jpg'],
    titleImage: 'img/apartment-02.jpg',
    conveniences: new Set<OfferСonvenience>(['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']),
    roomsCount: 2,
    maxAdult: 4,
    host: {
      name: 'Oliver Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    nearbyOffersId: [1,2,3],
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.'
  },
  {
    id: 4,
    //city: 'Hamburg',
    city: 'Paris',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    rating: 5,
    housingType: 'Apartament',
    isMarked: true,
    isPremium: true,
    location: { lat: 52.3809553943508, lng: 4.939309666406198 },
    images: ['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/room.jpg','img/apartment-01.jpg'],
    titleImage: 'img/apartment-03.jpg',
    conveniences: new Set<OfferСonvenience>(['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']),
    roomsCount: 2,
    maxAdult: 4,
    host: {
      name: 'Oliver Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    nearbyOffersId: [1,3,4],
  },
  {
    id: 5,
    city: 'Paris',
    title: 'Wood and stone place',
    price: 80,
    rating: 4.8,
    housingType: 'Room',
    isMarked: true,
    isPremium: false,
    location: { lat: 0, lng: 0 },
    images: ['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/room.jpg','img/apartment-01.jpg'],
    titleImage: 'img/apartment-03.jpg',
    conveniences: new Set<OfferСonvenience>(['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']),
    roomsCount: 2,
    maxAdult: 4,
    host: {
      name: 'Oliver Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    nearbyOffersId: [2,3,4],
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.'
  },
];

