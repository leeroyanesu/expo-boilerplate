import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Store from "./src/store";
import RootNavigation from "./src/routers";

enableScreens();

function App() {

  return (
      <Provider store={Store}>
          <RootNavigation />
      </Provider>
  );
}

export default App;