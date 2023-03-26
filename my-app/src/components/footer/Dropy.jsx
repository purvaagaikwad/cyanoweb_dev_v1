import React from "react";
import styled from "styled-components";
import uclogo from "../../assets/1200px-University_of_Cincinnati_logo.png";
import osulogo from "../../assets/Ohio-State-Logo.png";
import odhelogo from "../../assets/ODHE.png"
const px3vw = (size, width = 3000) => `${(size / width) * 100}vw`;
const px4vh = (size, height= 3000) => `${(size / height) * 100}vh`;

const FooterContainer = styled.div`
  position:absolute;
    background: #4F7942;
    float: right;
   width:100%;
   overflow-x:hidden;
    top: 110%;
    padding:10px;
  
  

`;

// const UcLogoContainer = styled.div`
//     left: 10px
        
// `;

// const OsuLogoContainer = styled.div`

    
    
//     left: 1000px;
//     height: 108px;
  
    
       
// `;






export function Booter(props) {

    return (
        <FooterContainer>       
                <img src={uclogo}/>
                 <img src={osulogo}/>
                 <img src={odhelogo}/>                           
        </FooterContainer>
    )
}