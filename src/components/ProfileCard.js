import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const ProfileCard = ({ profileImg, mainImg, name, location, socialLinks }) => {
  return (
    <CardContainer>
      <ProfileHeader>
        <ProfileAvatar src={profileImg} alt="Perfil" />
        <ProfileInfo>
          <ProfileName>{name}</ProfileName>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileInfo>
      </ProfileHeader>
      
      <MainImage src={mainImg} alt="Imagen Principal" />
      
      <SocialLinks>
        {socialLinks.twitter && <SocialLink href={socialLinks.twitter} target="_blank" rel="noreferrer"><FaTwitter /></SocialLink>}
        {socialLinks.instagram && <SocialLink href={socialLinks.instagram} target="_blank" rel="noreferrer"><FaInstagram /></SocialLink>}
        {socialLinks.facebook && <SocialLink href={socialLinks.facebook} target="_blank" rel="noreferrer"><FaFacebook /></SocialLink>}
        {socialLinks.linkedin && <SocialLink href={socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></SocialLink>}
      </SocialLinks>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  background-color: #212121;
  border-radius: 12px;
  color: white;
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(61, 58, 165, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileAvatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProfileName = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
`;

const ProfileLocation = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin: 0;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
`;

const SocialLink = styled.a`
  color: #3D3AA5;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default ProfileCard;