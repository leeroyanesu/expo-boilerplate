import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "@helpers/router";
import { useAppSelector } from "@store/index";
import useTheme from "@hooks/useTheme";
import Routes from "@utils/Routes";
import { View } from "react-native";
import Login from "@screens/Login";
import Home from "@screens/Home";

enableScreens();

const Stack = createStackNavigator();

function RootNavigation() {

  const isSignedIn = useAppSelector((s) => s.AppReducer?.isSignedIn);
  const userColorScheme = useAppSelector((s) => s?.AppReducer?.userColorScheme);
  const theme = useTheme();
  const isDarkTheme = userColorScheme === "dark";

  const navigationTheme = {
    ...DefaultTheme,
    dark: isDarkTheme,
    colors: {
      primary: theme.primary,
      background: theme.background,
      card: theme.card,
      text: theme.text,
      border: theme.border,
      notification: theme.notification,
    },
  };


  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName={Routes.Home}
          screenOptions={{ headerTintColor: theme.primary }}
        >
          <Stack.Screen
            name={Routes.Home}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.Login}
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;