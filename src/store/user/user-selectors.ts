import { LoginStatus, NameSpace } from '../../const';
import { State } from '../types';
import { User } from '../../types';

export const getLoginStatus = (state: State): LoginStatus => state[NameSpace.User].loginStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
