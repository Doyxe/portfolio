import React from 'react';
import styled from 'styled-components';

const AboutMeButton = ({ text = "Contáctame", onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
      <HoverEffect />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: relative;
  width: 160px;
  height: 55px;
  border: 2px solid #3D3AA5;
  border-radius: 45px;
  background: transparent;
  color: #3D3AA5;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0 1.5rem;
  z-index: 1;

  &:hover {
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 50px;
    font-size: 1rem;
  }
`;

const HoverEffect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #3D3AA5;
  transition: width 0.3s ease;
  z-index: -1;

  ${StyledButton}:hover & {
    width: 100%;
  }
`;

export default AboutMeButton;