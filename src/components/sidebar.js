import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";
import styled from "styled-components";
import { useSidebar } from "../context/SidebarContext";
import logo from "../assets/logo (3).png"; // Make sure this path is correct!


const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Cerrar sidebar al hacer clic fuera (solo en móviles)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar-container');
      if (isSidebarOpen && !sidebar.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Aplica el event listener solo si la pantalla es <= 768px
    if (window.innerWidth <= 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Limpia el event listener al desmontar o si el tamaño de pantalla cambia
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, setIsSidebarOpen]);


  const navItems = [
    { icon: <FaHome />, text: "Inicio", path: "#hero" },
    { icon: <FaUserAlt />, text: "Sobre Mí", path: "#about" },
    { icon: <FaTools />, text: "Servicios", path: "#services" },
    { icon: <FaProjectDiagram />, text: "Proyectos", path: "#projects" },
    { icon: <FaEnvelope />, text: "Contacta Conmigo", path: "#contact" }
  ];

  return (
    <>
      {/* Overlay para móviles */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <SidebarContainer
        className="sidebar-container"
        // Pasamos isSidebarOpen como prop transitoria para Styled Components
        $isOpen={isSidebarOpen} 
        initial={false}
        animate={{
          width: isSidebarOpen ? "280px" : "80px",
          boxShadow: isSidebarOpen ? "4px 0 15px rgba(0,0,0,0.2)" : "2px 0 5px rgba(0,0,0,0.1)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <ToggleButton onClick={toggleSidebar}>
          <FaChevronRight className={`toggle-icon ${isSidebarOpen ? "rotated" : ""}`} />
        </ToggleButton>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavItem 
              key={index}
              whileHover={{ backgroundColor: "rgba(74, 172, 254, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={item.path}>
                <IconContainer>{item.icon}</IconContainer>
                {isSidebarOpen && <NavText>{item.text}</NavText>}
              </a>
            </NavItem>
          ))}
        </NavLinks>

        <SidebarFooter>
          {isSidebarOpen ? (
            <BrandName>Nico Casas</BrandName>
          ) : (
            // AQUI ESTA EL CAMBIO: Usamos la imagen importada y el nuevo componente estilizado
            <BrandLogo src={logo} alt="Nico Casas Logo" /> 
          )}
        </SidebarFooter>

        {/* Botón de cerrar para móviles */}
        <MobileCloseButton
          onClick={toggleSidebar}
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaTimes />
        </MobileCloseButton>
      </SidebarContainer>
    </>
  );
};

// Styled Components
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 999;
  pointer-events: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarContainer = styled(motion.div)`
  background-color: #212121;
  color: white;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #333;

  @media (max-width: 768px) {
    width: 280px !important;
    /* Usa la prop transitoria $isOpen para el translateX */
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    box-shadow: 4px 0 15px rgba(0,0,0,0.3);
  }
`;

const ToggleButton = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255,255,255,0.05);
  }

  .toggle-icon {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    font-size: 1.2rem;
    color: #4aacfe;
  }

  .toggle-icon.rotated {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: inherit;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: #4aacfe;
    transform: scaleY(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleY(1);
  }
`;

const IconContainer = styled.div`
  font-size: 1.3rem; /* Este es el tamaño base de tus iconos */
  color: #4aacfe;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center; /* Asegura que el icono/imagen esté centrado verticalmente */
`;

const NavText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: 0.9;

  ${NavItem}:hover & {
    opacity: 1;
    transform: translateX(5px);
  }
`;

const SidebarFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #333;
  display: flex; /* Añadido para centrar el logo si es necesario */
  justify-content: center; /* Añadido para centrar el logo si es necesario */
  align-items: center; /* Añadido para centrar el logo si es necesario */
`;

const BrandName = styled.div`
  font-weight: 700;
  color: #4aacfe;
  font-size: 1.2rem;
  white-space: nowrap;
`;

// NUEVO COMPONENTE STYLED PARA LA IMAGEN DEL LOGO
const BrandLogo = styled.img`
  width: 30px; /* Ajusta este valor para que coincida con el tamaño de tus iconos */
  height: 30px; /* Ajusta este valor para que coincida con el tamaño de tus iconos */
  object-fit: contain; /* Para que la imagen se ajuste sin cortarse */
  display: block; /* Asegura que no haya espacio extra debajo de la imagen */
  margin: 0 auto; /* Centra la imagen si el contenedor es más grande */
`;


const MobileCloseButton = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ccc;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Sidebar;