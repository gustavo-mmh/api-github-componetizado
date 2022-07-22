import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";
import CssBaseline from "./global/CssBaseLine";
import { ResetCSS } from "./global/resetCSS";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <CssBaseline />
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
