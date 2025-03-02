import {Navbar, 
    Logo,
    NavigationLinks, 
    NavLink, 
    ButtonsContainer, 
    LoginButton, 
    //GuestButton, 
    HomeContainer, 
    SchoolInfo, 
    // SchoolImage, 
    Title, 
    LoremTextContainer, 
   // AdminRegisterLink,
    } from '../styles/styles'
    


import React from 'react'

import { useNavigate} from 'react-router-dom';
//import {LoremIpsum} from 'lorem-ipsum';

import cons from '../assets/cons.png';




//const lorem = new LoremIpsum();

const Home = () => {
    const navigate = useNavigate();
    //const LoremText = lorem.generateParagraphs(1);

    const handleLoginClick = () =>{
        navigate('/signup');

    };

    const handleclickcontact=()=>{
        navigate('/contact');
    };

    const handleclickcounsellor=()=>{
        navigate('/counsellor');
    };

    const handleclickabout=()=>{
        navigate('/about');
    };

    
    return(
        <>
        <Navbar>
            <Logo src={cons} alt='Logo'></Logo>
            <NavigationLinks>
                <NavLink onClick={handleclickcounsellor} style={{ textDecoration: "none", cursor: "pointer", color: "#0056b3", fontWeight: "bold" }}>Consult an Expert</NavLink>
                {/* <NavLink href='#'>Products</NavLink> */}
                <NavLink onClick={handleclickabout} style={{ textDecoration: "none", cursor: "pointer", color: "#0056b3", fontWeight: "bold" }} >About</NavLink>

            </NavigationLinks>
            <ButtonsContainer>
                <LoginButton onClick={handleLoginClick}>Sign Up</LoginButton>
                <LoginButton onClick={handleclickcontact}>Contact Us</LoginButton>

            </ButtonsContainer>
        </Navbar>
        <HomeContainer>
            <SchoolInfo>
                <Title>Expense Tracker for All</Title>
                <LoremTextContainer>
                <p> Take control of your finances with ease. Track spending, 
                    manage income, and gain insights into your financial habits. 
                    Start saving more and spending smarter today. 
                    Your journey to financial freedom begins here. 
                    Track, save, and thrive financially! </p>

                </LoremTextContainer>
                
                
            </SchoolInfo>
            {/* <SchoolImage src={cm} alt='Pupils'/> */}
            

            
        </HomeContainer>
        </>
    
    )
  
};

export default Home;