import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloclient/apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  /*<React.StrictMode>
  </React.StrictMode>*/
);
