import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CounterView from './Counter';
import * as NavigationStateActions from '../navigation/NavigationReducer';
import * as CounterStateActions from '../counter/CounterReducer';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading'])
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      counterStateActions: bindActionCreators(CounterStateActions, dispatch)
    };
  }
)(CounterView);
