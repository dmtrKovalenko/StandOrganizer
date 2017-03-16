import { createAction  } from 'redux-actions';
import * as types from '../../constants/ActionTypes';

export const selectDate = createAction(types.SELECT_DATE, date => date)