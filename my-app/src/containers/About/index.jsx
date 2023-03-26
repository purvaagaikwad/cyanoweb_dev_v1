import React from "react";
import { Footer } from "../../components/footer";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import SinglePagePDFViewer from "../../components/pdf/single-page";
import Odhepdf from "../../assets/Odhe.pdf";
import px2vw from "../../utils/px2vw"
const SidebarContainer = styled.div`
     position: absolute;
     width: 320px;
     height: 70px;
     left: 0px;
     top: 0px;

     background: rgba(0, 0, 0, 0.7);
`;

// const DashboardbuttonContainer = styled.div`
//      position: absolute;
//      width: 300px;
//      height: 200px;
//      left: 50px;
//      top: 150px;

// `;

// const ImapbuttonContainer = styled.div`
//      position: absolute;
//      width: 300px;
//      height: 200px;
//      left: 60px;
//      top: 250px;

// `;

// const ProposalbuttonContainer = styled.div`
//      position: absolute;
//      width: 300px;
//      height: 200px;
//      left: 50px;
//      top: 350px;

// `;

// const GraphbuttonContainer = styled.div`
//      position: absolute;
//      width: 300px;
//      height: 200px;
//      left: 50px;
//      top: 450px;

// `;

const ItemContainer = styled.div`
  display: flex;
  width: ${px2vw(120, 320)};
  min-height: ${px2vw(120, 320)};
  flex-direction: row-reverse;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;
  @media (min-width: 1928px) {
    width: ${px2vw(420, 768)};
    min-height: ${px2vw(5000, 768)};
    height: 100%;
  }
  @media (min-width: 1080px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(500)};
    height: 100%;
  }
     position:absolute;
     align-items:center;


`;

export function About (){
    
    
    

    return (
        <PageContainer>             
             <SidebarContainer>
                 <Link to ="/"> 
                 <BrandLogo size={50}/>
                 </Link>
                 {/* <DashboardbuttonContainer>
                    <Link to ="/dashboard/">
                         <Button>Dashboard</Button>
                    </Link>     
                 </DashboardbuttonContainer>
                 <ImapbuttonContainer>
                    <Link to ="/imap/">
                         <Button>I-Map</Button>
                    </Link>
                 </ImapbuttonContainer>
                 <ProposalbuttonContainer>
                    <Link to ="/proposal/">
                         <Button>Proposal</Button>
                    </Link>
                 </ProposalbuttonContainer>
                 <GraphbuttonContainer>
                    <Link to ="/graphs/">
                         <Button>Data</Button>
                    </Link>
                 </GraphbuttonContainer> */}
             </SidebarContainer>
             <ItemContainer>
                 <SinglePagePDFViewer pdf = {Odhepdf} />
             </ItemContainer>
             <Navbar /> 
             {/* <Footer /> */}
 
        </PageContainer>
     );  
}