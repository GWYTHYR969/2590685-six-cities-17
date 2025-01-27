import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerDataSlice } from './offer/offer-data';
import { userDataSlice } from './user/user-data';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerDataSlice.reducer,
  [NameSpace.User]: userDataSlice.reducer,
});
