import AppStack from '@src/routes/AppStack/AppStack';
import { store } from '@src/store';
import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
      <Toast topOffset={70} />
    </Provider>
  );
};

export default App;
