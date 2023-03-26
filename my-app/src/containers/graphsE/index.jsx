import React from "react";
import { Footer } from "../../components/footer";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import Iframe from 'react-iframe'
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

import "./grpahyE.css"
const SidebarContainer = styled.div`
     position: absolute;
     width: 320px;
     height: 70px;
     left: 0px;
     top: 0px;

     background: #4F7942;
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



const ItemContainer = styled.div`
    display: flex;

  flex-direction: row;
  @media (max-width: 2000px) {
    width:800px;
    height:700px;
    top:120px;
    left:100px;
  }
  @media (min-width: 2000px) {
    width:500px;
    height:500px;
    top:220px;
    left:200px;
  }
 position:absolute;
     align-items:center;


background: rgba(0, 0, 0, 0); 

`;



export function graphsE (){
    
    
    

    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>

             <ItemContainer>
                <Iframe className="grpahyE"src="https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=7dd7eab1-621f-4f8d-8143-672685d09ded&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
             
                     
                     //className="myClassname"s
                   />
             </ItemContainer>

             <Navbar /> 
            
    
        </PageContainer>
     );  
}