import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/SearchPage';
import UpdatePage from '../pages/UpdatePage';
import RegisterPage from '../pages/RegisterPage';

import { createAppContainer, createStackNavigator } from "react-navigation";

const Routes = createAppContainer(

  createStackNavigator({
    Main: MainPage,
    Detail: DetailPage,
    Search: SearchPage,
    Update: UpdatePage,
    Register: RegisterPage,
  })
);

export default Routes;

export { default as capitalizeFirstLetter } from './capitalizeFirstLetter';
