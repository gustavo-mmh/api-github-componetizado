import React from "react";

import { createRoot } from 'react-dom/client';
import Providers from "./providers";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>);

