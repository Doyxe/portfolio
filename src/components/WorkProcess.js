import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FiSearch, 
  FiLayers,
  FiCode,
  FiCpu,
  FiUpload
} from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';

const WorkProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Descubrimiento e investigación",
      icon: <FiSearch />,
      description: "Realizo análisis de mercado exhaustivos y estudios de usuario para establecer las bases del proyecto. Esto incluye análisis comparativo de la competencia, desarrollo de perfiles de usuario y estudios de viabilidad técnica.",
      color: "#3d3aa5"
    },
    {
      id: 2,
      title: "Planteamiento Estratégico",
      icon: <FaRegLightbulb />,
      description: "Creo documentación integral que incluye mapas de sitio, wireframes y propuestas tecnológicas. Esta fase garantiza la alineación de los objetivos antes de iniciar el desarrollo.",
      color: "#3d3aa5"
    },
    {
      id: 3,
      title: "Diseño de Interfaz",
      icon: <FiLayers />,
      description: "Transformo conceptos en prototipos de alta fidelidad usando Figma, con énfasis en navegación intuitiva y diseños responsivos. Los sistemas de diseño garantizan consistencia visual en todos los componentes.",
      color: "#3d3aa5"
    },
    {
      id: 4,
      title: "Fase de desarrollo",
      icon: <FiCode />,
      description: "Usando frameworks modernos como React.js, Construyo arquitecturas frontend de alto rendimiento con servicios backend escalables. Todo el código es modular, está documentado y se gestiona con control de versiones en Git.",
      color: "#3d3aa5"
    },
    {
      id: 5,
      title: "Despliegue",
      icon: <FiUpload />,
      description: "Después de realizar pruebas exhaustivas en distintos navegadores, despliego con monitorización de rendimiento activa. El análisis post-lanzamiento y las optimizaciones iterativas aseguran una mejora continua.",
      color: "#3d3aa5"
    }
  ];

  return (
    <ProcessSection id="work-process">
      <SectionHeader>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proceso de Desarrollo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Flujo de trabajo optimizado para productos digitales excepcionales
        </motion.p>
      </SectionHeader>

      <TimelineContainer>
        {processSteps.map((step, index) => (
          <TimelineItem 
            key={step.id}
            index={index}
            step={step}
            isLast={index === processSteps.length - 1}
          />
        ))}
      </TimelineContainer>
    </ProcessSection>
  );
};

const TimelineItem = ({ step, index, isLast }) => {
  return (
    <ItemContainer>
      <ConnectorContainer>
        <AnimatedConnector 
          color={step.color}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          isLast={isLast}
        />
        
        <IconGlow>
          <IconCircle 
            color={step.color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.15
            }}
            viewport={{ once: true }}
          >
            {step.icon}
          </IconCircle>
        </IconGlow>
      </ConnectorContainer>

      <ContentContainer
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      >
        <StepNumber>0{index + 1}</StepNumber>
        <StepTitle>{step.title}</StepTitle>
        <StepDescription>{step.description}</StepDescription>
      </ContentContainer>
    </ItemContainer>
  );
};

// Styled Components with responsive updates
const ProcessSection = styled.section`
  padding: 4rem 1rem;
  color: white;
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

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 1rem;
    color: #b8b8b8;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 6rem;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

const TimelineContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: 1.5rem;

  @media (min-width: 480px) {
    padding-left: 2rem;
  }

  @media (min-width: 768px) {
    padding-left: 3rem;
  }

  @media (min-width: 1024px) {
    padding-left: 5rem;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding-left: 1rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
  }
`;

const ConnectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    width: auto;
    margin-right: 0;
  }
`;

const AnimatedConnector = styled(motion.div)`
  position: absolute;
  top: 3rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, 
    ${props => props.color} 0%, 
    rgba(61, 58, 165, 0.3) 80%);
  transform-origin: top;
  z-index: 1;
  display: ${props => props.isLast ? 'none' : 'block'};

  @media (min-width: 768px) {
    left: 1.7rem;
    height: calc(100% + 1.5rem);
    top: 3.5rem;
  }

  @media (min-width: 1024px) {
    left: 2.5rem;
    height: calc(100% + 2rem);
  }
`;

const IconGlow = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    filter: blur(12px);
    opacity: 0.3;
    z-index: -1;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const IconCircle = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 4px 12px rgba(61, 58, 165, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.4rem;
    box-shadow: 0 4px 15px rgba(61, 58, 165, 0.5);
  }
`;

const ContentContainer = styled(motion.div)`
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-left: 0;
  margin-top: 1rem;
  flex-grow: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(74, 172, 254, 0.3);
  }

  @media (min-width: 480px) {
    padding: 1.8rem;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-top: 0;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
    }
  }

  @media (min-width: 1024px) {
    margin-left: 3rem;
  }
`;

const StepNumber = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: #4facfe;
  margin-bottom: 0.6rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: white;
  font-weight: 600;
  letter-spacing: -0.3px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const StepDescription = styled.p`
  color: #d1d1d1;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;

  @media (min-width: 768px) {
    line-height: 1.7;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    line-height: 1.8;
    font-size: 1.05rem;
  }
`;

export default WorkProcess;