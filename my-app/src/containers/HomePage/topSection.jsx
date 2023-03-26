import React from "react";
import styled from "styled-components";


import TopSectionBackgroundImg from "../../assets/backdrp.jpg";

import { BrandLogo } from "../../components/brandLogo";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

const px10vw = (size, width = 1440) => `${(size / width) * 100}vw`;

const px9vw = (size, width = 2000) => `${(size / width) * 100}vw`;

const TopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
    background: url(${TopSectionBackgroundImg}) no-repeat;
    background-position: absolute;
    background-size: cover;
    position:relative;
    overflow-x:hidden;
       
`; 

const BackgroundFilter = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    
`; 



const TopSectionInnerContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    align-items: top;
    justify-content: center;

`;

const LogoContainer = styled.div`
    position: absolute;
    

    left: 50px;
    top:200px;
    @media (min-width: 2000px) {
    top: 200px;
 
  }
    align-items: flex-start;

`;

const TextContainer = styled.h1`
    margin:0;
    font-size: 100 px;
    color: #fff;
    font-weight:  normal;
    position: absolute;
    width: 500px;

    left: 60px;
    top: 300px;
    
`;
const TextContainer2 = styled.h2`
    margin:0;
    font-size: 60 px;
    color: #fff;
    font-weight:  normal;
    position: absolute;
    width: 500px;
    height: 300px;
    left: 60px;
    top: 350px;
    
`;



export function TopSection() {
    


    return ( 
    <>
    <Navbar/>                    

    
    <TopSectionContainer>


            <BackgroundFilter>
                <TopSectionInnerContainer>
                <LogoContainer>
            <BrandLogo />
        </LogoContainer>

                    <TextContainer>Cyano WEB is a web infrastructure to help store and analyze water data related to CyanoHABs virtually.</TextContainer>

                </TopSectionInnerContainer>
            </BackgroundFilter>

          
        </TopSectionContainer>
        <Footer /></>
     
    );
}