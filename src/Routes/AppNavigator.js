import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Landing from "../components/Landing";

const AppNavigator = createStackNavigator({
  Landing: { screen: Landing }
});

  export default createAppContainer(AppNavigator);