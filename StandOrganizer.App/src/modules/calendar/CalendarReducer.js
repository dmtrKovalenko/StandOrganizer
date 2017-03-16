import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import * as types from '../../constants/ActionTypes';

const reducer = handleActions({
    [types.SELECT_DATE] : (state, action) => {
        return state.set('selectedDate', action.payload)
    }
}, Immutable.fromJS({
    selectedDate : new Date()
}))

export default reducer;