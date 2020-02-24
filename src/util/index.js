import HomePage from "../pages/HomePage";
import CurriculumPage from "../pages/CurriculumPage";

import { createAppContainer, createStackNavigator } from "react-navigation";

const Routes = createAppContainer(

  createStackNavigator({
    Main: HomePage,
    Curriculum: CurriculumPage,
  })
);

export default Routes;

export { default as capitalizeFirstLetter } from './capitalizeFirstLetter';
