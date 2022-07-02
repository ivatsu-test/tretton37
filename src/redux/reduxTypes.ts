import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import store, { rootReducer } from './store';

export type TAppDispatch = typeof store.dispatch;
export type TReduxState = ReturnType<typeof rootReducer>;
export type TDispatch = ThunkDispatch<TReduxState, any, AnyAction>;
