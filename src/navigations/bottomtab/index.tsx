import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../types/types";
import Home from "../../screens/main/Home";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Movies from "../../screens/main/Movies";
import TvShows from "../../screens/main/TvShows";
import Detail from "../../screens/main/Detail";
import Profile from "../../screens/main/Profile";
const MyTabs = () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerTitleAlign: 'center'
            }}
        >
            <Tab.Screen
                name={"Home" as never}
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "home-variant" : "home-variant-outline"}
                            size={size || 24}
                            color={color || "black"}
                        />
                    ),
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name={"Movies" as never}
                component={Movies}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "play-circle" : "play-circle-outline"}
                            size={size || 24}
                            color={color || "black"}
                        />
                    ),
                    tabBarLabel: 'Movies'
                }}
            />
            <Tab.Screen
                name={"TvShows" as never}
                component={TvShows}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "motion-play" : "motion-play-outline"}
                            size={size || 24}
                            color={color || "black"}
                        />
                    ),
                    tabBarLabel: 'TvShows'
                }}
            />
            <Tab.Screen
                name={"Profile" as never}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "account" : "account-outline"}
                            size={size || 24}
                            color={color || "black"}
                        />
                    ),
                    tabBarLabel: 'Profile'
                }}
            />
            <Tab.Screen
                name={"Detail" as never}
                component={Detail}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "clipboard-text" : "clipboard-text-outline"}
                            size={size || 24}
                            color={color || "black"}
                        />
                    ),
                    tabBarLabel: 'Detail'
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;