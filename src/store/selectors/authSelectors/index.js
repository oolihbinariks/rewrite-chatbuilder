import { createSelector } from 'reselect';
export const getStateAuth = (state) => (state.auth)

export const getAuthToken = createSelector(
  getStateAuth,
  (auth) =>auth.token,
);
