import {createSelector} from 'reselect';

const getState = state => state;

export const getEmployees = createSelector(getState, state => state.employees);

export const getEmployee = uuid =>
  createSelector(
    getState,
    state => state.employees.filter(q => q.login.uuid === uuid)[0],
  );
