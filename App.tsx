/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigations/bottomtab';
import { StatusBar } from 'react-native';
import Themes from './src/appStyles/Themes';

enableScreens();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Themes.LIGHT.STATUS_BAR_COLOR}
        barStyle={Themes.LIGHT.STATUS_BAR_STYLE}
        translucent={false}
      />
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
