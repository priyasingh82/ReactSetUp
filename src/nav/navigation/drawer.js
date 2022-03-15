import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "react-navigation";
import { HomeStackScreen, LoginStackScreen } from "../stacks/stackScreen";



const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStackScreen,
    },
    Login : {
        screen : LoginStackScreen,
    }

});
export default createAppContainer(RootDrawerNavigator);