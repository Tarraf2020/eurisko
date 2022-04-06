import React from "react";
import Footer from "./components/layout/Footer";
import ScrollButton from "./components/layout/scrollButton";
import PrivateRoute from "./services/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <PrivateRoute />
        <ScrollButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
