import React from "react";
import Header from "../Header/Header";
import IntroSection from "../IntroSection/IntroSection";
import Skills from "../Skills/Skills";
import Milestones from "../Timeline/Timeline";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <IntroSection />
      <Skills />
      <Milestones />
      <Footer />
    </div>
  );
}

export default Home;
