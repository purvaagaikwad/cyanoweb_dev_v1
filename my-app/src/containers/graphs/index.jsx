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
import "./grpahy.css"
const SidebarContainer = styled.div`
     position: absolute;
     width: 320px;
     height: 70px;
     left: 0px;
     top: 0px;

     background: #4F7942;
`;

const DashboardbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 50px;
     top: 150px;

`;

const ImapbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 60px;
     top: 250px;

`;

const ProposalbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 50px;
     top: 350px;

`;

const GraphbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 50px;
     top: 450px;

`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 2000px) {
    width:500px;
    height:500px;
    top:120px;
    left:200px;
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
const LogoContainer = styled.div`
    position: absolute;
    

    left: 50px;
    top:4px;
    @media (min-width: 2000px) {
    top: 20px;
 
  }
    align-items: flex-start;

`;



export function graphs (){
    
    
    

    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>

             <ItemContainer>
                <Iframe className="grpahy" src="https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=6243b405-9052-4fd0-8634-75a8b0e95bac&filter=&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed&scalingTop=fixed&scalingLeft=fixed"
                   
                     //className="myClassname"s
              />
             </ItemContainer>

             <Navbar /> 
            
    
        </PageContainer>
     );  
}