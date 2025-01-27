import { NameSpace } from '../../const';
import { checkLoginStatus, loginAction, logoutAction } from './user-api-actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginStatus } from '../../const';
import { User } from '../../types';

type InitialState = {
  loginStatus: LoginStatus;
  user: User | null;
}

const initialState: InitialState = {
  loginStatus: LoginStatus.Unknown,
  user: null,
};

export const userDataSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action:PayloadAction<{status: LoginStatus}>) => {
      const { status } = action.payload;
      state.loginStatus = status;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkLoginStatus.fulfilled, (state, action) => {
        state.loginStatus = LoginStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLoginStatus.rejected, (state) => {
        state.loginStatus = LoginStatus.NoAuth;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginStatus = LoginStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loginStatus = LoginStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.loginStatus = LoginStatus.NoAuth;
        state.user = null;
      });
  }
});

export const { requireAuthorization } = userDataSlice.actions;
