import React, {useState} from "react";
import { Footer } from "../../components/footer";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import "../../components/cfs/cform/cform.css";
import { BrandLogo } from "../../components/brandLogo";
import cfs from "../../assets/cfs.png";
import SinglePagePDFViewer from "../../components/pdf/single-page";
import cfspdf from "../../assets/cfs.pdf";
import px2vw from "../../utils/px2vw"
import Iframe from 'react-iframe'
import {BasicInfo} from "../../components/cfs/basicinfoform";
import CForm from "../../components/cfs/cform";
import CFForm from "../../components/cfs/cfform"
import CFSForm from "../../components/cfs/cfsform"
import prototype from "../../assets/cfsformprototype(1).png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
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
     height: 80%;
     top: 10vh;
     align-items: center;
     justify-content:center;


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
const TextContainer = styled.h2`
    top:10vh;
    font-size: 100 px;
    color: black;
    font-weight:  normal;
    position: absolute;
    width: 1000px;
    text-align: center;


    
`;




export function Treatmentcfs (){
     const [showCForm, setShowCForm] = useState(false);
    const [showCFForm,setCFForm] = useState(false)
    const [showCFSForm,setCFSForm] = useState(false)
    
    function renderForms(){
     
     console.log(showCForm,showCFForm,showCFSForm)
          return showCFSForm?<CFSForm/>:(showCFForm?<CFForm/>:showCForm?<CForm/>:null)
    }
    

    return (
       <>
           <Navbar />             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
              {/* <TextContainer> *Not Yet Complete* *Working on it*</TextContainer> */}
              <div className="buttonsContainer">
        <Row>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton" onClick={() => {setCFForm(false);setCFSForm(false);setShowCForm(true)}} >Coagulation
            </Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton" onClick={() => {setCFSForm(false);setShowCForm(false);setCFForm(true)}}>Flocculation</Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton" onClick={() => {setShowCForm(false);setCFForm(false);setCFSForm(true)}}>
              Sedimentation
            </Button>
          </Col>
        </Row>
      </div>
             



               {renderForms()}




             <Booter />
             </>
 
       
     );  
}