import styled from 'styled-components';
import { personalData } from '../../data/dataPersonalInfo';
import { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";

const PersonalInfo = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0 100px 0;
  padding: 0 20px;

  @media screen and (max-width: 1256px) {
    flex-direction: column;
    padding: 20px 0;
  }
`

const Image = styled.img`
  width: 500px;
  onject-fit: cover;
  border-radius: 30px;

  @media (min-width: 573px) and (max-width: 1256px) {
    width: 60%;
  }

  @media (max-width: 572px) {
    width: 100%;
    margin-top: 40px;
  }
`

const MainInfo = styled.div`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column; 
  padding: 10px 0;

  @media (min-width: 573px) and (max-width: 1256px) {
    margin-top: 40px;
  }

  @media (max-width: 572px) {
    width: 100%;
    margin-top: 40px;
  }
`

const BtnContainer = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: 25px;
  border: 1px solid #594E7E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  & button {
    border-radius: 25px;
    border: none;
    background: transparent;
    width: 50%;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &.active {
      background: #594E7E;
      color: white;
    }
  }
`

const InfoContainer = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  border-radius: 25px;
  border: 1px solid #594E7E;
  padding: 30px;

  @media (max-width: 572px) {
    height: 100%;
    padding: 15px;
    grid-template-columns: 1fr;
  }
`

const InfoItem = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  padding: 0 10px;
  border-radius: 12px;
  color: black;
  border: none;
`

const InfoLink = styled.a`
  width: 100%
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  color: black;
  text-decoration: none;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: white;
    background: #594E7E;
  }
`

const Span = styled.span`
  margin-left: 10px;
`

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 30px;
  border-radius: 25px;
  border: 1px solid #594E7E;
  
  @media (max-width: 572px) {
    height: 100%;
    padding: 15px;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  & p {
    font-size: 24px;
    font-weight: 500;
    margin-left: 10px;
  }
`

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 20px;

  & p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  & span {
    font-weight: 600;
  }
`

const AboutPart = () => {
  const [infoBtn, setInfoBtn] = useState<boolean>(true)
  const [educationBtn, setEducationBtn] = useState<boolean>(false)
  const [languagesBtn, setLanguagesBtn] = useState<boolean>(false)

  const {image, name, birth, education, email, languages, location, number, github, linkedin, facebook} = personalData    

  const showInfo = () => {
    setInfoBtn(true)
    setEducationBtn(false)
    setLanguagesBtn(false)
  } 

  const showEducation = () => {
    setInfoBtn(false)
    setEducationBtn(true)
    setLanguagesBtn(false)
  } 

  const showLanguages = () => {
    setInfoBtn(false)
    setEducationBtn(false)
    setLanguagesBtn(true)
  } 

  return (
    <PersonalInfo>
        <Image id='about' src={image} alt='my-portfolio-photo'/>
        <MainInfo>
          <BtnContainer>
            <button className={infoBtn ? 'active' : ''} onClick={showInfo}>Personal info</button>
            <button className={educationBtn ? 'active' : ''}onClick={showEducation}>Education</button>
            <button className={languagesBtn ? 'active' : ''}onClick={showLanguages}>Languages</button>
          </BtnContainer>
          {infoBtn
            ? <InfoContainer>
                <InfoItem><IoPersonSharp size={20}/><Span>{name}</Span></InfoItem>
                <InfoItem><CiCalendar size={20}/><Span>{birth}</Span></InfoItem>
                <InfoItem><MdOutlineEmail size={20}/><Span>{email}</Span></InfoItem>
                <InfoLink href={linkedin} target='_blank'><FaLinkedin size={20}/><Span>linkedin</Span></InfoLink>
                <InfoItem><IoIosPhonePortrait size={20}/><Span>{number}</Span></InfoItem>
                <InfoLink href={github} target='_blank'><FaGithub size={20}/><Span>github</Span></InfoLink>
                <InfoItem><MdLocationOn size={20}/><Span>{location}</Span></InfoItem>
                <InfoLink href={facebook} target='_blank'><FaFacebook size={20}/><Span>facebook</Span></InfoLink>
              </InfoContainer>
            : educationBtn
              ? <Container>
                  <Title>
                    <PiStudentFill size={26}/>
                    <p>Education</p>
                  </Title>
                  {education.map(item => 
                    <Item key={item.id}>
                      <p><span>{item.name}</span></p>
                      <p>Specialization: <span>{item.specialization}</span></p>
                      <p>Degree: <span>{item.degree}</span></p>
                      <p>Period: <span>{item.period}</span></p>
                    </Item>
                  )}
                </Container>
              : <Container>
                  <Title>
                    <IoLanguageOutline size={26}/>
                    <p>Languages</p>
                  </Title>
                  {languages.map(item => 
                    <Item key={item.id}>
                      <p>{item.language} <span>{item.level}</span></p>
                    </Item>
                  )}
                </Container>
          }
        </MainInfo>
    </PersonalInfo>
  )
}

export default AboutPart
