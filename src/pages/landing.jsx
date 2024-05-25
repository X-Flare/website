/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '../components/button';

const HeroSection = styled.section`
  background: url('/placeholder.png') center center/cover no-repeat;
  color: white;
  padding: 5rem 1rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
background: #d84315;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;




export function LandingPage() {
  return (
    <>
      <main>
        <HeroSection>
          <HeroContent>
            <h1>Welcome to XFlare Robotics</h1>
            <p>Empowering the next generation of engineers and innovators.</p>
            <Button>Get Started</Button>
          </HeroContent>
        </HeroSection>
        <Section id="about">
          <h2>About Us</h2>
          <p>Information about XFlare Robotics...</p>
        </Section>
        <Section id="programs">
          <h2>Our Programs</h2>
          <p>Details of programs...</p>
        </Section>
        <Section id="events">
          <h2>Upcoming Events</h2>
          <p>Details of events...</p>
        </Section>
        <Section id="contact">
          <h2>Contact Us</h2>
          <p>Contact information...</p>
        </Section>
      </main>
      <Footer>
        <p>&copy; 2024 XFlare Robotics. All rights reserved.</p>
      </Footer>
    </>
  );
}


