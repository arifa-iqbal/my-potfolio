import { StrictMode } from 'react'

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import "./index.css"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
