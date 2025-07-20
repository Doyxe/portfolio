import React from "react";
import "../styles/Hero.css";
import Orb from "../components/Orb";
import ButtonCTAHero from "../components/ButtonCTAHero";
import BlurText from "../components/BlurText";
import TrueFocus from "../components/TrueFocus";
import styled from "styled-components";
import { useSidebar } from "../context/SidebarContext";

const Hero = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <HeroContainer $isSidebarOpen={isSidebarOpen}>
      <div className="orb-container" id="hero">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <HeroContent>
        <HeroInner>
          <h1 className="hero-title">
            <BlurText
              text="Hola, soy Nico,"
              delay={150}
              animateBy="words"
              direction="top"
            />
            {" "}
            <BlurText
              text="Desarrollador"
              delay={150}
              animateBy="words"
              direction="top"
            />
            <TrueFocus
              sentence="Full-stack"
              manualMode={false}
              blurAmount={5}
              borderColor="#4facfe"
              glowColor="rgba(79, 172, 254, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
            {" "}
          
          </h1>

          <p className="hero-subtitle">
            Ayudo a emprendedores y pymes a hacer realidad sus ideas digitales con soluciones web rápidas, limpias y escalables.
          </p>

          <ButtonCTAHero />
        </HeroInner>
      </HeroContent>
    </HeroContainer>
  );
};

// === STYLED COMPONENTS ===

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-left: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "calc(280px + 1.5rem)" : "calc(80px + 1.5rem)"};
  padding-right: 1.5rem;
  transition: padding-left 0.3s ease;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .orb-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  width: 100%;

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    line-height: 1.2;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
    max-width: 600px;
  }
`;


export default Hero;