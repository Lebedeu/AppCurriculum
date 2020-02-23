import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './src/pages/HomePage'

const AppNavigator = createStackNavigator({
  'Main': {
    screen: HomePage,
    navigationOptions:{
      title: 'Bem Vindo',
    }
  },
  'Curriculum': {
    screen: CurriculumPage
  }
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

/*
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailPage from './src/pages/PeopleDatailPage';

import { capitalizeFirstLetter } from "./src/util";

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return ({
        title: peopleName,
        headerTitleAlign:'left',
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTitleAlign:'center',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
 */
