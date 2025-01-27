import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types';
import { sortCards } from '../../utils';
import { OfferPreview } from '../../types';
import { NameSpace } from '../../const';

const getCurrentFilter = (state: State) => state[NameSpace.Offer].currentSort;
const getOffers = (state: State) => state[NameSpace.Offer].offersList;
const getLoadingStatus = ((state: State) => state[NameSpace.Offer].isLoading);
const findCityOffers = (state: State): OfferPreview[] => getOffers(state).filter((offer) => offer.city.name === state[NameSpace.Offer].city);
const getOffer = ((state: State) => state[NameSpace.Offer].offerInfo);
const getNearbyOffers = ((state: State) => state[NameSpace.Offer].nearbyOffers);
const getComments = ((state: State) => state[NameSpace.Offer].comments);
const isError = ((state: State) => state[NameSpace.Offer].isError);
const getOfferId = ((state: State) => state[NameSpace.Offer].offerInfo?.id);
const getCurrentCity = ((state: State) => state[NameSpace.Offer].city);
const getSortingType = ((state: State) => state[NameSpace.Offer].currentSort);
const getFavoriteOffers = ((state: State) => state[NameSpace.Offer].favoriteOffers);
const getFavoriteOfferById = ((state: State, id: string) => state[NameSpace.Offer].favoriteOffers
  .findIndex((offer) => offer.id === id) !== -1);

const getSortedOffers = createSelector(
  [findCityOffers, getCurrentFilter],
  (offers, filter) => sortCards(offers, filter)
);

export {
  getCurrentFilter,
  getOffers,
  getLoadingStatus,
  findCityOffers,
  getOffer,
  getNearbyOffers,
  getComments,
  getOfferId,
  getCurrentCity,
  getSortingType,
  getFavoriteOffers,
  getFavoriteOfferById,
  getSortedOffers,
  isError
};
