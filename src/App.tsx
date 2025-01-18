import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store/ConfigureStore";

import MainRoutes from "./routes";
import persistStore from "redux-persist/es/persistStore";
import { ThemeSwitcher } from "./lib/use-config";
import "./i18n/config";
const persistStoreData = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStoreData}>
        <ThemeSwitcher />
        <MainRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
