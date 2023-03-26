import React,{useEffect} from "react";
import  Upload from "../Datauploadform";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import axios from "axios";
import { NewFileUploader } from "../../components/FileUpload";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Iframe from 'react-iframe'
const px8vw = (size, width = 850) => `${(size / width) * 100}vw`;
const SidebarContainer = styled.div`
     position: absolute;
     width: 20px;
     height: 60px;
     left: 0px;
     top: 0px;

     background:#4F7942;
`;

const DashboardbuttonContainer = styled.div`
     position: absolute;
     width: 400px;
     height: 300px;
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

const ItemContainer = styled.div`
     position: absolute;
     width: 350px;
     height: 500px;
     left: 120px;
     top: 80px;

background: white; 

`;

const ItemContainer1 = styled.div`
     position: absolute;
     width: 350px;
     height: 500px;
     left: 570px;
     top: 80px;

background: white; 

`;

const UploadbuttonContainer = styled.div`
     position: absolute;
    
    
     @media (max-width: 2000px) {
    width: ${px8vw(120, 768)};
    top: ${px8vw(120)};
    left: ${px8vw(620)};
  }
    
  @media (min-width: 2000px) {
    width: ${px8vw(120, 768)};
    top: ${px8vw(120)};
    left: ${px8vw(630)};
  }
  
`;
const UploadbuttonContainer1 = styled.div`
     position: absolute;
     @media (max-width: 2000px) {
    width: ${px8vw(120, 768)};
    top: ${px8vw(170)};
    left: ${px8vw(620)};
  }
  @media (min-width: 2000px) {
    width: ${px8vw(120, 768)};
    top: ${px8vw(180)};
    left: ${px8vw(630)};
  }
`;
const GraphbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 50px;
     top: 450px;

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

export const FileUploader = ({onSuccess}) => {
     const [files, setFiles] = useState([]);
 
     const onInputChange = (e) => {
         setFiles(e.target.files)
     };
 
     const onSubmit = (e) => {
         e.preventDefault();
 
         const data = new FormData();
 
         for(let i = 0; i < files.length; i++) {
             data.append('file', files[i]);
         }
 
         axios.post('/api/upload/uploadFile', data)
             .then((response) => {
                 toast.success('Upload Success');
                 onSuccess(response.data)
             })
             .catch((e) => {
                 toast.error('Upload Error')
             })
     }};

export function Dashboard (){ 
 const [showRegister, setShowRegister] = useState(false);                   
    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
             {/* <ItemContainer>
                <Iframe src="https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=6792d134-7816-4eee-82fb-d97cde766d6a&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
                     width="350px"
                     height="500px"
                     
                     left="420px"
                     top="600px"
                     
                     //className="myClassname"s
                     display="initial"
                     position="absolute"/>


             </ItemContainer>
             <ItemContainer1>
             <Iframe src="https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=7dd7eab1-621f-4f8d-8143-672685d09ded&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
                     width="350px"
                     height="500px"
                     
                     left="420px"
                     top="600px"
                     
                     //className="myClassname"s
                     display="initial"
                     position="absolute"/>
             </ItemContainer1> */}
 
             <UploadbuttonContainer>
                    <Link to ="/fileUpload/">
                         <Button>UploadFile</Button>
                    </Link>


             </UploadbuttonContainer>
             <UploadbuttonContainer1>
             <button
               className="button upload data"
               onClick={() => setShowRegister(true)}
             >
               Upload Data
             </button>
             </UploadbuttonContainer1>
             {showRegister && <Upload setShowRegister={setShowRegister} />}

             <Navbar /> 
             <Booter />
        </PageContainer>
        
     );  
}
