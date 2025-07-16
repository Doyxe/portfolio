import React from "react";
import styled from "styled-components";
import { useSidebar } from "../context/SidebarContext";
import ProfileCard from "../components/ProfileCard";
import profileImg from "../assets/foto.jpg";
import mainImg from "../assets/foto.jpg";
import AboutMeButton from "../components/AboutMeButton";
import SplitText from "../components/SplitText";

const AboutMe = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <AboutSection id="about" $isSidebarOpen={isSidebarOpen}>
      <AboutContent>
        <ProfileCard
          profileImg={profileImg}
          mainImg={mainImg}
          name="Nicolás Casas Rodríguez"
          location="Madrid, España"
          socialLinks={{
            fiverr: "https://fiverr.com/",
            instagram: "https://instagram.com/",
            facebook: "https://facebook.com/",
            linkedin: "https://linkedin.com/",
          }}
        />

        <AboutText>
          <SplitText
            text="About Me"
            className="about-title"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            rootMargin="-100px"
            textAlign="left"
          />

          <SplitText
            text="👋 Hi! I'm Nico, a Full Stack Developer passionate about building modern, scalable, and clean web solutions. I love helping small businesses and entrepreneurs bring their ideas to life through intuitive, user-friendly interfaces and solid backend logic. My mission is to make the web more accessible — one fast, beautiful, and functional site at a time."
            className="about-description"
            delay={25}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            rootMargin="-80px"
            textAlign="left"
          />

          <AboutMeButton
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

// Styled Components
const AboutSection = styled.section`
  padding: 4rem 2rem;
  padding-left: ${({ $isSidebarOpen }) => $isSidebarOpen ? 'calc(280px + 2rem)' : 'calc(80px + 2rem)'};
  transition: padding-left 0.3s ease;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    padding-left: 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(300px, 400px) 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .about-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin: 0;
  }

  .about-description {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export default AboutMe;