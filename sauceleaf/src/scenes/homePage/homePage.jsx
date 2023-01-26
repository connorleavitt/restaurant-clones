import React from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Hours from "../../components/Hours";
import Specials from "../../components/Specials";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Hours />
      <Specials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
