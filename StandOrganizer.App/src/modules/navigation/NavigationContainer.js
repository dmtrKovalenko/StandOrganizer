import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pushRoute, popRoute, switchTab, navigationCompleted} from './NavigationReducer';
import NavigationView from './Navigation';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS()
  }),
  dispatch => {
    return {
      switchTab: bindActionCreators(switchTab, dispatch),
      pushRoute: bindActionCreators(pushRoute, dispatch),
      onNavigateBack: bindActionCreators(popRoute, dispatch),
      onNavigateCompleted() {
        dispatch(navigationCompleted());
      }
    };
  }
)(NavigationView);
