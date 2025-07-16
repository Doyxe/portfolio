import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWrapper = styled.section`
  padding: 5rem 0 10rem;
  text-align: center;
  background-color: #212121;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  h2 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    font-weight: 500;
  }

  .skills-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .skills-description {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .wrapper {
    perspective: 1200px;
    height: 300px;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
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
`;

export const SoftSkillsContainer = styled.div`
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;

  .soft-skills-title {
    font-size: 2rem;
    color: white;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    display: inline-block;
    font-weight: 500;
    letter-spacing: 0.5px;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .soft-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }
`;

export const SoftSkillCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: default;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .icon-container {
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    
    .skill-icon {
      color: white;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background: rgba(40, 40, 40, 0.7);
  }
`;