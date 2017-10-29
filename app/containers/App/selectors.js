import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectAppDomain = () => (state) => state.get('app');
const makeSelectApp = () => createSelector(
  selectAppDomain(),
  (app) => app.toJS(),
);

const makeSelectAccount = () => createSelector(
  selectAppDomain(),
  (app) => app.get('account')
);

export {
  makeSelectLocation,
  makeSelectApp,
  makeSelectAccount,
};
