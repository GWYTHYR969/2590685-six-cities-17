import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, SortBy } from '../../const';
import { Offer, Comment, SotringType, OfferCity, OfferPreview } from '../../types';
import {
  fetchOffers,
  fetchOfferComments,
  fetchOfferInfo,
  fetchOfferNearby,
  putOfferComment,
  fetchFavoriteOffers,
  putFavoriteStatus
} from './offer-api-actions';
import { toast } from 'react-toastify';

type offerData = {
  offersList: OfferPreview[];
  offerInfo: Offer | null;
  city: OfferCity;
  currentSort: SotringType;
  offerError: boolean;
  nearbyOffers: OfferPreview[];
  comments: Comment[];
  favoriteOffers: OfferPreview[];
  isError: boolean;
  isLoading: boolean;
}

const initialState: offerData = {
  offersList: [],
  isLoading: false,
  isError: false,
  city: DEFAULT_CITY,
  currentSort: SortBy.Popular,
  offerInfo: null,
  offerError: false,
  nearbyOffers: [],
  comments: [],
  favoriteOffers: [],
};

export const offerDataSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<OfferCity>) => {
      state.city = action.payload;
      state.currentSort = initialState.currentSort;
    },
    changeSorting: (state, action: PayloadAction<SotringType>) => {
      state.currentSort = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offersList = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        toast.warn('Error while loading offers');
      })
      .addCase(fetchOfferInfo.fulfilled, (state, action) => {
        state.offerInfo = action.payload;
        state.offerError = false;
      })
      .addCase(fetchOfferInfo.rejected, (state) => {
        state.offerInfo = null;
        state.offerError = true;
        toast.warn('Error while loading offer information');
      })
      .addCase(fetchOfferNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(putOfferComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isError = true;
      })
      .addCase(putFavoriteStatus.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        toast.warn('Error while uploading offers status');
      })
      .addCase(putFavoriteStatus.fulfilled,(state, action) => {
        state.isLoading = false;
        if(action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          const favoriteIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
          state.favoriteOffers.splice(favoriteIndex, 1);
        }
      });
  }
});

export const { changeCity, changeSorting } = offerDataSlice.actions;
