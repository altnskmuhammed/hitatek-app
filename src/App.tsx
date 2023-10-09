import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;
