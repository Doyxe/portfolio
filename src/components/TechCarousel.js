// src/components/TechCarousel.js
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt, FaPython, FaAngular, FaFigma } from "react-icons/fa";
import { SiMongodb, SiMysql, SiCanva } from "react-icons/si";

const TechCarousel = ({ technologies }) => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': technologies.length }}>
          {technologies.map((tech, index) => (
            <div 
              className="card" 
              key={tech.name}
              style={{
                '--index': index,
                '--color-card': tech.color
              }}
            >
              <div className="img">
                <div className="icon">{tech.icon}</div>
                <div className="label">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  perspective: 1200px;
  height: 300px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin: 2rem 0;

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .inner {
    --w: 110px;
    --h: 140px;
    --translateZ: calc((var(--w) + var(--h)) + 50px);
    --rotateX: -10deg;
    --perspective: 1200px;
    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 45s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border-radius: 14px;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) 
      translateZ(var(--translateZ));
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--color-card), 0.1);
    border: 2px solid rgba(var(--color-card), 0.5);
    backdrop-filter: blur(6px);
    box-shadow: 0 0 10px rgba(var(--color-card), 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) 
        translateZ(calc(var(--translateZ) + 20px));
      box-shadow: 0 0 20px rgba(var(--color-card), 0.6);
    }
  }

  .img {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(var(--color-card), 0.2) 0%,
      rgba(var(--color-card), 0.5) 80%,
      rgba(var(--color-card), 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    padding: 1rem;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }

  .label {
    font-size: 0.85rem;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 250px;
    margin: 1rem 0;

    .inner {
      --w: 90px;
      --h: 120px;
      --translateZ: calc((var(--w) + var(--h)) + 30px);
    }

    .icon {
      font-size: 1.5rem;
    }

    .label {
      font-size: 0.75rem;
    }
  }
`;

export default TechCarousel;