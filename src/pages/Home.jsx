import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Home</h1>

      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
