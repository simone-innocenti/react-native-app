import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../components/Login/login";
import Registration from "../components/Registration/Registration";

const config = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Accedi",
    },
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      title: "Registrati",
    },
  },
};
const AccessStack = createStackNavigator(config, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#000259",
    },
    headerTitleStyle: {
      color: "#FFF",
    },
    headerTintColor: "#FFF",
  },
});
export default createAppContainer(AccessStack);
