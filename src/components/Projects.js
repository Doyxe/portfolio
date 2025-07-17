import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import hostal from '../assets/hostal.png'
import doyxe from '../assets/doyxe.png'
import sala7 from '../assets/sala7.png'
import soon from '../assets/soon.png'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaEnvelope
} from 'react-icons/fa';

import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiEmailjs,
  SiMysql,
  SiVercel
} from 'react-icons/si';

const projectsData = [
  {
    id: 1,
    title: "Hostal Biarritz",
    description:
      "Sitio web de presentación para un hostal ubicado en Sol, Madrid; construido con HTML, CSS, JavaScript y Bootstrap, y alojado en Vercel para un despliegue rápido y un rendimiento óptimo.",
    shortDescription: "Sitio web para un hostal en Madrid...",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaBootstrap />, <SiVercel />],
    link: "https://doyxe.github.io/hostalbiarritz/",
    github: "https://github.com/user/hostal-biarritz",
    image: hostal,
  },
  {
    id: 2,
    title: "Doyxe",
    description:
      "Sitio web de presentación para una agencia web que ofrece sitios web escalables y optimizados. Desarrollado con HTML, CSS, JavaScript y Bootstrap, e integrado con EmailJS para el envío en tiempo real del formulario de contacto.",
    shortDescription: "Sitio web para agencia de desarrollo web...",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaBootstrap />, <FaEnvelope />],
    link: "https://www.doyxe.com/",
    github: "https://github.com/user/doyxe",
    image: doyxe,
  },
  {
    id: 3,
    title: "Sala 7",
    description:
      "Sitio web de presentación para un estudio creativo, desarrollado con HTML, CSS, JavaScript y Bootstrap, con diseño responsive y efectos de animación.",
    shortDescription: "Sitio web de presentación de un estudio creativo...",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaBootstrap />],
    link: "https://doyxe.github.io/sala7/",
    github: "https://github.com/user/sala7",
    image: sala7,
  },
  {
    id: 4,
    title: "Sporta",
    description:
      "Aplicación web para la gestión de equipos de fútbol amateur. Desarrollada con React, Node.js y MySQL como solución full‑stack. Incluye seguimiento de estadísticas y comunicación entre los miembros del equipo.",
    shortDescription: "Gestor de equipos de futbol de nivel amateur...",
    technologies: [<FaReact />, <FaNodeJs />, <SiMysql />],
    link: "https://sporta-manager.com",
    github: "https://github.com/user/sporta",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
    {
    id: 5,
    title: "InvestMySelf",
    description:
      "Aplicación web desarrollada para gestionar ahorros, realizar inversiones con ayuda de IA y establecer metas de compra de artículos.",
    shortDescription: "Sistema de ahorros para principiantes...",
    technologies: [<FaReact />, <FaNodeJs />, <SiMysql />],
    link: "https://sporta-manager.com",
    github: "https://github.com/user/sporta",
    image: soon,
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Proyectos destacados
      </SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <ProjectImage 
        src={project.image} 
        alt={project.title}
        whileHover={{ scale: 1.03 }}
      />
      
      <CardContent>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <TechIcons>
            {project.technologies.map((tech, index) => (
              <TechIcon key={index} whileHover={{ scale: 1.2, y: -5 }}>
                {tech}
              </TechIcon>
            ))}
          </TechIcons>
        </ProjectHeader>

        <AnimatePresence>
          <DescriptionContainer>
            {isExpanded ? (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>
            ) : (
              <ShortDescription>{project.shortDescription}</ShortDescription>
            )}
          </DescriptionContainer>
        </AnimatePresence>

        <ExpandButton
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
        >
          {isExpanded ? (
            <>
              <FaChevronUp /> Mostrar menos
            </>
          ) : (
            <>
              <FaChevronDown /> Mostrar más
            </>
          )}
        </ExpandButton>

        <ProjectLinks>
          <LiveLink 
            href={project.link} 
            target="_blank"
            whileHover={{ x: -3 }}
          >
            <FaExternalLinkAlt /> Visitar web
          </LiveLink>
          <GithubLink 
            href={project.github} 
            target="_blank"
            whileHover={{ x: 3 }}
          >
            <FaGithub /> No disponible
          </GithubLink>
        </ProjectLinks>
      </CardContent>
    </Card>
  );
};

// Updated Styled Components with mobile responsiveness
const ProjectsContainer = styled.section`
  padding: 4rem 1rem;
  background: #212121;
  color: white;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 4rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }
`;

const Card = styled(motion.div)`
  background: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 2px solid #4facfe;

  @media (min-width: 768px) {
    height: 220px;
    border-bottom: 3px solid #4facfe;
  }
`;

const CardContent = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: 480px) {
    gap: 0.7rem;
  }
`;

const TechIcon = styled(motion.div)`
  font-size: 1rem;
  color: #4facfe;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 1rem;
  overflow: hidden;
  flex-grow: 1;

  p {
    color: #d1d1d1;
    line-height: 1.5;
    margin: 0;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    p {
      line-height: 1.6;
      font-size: 1rem;
    }
  }
`;

const ShortDescription = styled.p`
  color: #d1d1d1;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const ExpandButton = styled(motion.button)`
  background: transparent;
  color: #4facfe;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 0.85rem;
  margin: 0.5rem 0;
  align-self: flex-start;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #333;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const LinkStyle = styled(motion.a)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  padding: 0.3rem 0;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0;
  }
`;

const LiveLink = styled(LinkStyle)`
  color: #4facfe;
  font-weight: 500;
`;

const GithubLink = styled(LinkStyle)`
  color: #ccc;
`;

export default ProjectsSection;