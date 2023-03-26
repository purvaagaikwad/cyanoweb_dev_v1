import React from "react";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import undercons from "../../assets/undercons.png";
// import SinglePagePDFViewer from "../../components/pdf/single-page";
// import samplePDF from "../../assets/proposal.pdf";

const SidebarContainer = styled.div`
     position: absolute;
     width: 320px;
     height: 60px;
     left: 0px;
     top: 0px;

     background:#4F7942;
`;

const DashboardbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 50px;
     top: 150px;

`;
const LogoContainer = styled.div`
    position: absolute;
    

    left: 50px;
    top:4px;
    @media (min-width: 2000px) {
    top: 20px;
 
  }
    align-items: flex-start;

`;


const ItemContainer1 = styled.h1`
     position: absolute;
     width: 100vw;
     height: 100vh;
     left: 50px;
     top: 130px;
     align-items: center;
     margin:0px;

`;

const ItemContainer2 = styled.div`
     position: absolute;
     width: 300px;
     height: 250px;
     left: 450px;
     top: 130px;
     align-items: center;
     background: grey; 

`;

const ItemContainer3 = styled.div`
     position: absolute;
     width: 300px;
     height: 250px;
     left: 850px;
     top: 130px;
     align-items: center;
     background: grey; 

`;
const TextContainer = styled.h1`
    margin:30vh;
    font-size: 100 px;
    color: black;
    font-weight:  normal;
    position: absolute;
    width: 580px;
    height: 300px;

    
`;

export function Treatmentaca (){
    
    
    

    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
             <TextContainer>Update Pending Project extension. Visit back Later!</TextContainer>
             <Navbar /> 
             <Booter />
 
        </PageContainer>
     );  
}