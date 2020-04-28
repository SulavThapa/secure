import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Landing from "../components/Pages/Landing";
import Verification from "../components/Pages/Verification";

const AppNavigator = createStackNavigator({
  Landing: { screen: Landing },
  Verification: {screen: Verification}
});

  export default createAppContainer(AppNavigator);