// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <LangWrapper>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    </LangWrapper>
  );
};

const LangWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  display: flex;
  gap: 0.5rem;

  button {
    background: #4facfe;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #3d3aa5;
  }
`;

export default LanguageSwitcher;
