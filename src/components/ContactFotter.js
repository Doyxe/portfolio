// src/components/ContactFooter.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiFiverr } from 'react-icons/si';

const ContactFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FooterContainer id="contact">
      <ContactHeader>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          CONTACT ME
        </motion.h1>

        <StyledWrapper>
          <button className="learn-more" onClick={() => setIsModalOpen(true)}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <span className="button-text">Hire Me</span>
          </button>
        </StyledWrapper>

        <DockContainer>
          <DockItem whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </DockItem>
          <DockItem whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
            <a href="mailto:nicolascasasrodriguez@gmail.com">
              <HiOutlineMail />
            </a>
          </DockItem>
          <DockItem whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
            <a href="https://www.linkedin.com/in/nicolas-casas-rodr%C3%ADguez-1b6470310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </DockItem>
          <DockItem whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
              <SiFiverr />
            </a>
          </DockItem>
        </DockContainer>
      </ContactHeader>

      <AnimatePresence>
        {isModalOpen && (
          <ModalBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <ModalContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </CloseButton>

              <ModalTitle>Get In Touch</ModalTitle>

              <Form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" type="text" placeholder="John Doe" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" name="_replyto" type="email" placeholder="john@example.com" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <TextArea id="message" name="message" rows="4" placeholder="Hello Nico..." required />
                </FormGroup>
                <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Send Message
                </SubmitButton>
              </Form>
            </ModalContainer>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </FooterContainer>
  );
};

// ========== STYLES ==========
const FooterContainer = styled.footer`
  padding: 6rem 2rem 4rem;
  text-align: center;
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 5rem;
    -webkit-background-clip: text;
    background-clip: text;
    color: white;
    font-weight: 900;
  }
`;

const StyledWrapper = styled.div`
  .learn-more {
    display: inline-flex;
    align-items: center;
    background: #3d3aa5;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    color: white;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: background 0.2s;

    .circle {
      background: white;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon.arrow::before {
      content: '→';
      color: #3d3aa5;
      font-size: 1rem;
    }

    &:hover {
      background: #4facfe;
    }
  }
`;

const DockContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 1rem 2rem;
  margin-top: 2rem;
`;

const DockItem = styled(motion.div)`
  background: rgba(74, 172, 254, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  a {
    color: white;
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(74, 172, 254, 0.3);
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #4facfe;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  background: linear-gradient(90deg, #4facfe 0%, #3d3aa5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  background: #2a2a2a;
  border: 1px solid #444;
  color: white;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  background: #2a2a2a;
  border: 1px solid #444;
  color: white;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem;
  background: linear-gradient(90deg, #3d3aa5 0%, #4facfe 100%);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;

export default ContactFooter;
