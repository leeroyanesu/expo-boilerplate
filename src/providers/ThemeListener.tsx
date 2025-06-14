import React, { useEffect } from "react";
import { Appearance } from "react-native";
import { useDispatch } from "react-redux";
import { SetColorShceme } from "@helpers/redux/appSlice";

/**
 * Listens for changes in the device's color scheme and dispatches an action to update the app's theme accordingly.
 */
export default function ThemeListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleColorModeChange = (
      preferences: Appearance.AppearancePreferences
    ) => {
      dispatch(SetColorShceme(preferences?.colorScheme));
    };
  
    const subscription = Appearance.addChangeListener(handleColorModeChange);
  
    return () => {
      subscription.remove(); // cleanup
    };
  }, [dispatch]);
  

  return <></>;
}