import React from "react";
import Section from "../../components/Section";
import {
  HomeBtnStyle,
  HomeContainerStyle,
  HomeTitleStyle,
} from "./Home.styled";

function HomePage() {
  return (
    <Section className="home">
      <HomeContainerStyle className="container">
        <HomeTitleStyle>
          Instant Access to Cars: Your Personal Realm of Automotive Freedom with
          CarSharing
        </HomeTitleStyle>
        <HomeBtnStyle to="/catalog">Go to adverts</HomeBtnStyle>
      </HomeContainerStyle>
    </Section>
  );
}

export default HomePage;
