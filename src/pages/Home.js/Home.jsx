import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";


const Home = () => {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>{" "}
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default Home;
