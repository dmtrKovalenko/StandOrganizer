import React, {PropTypes, Component} from 'react';
import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar/TabBar';
import Drawer from '../../components/Drawer/Drawer';
import {DrawerLayoutAndroid, NavigationExperimental, View, StyleSheet} from 'react-native';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;

class NavigationView extends Component {
  static displayName = 'NavigationView';

  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader = (sceneProps) => {
    return (
      <NavigationHeader
        {...sceneProps}
          onNavigateBack={this.props.onNavigateBack}
          renderTitleComponent={() => {
            return (
              <NavigationHeader.Title>
                {sceneProps.scene.route.title}
              </NavigationHeader.Title>
            );
          }}/>
    );
  };

  renderScene = (sceneProps) => {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
        { AppRouter(sceneProps) }
      </View>
    );
  };

  render() {
    const {tabs} = this.props.navigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = this.props.navigationState[tabKey];
 
    return (
       <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => <Drawer tabs={tabs} switchTab={this.props.switchTab} />}>
          
           <NavigationCardStack
              key={'stack_' + tabKey}
              onNavigateBack={this.props.onNavigateBack}
              navigationState={scenes}
              renderHeader={this.renderHeader}
              renderScene={this.renderScene}  />

        </DrawerLayoutAndroid>
     
    );
  }
}

const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1
  }
});

NavigationView.propTypes = {
  onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func,
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    navigationState: PropTypes.shape({
      tabs: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })).isRequired
      }).isRequired,
      HomeTab: NavigationPropTypes.navigationState.isRequired,
    }),

}

export default NavigationView;
