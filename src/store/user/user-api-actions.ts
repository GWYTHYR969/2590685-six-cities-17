import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types';
import { User } from '../../types';
import { ApiRoutes } from '../../const';
import { dropToken, saveToken } from '../../services/token';

const checkLoginStatus = createAsyncThunk<User, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/checkLoginStatus',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<User>(ApiRoutes.Login);
    return data;
  }
);

const loginAction = createAsyncThunk<User, { email: string; password: string }, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<User>(ApiRoutes.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    dropToken();
  }
);
export {
  checkLoginStatus,
  loginAction,
  logoutAction
};
