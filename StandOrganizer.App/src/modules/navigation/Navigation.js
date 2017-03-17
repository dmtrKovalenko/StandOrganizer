import React, {PropTypes, Component} from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Navbar from '../../components/Navbar/Navbar';
import AppRouter from '../AppRouter';
import {DrawerLayoutAndroid, NavigationExperimental, View, StyleSheet} from 'react-native';

const {
  CardStack: NavigationCardStack,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

class NavigationView extends Component {
  renderHeader = (sceneProps) => {
    const title = this.props.navigationState.dynamicTitle || sceneProps.scene.route.title;

    return (
      <Navbar title={title} sticky
        leftButtonPress={() => this.drawerRef.openDrawer()}/>
    );
  };

  renderScene = (sceneProps) => {
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
          ref={node => (this.drawerRef = node)}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => <Drawer tabs={tabs} switchTab={this.props.switchTab} />}>

           <NavigationCardStack
              key={'stack_' + tabKey}
              onNavigateBack={this.props.onNavigateBack}
              navigationState={scenes}
              renderHeader={this.renderHeader}
              renderScene={this.renderScene} />

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
    HomeTab: NavigationPropTypes.navigationState.isRequired
  })

};

export default NavigationView;
