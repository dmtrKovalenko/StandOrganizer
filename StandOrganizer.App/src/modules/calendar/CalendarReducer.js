import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import moment from 'moment';
import Service from '../../types/Service';
import * as types from '../../constants/ActionTypes';

const reducer = handleActions({
  [types.SELECT_DATE]: (state, action) => {
    return state.set('selectedDate', action.payload);
  }
}, Immutable.fromJS({
    //use string to not store a large object in state
    //and allow errors, serilizing moment object to JSON
  selectedDate: moment().format(),
  services: [
    new Service(1, new Date('March 17, 2017 14:00:00'), new Date('March 17, 2017 16:00:00'), 'Софья', 'Дарья')
  ]
}));

export default reducer;
