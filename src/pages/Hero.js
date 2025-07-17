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
  min-height: 100vh;
  padding-left: ${({ $isSidebarOpen }) => $isSidebarOpen ? 'calc(280px + 2rem)' : 'calc(80px + 2rem)'};
  padding-right: 2rem;
  transition: padding-left 0.3s ease;
  overflow: hidden;
  color: white;
  display: flex; /* Añadido para que HeroContent pueda tomar el 100% de altura */
  flex-direction: column; /* Asegura que los elementos se apilen si hay más */
  justify-content: center; /* Centra verticalmente el contenido dentro de HeroContainer */
  align-items: center; /* Centra horizontalmente el contenido dentro de HeroContainer */

  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  .orb-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center; /* Centra verticalmente los ítems hijos */
  justify-content: center; /* Centra horizontalmente los ítems hijos */
  min-height: 100vh; /* Asegura que HeroContent ocupa toda la altura disponible */
  width: 100%; /* Asegura que HeroContent ocupa todo el ancho disponible */
  z-index: 2;
  /* Elimina el padding-left/right de aquí si quieres que HeroContainer lo maneje */
  /* Si quieres el padding solo en el contenido, mantenlo y ajusta HeroContainer */
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Cambiado a center para centrar horizontalmente */
  text-align: center; /* Cambiado a center para centrar el texto */
  max-width: 900px;
  gap: 2rem;
  width: 100%; /* Asegura que HeroInner pueda ocupar el ancho del HeroContent */

  /* Media query para móviles ya no es tan necesario si HeroInner ya está centrado por defecto */
  @media (max-width: 768px) {
    /* Puedes mantener esto si quieres un comportamiento diferente en móviles */
    /* align-items: center; */
    /* text-align: center; */
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    line-height: 1.2;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center; /* Añadido para centrar los elementos del título */
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }
`;

export default Hero;