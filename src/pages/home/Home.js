import logo from "img/logo-brand.svg";
import heroImg from "img/beach-work.jpg";

import "twin.macro";

import destinations from "data/destinations";
import { Button, DestinationCard } from "components";

import {
  Wrapper,
  HeroContainer,
  HeroInner,
  Title,
  SubTitle,
  BtnWrapper,
  LgImageWrapper,
  DestinationsWrapper,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <Wrapper>
        <HeroContainer>
          <HeroInner>
            {/*Logo*/}
            <img src={logo} alt='Workcation' />

            <img src={heroImg} alt='Woman workcationing on the beach' />

            <Title>
              You can work from anywhere. <br />
              <span>Take advantage of it.</span>
            </Title>

            <SubTitle>
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </SubTitle>

            <BtnWrapper>
              <Button variant='primary' href='#!'>
                Book your escape
              </Button>
            </BtnWrapper>
          </HeroInner>
        </HeroContainer>

        <LgImageWrapper>
          <img src={heroImg} alt='Woman workcationing on the beach' />
        </LgImageWrapper>
      </Wrapper>

      <DestinationsWrapper>
        <h2>Popular destinations</h2>
        <p>
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div>
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </DestinationsWrapper>
    </>
  );
};

export default Home;
