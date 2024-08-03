import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Colors
import {Colors} from '../../constants/Colors';

// Theme Context
import {ThemeContext} from '../context/ThemeContext';

// Pages
import HomePage from '../components/pages/HomePage';

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

// Components
import createTabScreen from '../components/molecules/TabScreen';

export type BottomTabsParamList = {
  Home: undefined;
  Transfer: undefined;
  Beneficiaries: undefined;
  ATMs: undefined;
  AirPay: undefined;
};

export const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <View
      style={[{backgroundColor: activeColors.MistyLavender}, styles.container]}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [
            styles.tabBarContainer,
            {
              shadowColor: activeColors.MidnightBlack,
              backgroundColor: activeColors.PureWhite,
            },
          ],
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        {createTabScreen({
          name: 'Home',
          component: HomePage,
          iconComponent: FontAwesome5Icon,
          iconName: 'home',
          text: 'Home',
        })()}
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 8,
    paddingHorizontal: 5,
  },
});
