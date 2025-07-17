import React, { useState } from "react";
import styled from "styled-components";
import {
  FaCode,
  FaTools,
  FaPencilRuler,
  FaPaintBrush,
  FaSearch,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Desarrollo Web",
    icon: <FaCode />,
    description:
      "Sitios web personalizados con frameworks modernos para un rendimiento y escalabilidad óptimos.",
    highlights: ["React/Next.js", "Responsive Design", "API Integration"],
  },
  {
    name: "Mantenimiento y optimización",
    icon: <FaTools />,
    description:
      "Monitoreo proactivo y ajuste de rendimiento para mantener tu sitio en su máximo rendimiento.",
    highlights: ["Performance Audits", "Security Updates", "Bug Fixes"],
  },
  {
    name: "Prototipado UX/UI",
    icon: <FaPencilRuler />,
    description:
      "Diseños centrados en el usuario, desde wireframes hasta prototipos interactivos.",
    highlights: ["Figma Designs", "User Flows", "Accessibility Checks"],
  },
  {
    name: "Detallado Web",
    icon: <FaPaintBrush />,
    description:
      "Implementación pixel-perfect con animaciones y transiciones fluidas.",
    highlights: ["CSS Animations", "Micro-interactions", "Cross-browser Testing"],
  },
  {
    name: "Diseño Visual",
    icon: <FaPaintBrush />,
    description:
      "Branding coherente y activos visuales para plataformas digitales.",
    highlights: ["Canva Graphics", "Social Media Assets", "Brand Guidelines"],
  },
  {
    name: "Optimización SEO",
    icon: <FaSearch />,
    description:
      "Optimización técnica y de contenidos para mejorar la visibilidad en buscadores.",
    highlights: ["Metadata", "Structured Data", "Performance SEO"],
  },
];

const WhatIDo = () => {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <Wrapper id="services">
      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Mis Servicios</h2>
          <p className="subtitle">
            Soluciones web integrales diseñadas para <span>crecimiento</span> y <span>rendimiento</span>.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                service={service}
                isExpanded={expandedService === index}
                onClick={() =>
                  setExpandedService(expandedService === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const ServiceCard = ({ service, isExpanded, onClick }) => {
  return (
    <motion.div
      className={`service-card ${isExpanded ? "expanded" : ""}`}
      whileHover={{ y: -5 }}
      onClick={onClick}
      transition={{ duration: 0.3 }}
    >
      <div className="card-header">
        <div className="icon-container">{service.icon}</div>
        <h3>{service.name}</h3>
        <FaInfoCircle className="info-icon" />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="card-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{service.description}</p>
            <ul>
              {service.highlights.map((highlight, i) => (
                <li key={i}>
                  <FaArrowRight className="arrow-icon" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Wrapper = styled.section`
  background: #212121;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 2.8rem;
      color: white;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .subtitle {
      color: #b8b8b8;
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;

      span {
        color: #4facfe;
        font-weight: 500;
      }
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    align-items: start;
  }

  .service-card {
    background: #2a2a2a;
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid #333;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;

    &:hover {
      border-color: #4facfe;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &.expanded {
      background: #2e2e2e;
      border-color: #4facfe;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-container {
      background: rgba(74, 172, 254, 0.1);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4facfe;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    h3 {
      color: white;
      font-size: 1.3rem;
      flex-grow: 1;
      margin: 0;
      font-weight: 600;
    }

    .info-icon {
      color: #4facfe;
      opacity: 0.7;
      font-size: 1.1rem;
    }
  }

  .card-details {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #333;
    overflow: hidden;

    p {
      color: #d1d1d1;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: #e2e2e2;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: 0.95rem;

        .arrow-icon {
          color: #4facfe;
          font-size: 0.8rem;
          margin-top: 0.3rem;
          flex-shrink: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;

    .header h2 {
      font-size: 2.2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default WhatIDo;