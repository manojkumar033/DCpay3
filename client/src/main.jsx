import React from "react";
import ReactDOM from 'react-dom';

import App from "./App.jsx";
import { TransactionsProvider } from "./context/TransactionContext.jsx";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
 
export default ReactDOM;