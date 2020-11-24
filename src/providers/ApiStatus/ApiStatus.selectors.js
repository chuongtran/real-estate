import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => _(actions)
  .some((action) => _.get(state, `apiStatus.loading.${action}`));

export const createInitSelector = (actions) => (state) => actions
  .every((action) => state.apiStatus.init[action]);

export const createErrorMessageSelector = (actions) => (state) => _(actions)
  .map((action) => _.get(state, `apiStatus.errors.${action}`))
  .compact()
  .first() || '';
