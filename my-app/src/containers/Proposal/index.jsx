import React from "react";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import usgsImg from "../../assets/usgsimg.jpg";
import odhelogo from "../../assets/odhelogo.jfif";
import wrclogo from "../../assets/wrc.jpg";


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


const ItemContainer1 = styled.div`
     position: absolute;
     @media(min-width:1000px){width: 300px;
     height: 250px;
     left: 50px;
     top: 130px;
     align-items: center;

     }
     @media(min-width:2000px){width: 300px;
     height: 250px;
     left: 50px;
     top: 200px;
     align-items: center;
 
     }
     @media(min-width:3000px){width: 300px;
     height: 250px;
     left: 50px;
     top: 300px;
     align-items: center;
  
     }

`;

const ItemContainer2 = styled.div`
     position: absolute;
     @media(min-width:1000px){width: 300px;
     height: 250px;
     left: 450px;
     top: 130px;
     align-items: center;

     @media(min-width:2000px){width: 300px;
     height: 250px;
     left: 450px;
     top: 200px;
     align-items: center;
 
     }
     @media(min-width:3000px){width: 300px;
     height: 250px;
     left: 820px;
     top: 300px;
     align-items: center;
 
     }

`;

const ItemContainer3 = styled.div`
     position: absolute;
    @media(min-width:1000px){ width: 300px;
     height: 250px;
     left: 850px;
     top: 130px;
     align-items: center;
  
    }
    @media(min-width:2000px){ width: 300px;
     height: 250px;
     left: 850px;
     top: 200px;
     align-items: center;
 
    }
    @media(min-width:3000px){ width: 300px;
     height: 250px;
     left: 1550px;
     top: 300px;
     align-items: center;

    }

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

export function Proposal (){
    
    
    

    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
             <ItemContainer1>
               <a href="https://waterdata.usgs.gov/nwis/current/?type=quality&group_key=state_cd&site_no_name_select=station_nm" target="_blank" rel="noreferrer">
               <img src={usgsImg} style ={{width:'15vw', height:'25vh'}}border ={'2px solid #555'}/></a>
             </ItemContainer1>
             <ItemContainer2>
            <a href="https://highered.ohio.gov/" target="_blank" rel="noreferrer">
           <img src={odhelogo} style ={{width:'15vw', height:'25vh'}}border ={'2px solid #555'} /></a>
             </ItemContainer2>
             <ItemContainer3>

             <a href="https://wrc.osu.edu/" target="_blank" rel="noreferrer">
             <img src={wrclogo} style ={{width:'15vw', height:'25vh'}} border ={'2px solid #555'} /></a>     
             </ItemContainer3>
             <Navbar /> 
             <Booter />
 
        </PageContainer>
     );  
}