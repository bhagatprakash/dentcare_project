import React from "react";
import Treatment from "./treatment";
import AboutUs from "./about_us";
import ChooseUs from "./choose_us";
import Testmonials from "./testmonials";
import Consolation from "./consolation";
import Card from "./card";

function Index() {
  return (
    <div>
      {/* Banner Section */}
      <Card />
      {/* Treatment */}
      <Treatment />
      {/* AboutUs */}
      <AboutUs />
      {/* ChooseUs */}
      <ChooseUs />
      {/* Testmonials */}
      <Testmonials />
      {/* Consolation */}
      <Consolation />
    </div>
  );
}

export default Index;
