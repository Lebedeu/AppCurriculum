import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainPage from "./src/pages/MainPage";
import DetailPage from "./src/pages/DetailPage";
import SearchPage from "./src/pages/SearchPage";
import UpdatePage from "./src/pages/UpdatePage";
import RegisterPage from "./src/pages/RegisterPage";

const AppNavigator = createStackNavigator({

  Main: {
    screen: MainPage,
    navigationOptions: {
      title: 'Currículos',
    }
  },
  Detail: {
    screen: DetailPage,
    navigationOptions: {
      title: 'Infromações',
    }
  },
  Search: {
    screen: SearchPage,
    navigationOptions: {
      title: 'Pesquisa',
    }
  },
  Update: {
    screen: UpdatePage,
    navigationOptions: {
      title: 'Atualizar',
    }
  },
  Register: {
    screen: RegisterPage,
    navigationOptions: {
      title: 'Registrar',
    }
  },
}, {
  defaultNavigationOptions: {
    title: "Curriculum",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#4a42f7',
      borderBottomWidth: 1,
      borderBottomColor: 'c5c5c5',

    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    }
  }
});
export default createAppContainer(AppNavigator);
