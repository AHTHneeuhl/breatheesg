import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reduxStore from "./redux/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
