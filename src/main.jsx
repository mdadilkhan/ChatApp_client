import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store.jsx";
import App from "./App.jsx";
import Error from "./components/CustomErrorBoundry.jsx/Error.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-0zwj131ll4r485fc.us.auth0.com"
          clientId="LiRfFT1SFdxSFrvXgA5XzsO9UcvayKAo"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
