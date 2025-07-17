import React from "react";
import { motion } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import { FaUsers, FaSearch, FaLightbulb, FaSyncAlt, FaComments, FaClock } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt, FaPython, FaAngular, FaFigma } from "react-icons/fa";
import { SiMongodb, SiMysql, SiCanva } from "react-icons/si";
import SplitText from "../components/SplitText";
import styled, { keyframes } from "styled-components";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 />, color: "252, 200, 142" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "142, 202, 252" },
  { name: "JavaScript", icon: <FaJs />, color: "252, 252, 142" },
  { name: "React", icon: <FaReact />, color: "142, 249, 252" },
  { name: "Node.js", icon: <FaNode />, color: "142, 252, 157" },
  { name: "Angular", icon: <FaAngular />, color: "252, 142, 142" },
  { name: "MongoDB", icon: <SiMongodb />, color: "142, 252, 204" },
  { name: "MySQL", icon: <SiMysql />, color: "215, 252, 142" },
  { name: "Python", icon: <FaPython />, color: "252, 208, 142" },
  { name: "Git", icon: <FaGitAlt />, color: "252, 142, 239" },
  { name: "Figma", icon: <FaFigma />, color: "204, 142, 252" },
  { name: "Canva", icon: <SiCanva />, color: "142, 202, 252" },
];

const softSkills = [
  {
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva en proyectos de equipo con comunicación clara y respeto mutuo.",
    icon: <FaUsers className="skill-icon" />,
    color: "120, 120, 120"
  },
  {
    title: "Atención al detalle",
    description: "Atención meticulosa a cada aspecto del proyecto para garantizar la calidad y la coherencia.",
    icon: <FaSearch className="skill-icon" />,
    color: "120, 120, 120"
  },
  {
    title: "Resolutor",
    description: "Enfoque analítico para identificar y resolver desafíos técnicos de forma eficiente.",
    icon: <FaLightbulb className="skill-icon" />,
    color: "120, 120, 120"
  },
  {
    title: "Adaptabilidad",
    description: "Capacidad para adaptarse rápidamente a nuevas tecnologías y entornos de trabajo.",
    icon: <FaSyncAlt className="skill-icon" />,
    color: "120, 120, 120"
  },
  {
    title: "Comunicación efectiva",
    description: "Capacidad para comunicar ideas técnicas con claridad a distintos públicos.",
    icon: <FaComments className="skill-icon" />,
    color: "120, 120, 120"
  },
  {
    title: "Manejo del tiempo",
    description: "Organización eficiente para cumplir plazos sin comprometer la calidad.",
    icon: <FaClock className="skill-icon" />,
    color: "120, 120, 120"
  }
];

const rotateAnimation = keyframes`
  from {
    transform: perspective(1200px) rotateX(-10deg) rotateY(0deg);
  }
  to {
    transform: perspective(1200px) rotateX(-10deg) rotateY(360deg);
  }
`;

const Skills = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <StyledWrapper id="skills" $isSidebarOpen={isSidebarOpen}>
      <SkillsContainer>
        <SectionTitle>Mis Skills</SectionTitle>
        
        <SplitText
          text="Organizo mis habilidades en Frontend, Backend, Diseño y Bases de datos — cada una con un papel clave en la creación de experiencias web modernas, funcionales y fáciles de usar."
          className="skills-description"
          delay={60}
          fontsize={18}
          duration={0.5}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <TechCarouselWrapper>
          <TechCarouselInner $itemCount={technologies.length}>
            {technologies.map((tech, index) => (
              <TechCard 
                key={tech.name}
                $index={index}
                $color={tech.color}
                $itemCount={technologies.length}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechCard>
            ))}
          </TechCarouselInner>
        </TechCarouselWrapper>

        <SoftSkillsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Soft Skills & Enfoque de Trabajo
          </SectionTitle>
          
          <SoftSkillsGrid>
            {softSkills.map((skill, index) => (
              <SoftSkillCard 
                key={index}
                $color={skill.color}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SoftSkillCard>
            ))}
          </SoftSkillsGrid>
        </SoftSkillsSection>
      </SkillsContainer>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.section`
  padding: 6rem 2rem;
  padding-left: ${({ $isSidebarOpen }) => $isSidebarOpen ? 'calc(280px + 2rem)' : 'calc(80px + 2rem)'};
  transition: padding-left 0.3s ease;
  background-color: #212121;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    padding-left: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  .skills-description {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);  // Texto más grande
}
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TechCarouselWrapper = styled.div`
  perspective: 1200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem 0;
  overflow: visible;

  @media (max-width: 768px) {
    height: 250px;
    margin: 2rem 0;
  }
`;

const TechCarouselInner = styled.div`
  position: relative;
  width: 110px;
  height: 140px;
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 30s linear infinite;
  transform: perspective(1200px) rotateX(-10deg);

  @media (max-width: 768px) {
    width: 90px;
    height: 120px;
  }
`;

const TechCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(${props => props.$color}, 0.1);
  border: 2px solid rgba(${props => props.$color}, 0.5);
  backdrop-filter: blur(6px);
  box-shadow: 0 0 10px rgba(${props => props.$color}, 0.3);
  transform: rotateY(calc(360deg / ${props => props.$itemCount} * ${props => props.$index})) 
    translateZ(calc(110px + 140px + 50px));
  transition: all 0.3s ease;
  padding: 1rem;
  box-sizing: border-box;

  &:hover {
    transform: rotateY(calc(360deg / ${props => props.$itemCount} * ${props => props.$index})) 
      translateZ(calc(110px + 140px + 70px));
    box-shadow: 0 0 20px rgba(${props => props.$color}, 0.6);
  }

  @media (max-width: 768px) {
    transform: rotateY(calc(360deg / ${props => props.$itemCount} * ${props => props.$index})) 
      translateZ(calc(90px + 120px + 30px));

    &:hover {
      transform: rotateY(calc(360deg / ${props => props.$itemCount} * ${props => props.$index})) 
        translateZ(calc(90px + 120px + 50px));
    }
  }
`;

const TechIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TechName = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const SoftSkillsSection = styled.div`
  margin-top: 16rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const SoftSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SoftSkillCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(${props => props.$color}, 0.3);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background: rgba(40, 40, 40, 0.7);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const SkillIcon = styled.div`
  color: #4facfe;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const SkillDescription = styled.p`
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

export default Skills;