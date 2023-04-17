import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reduxStore from "./redux/store";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
          <ToastContainer
            position="top-right"
            hideProgressBar
            closeOnClick={false}
          />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
