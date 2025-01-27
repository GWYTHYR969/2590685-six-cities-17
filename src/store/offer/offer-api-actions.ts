import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types';
import { Offer, OfferPreview, Comment } from '../../types';
import { ApiRoutes } from '../../const';

const fetchOffers = createAsyncThunk<OfferPreview[], undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchMany',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(ApiRoutes.Offers);
    return data;
  }
);

const fetchOfferInfo = createAsyncThunk<Offer, string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchOne',
  async(id, {extra: api}) => {
    const {data} = await api.get<Offer>(`${ApiRoutes.Offers}/${id}`);
    return data;
  }
);

const fetchOfferNearby = createAsyncThunk<OfferPreview[], string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchNearby',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(`${ApiRoutes.Offers}/${id}/nearby`);
    return data;
  }
);

const fetchOfferComments = createAsyncThunk<Comment[], string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${ApiRoutes.Comments}/${id}`);
    return data;
  }
);

const putOfferComment = createAsyncThunk<Comment, { offerId: string; text: string; rating: number }, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/putOfferComment',
  async ({ offerId, text, rating }, { extra: api }) => {
    const {data} = await api.post<Comment>(`${ApiRoutes.Comments}/${offerId}`, { comment: text, rating: rating });
    return data;
  }
);

const fetchFavoriteOffers = createAsyncThunk<OfferPreview[], undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchFavorite',
  async (_arg, {extra : api}) => {
    const {data} = await api.get<OfferPreview[]>(`${ApiRoutes.Favorite}`);
    return data;
  }
);

const putFavoriteStatus = createAsyncThunk<OfferPreview, {offerId: string; isFavorite: boolean}, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/putFavoriteStatus',
  async ({offerId, isFavorite}, {extra: api}) => {
    const updatedStatus = Number(!isFavorite);
    const {data} = await api.post<OfferPreview>((`${ApiRoutes.Favorite}/${offerId}/${updatedStatus}`));
    return data;
  }
);

export {
  putFavoriteStatus,
  fetchOfferComments,
  fetchOfferNearby,
  fetchOffers,
  fetchOfferInfo,
  fetchFavoriteOffers,
  putOfferComment
};
