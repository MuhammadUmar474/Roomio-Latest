import React from 'react';

import TabBar from './src/navigation/RouteNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {STORE, PERSISTOR} from './src/store/storeConfig';

import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={STORE}>
      <PersistGate persistor={PERSISTOR} loading={null}>
        <TabBar />
      </PersistGate>
    </Provider>
  );
};

export default App;
