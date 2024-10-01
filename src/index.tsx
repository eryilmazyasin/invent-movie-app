import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import ReactDOM from "react-dom/client";

import "@/styles/global.scss";

import App from "./App";
import { API_KEY, BASE_URL } from "./constants";

const queryClient = new QueryClient();

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.params["apikey"] = API_KEY;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  </React.StrictMode>
);
