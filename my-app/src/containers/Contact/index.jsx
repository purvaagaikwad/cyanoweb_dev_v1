import React from "react";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";


const SidebarContainer = styled.div`
     position: absolute;
     width: 320px;
     height: 70px;
     left: 0px;
     top: 0px;

     background: rgba(0, 0, 0, 0);
`;
const ItemContainer1 = styled.div`
   @media(min-width:1000px){  position: absolute;
     width: 400px;
     height: 400px;
     left: 50px;
     top: 130px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
   }
   @media(min-width:2000px){  position: absolute;
     width: 400px;
     height: 400px;
     left: 50px;
     top: 200px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
   }
   @media(min-width:3000px){  position: absolute;
     width: 400px;
     height: 400px;
     left: 50px;
     top: 300px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
   }


`;

const ItemContainer2 = styled.div`
     @media(min-width:1000px){position: absolute;
     width: 400px;
     height: 400px;
     left: 550px;
     top: 130px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
     }
     @media(min-width:2000px){position: absolute;
     width: 400px;
     height: 400px;
     left: 550px;
     top: 200px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
     }
     @media(min-width:3000px){position: absolute;
     width: 400px;
     height: 400px;
     left: 550px;
     top: 300px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
     }
`;
const ItemContainer3 = styled.div`
    @media(min-width:1000px){ position: absolute;
     width: 424px;
     height: 400px;
     left: 1050px;
     top: 130px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
    }
    @media(min-width:2000px){ position: absolute;
     width: 424px;
     height: 400px;
     left: 1050px;
     top: 200px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
    }
    @media(min-width:3000px){ position: absolute;
     width: 424px;
     height: 400px;
     left: 1050px;
     top: 300px;
     align-items: center;

background: rgba(59, 112, 54, 0.2); 
    }
`;
const TextContainer = styled.h4`
    margin:0;
    font-size: 30 px;
    color: #014421;
    font-weight:  normal;
    position: absolute;
    width: 400px;
    height: 300px;
    left: 20px;
    top: 10px;
    align-items: center;
    
    
`;
const TextContainer2 = styled.h6`
    margin-top:5px;
    font-size: 30 px;
    color: #014421;
    font-weight:  normal;
    position: absolute;
    width: 400px;
    height: 300px;
    left: 20px;
    top: 60px;
    
    
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


export function Contact (){
    
    
    

    return (
        <PageContainer>             
              <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
             <ItemContainer1>
             <TextContainer>Green and ​Sustainable Engineering Laboratory (GSEL)</TextContainer>
             <TextContainer2><div>Soryong Ryan Chae</div>
                             <div>Associate Professor</div>
                             <div>Department of Chemical and Environmental Engineering</div>
                             <div>University of Cincinnati</div>
                             <div>Office: (513) 556-4353</div>
                             <div>E-mail: chaesg@ucmail.uc.edu</div>
             </TextContainer2>
             </ItemContainer1>
             <ItemContainer2>
             <TextContainer>University of Cincinnati Infrastructure Institute (UCII)</TextContainer>
             <TextContainer2><div>Arthur J Helmicki</div>
                             <div>Professor</div>
                             <div>Department of Electrical Engineering and Computer Science</div>
                             <div>University of Cincinnati</div>
                             <div>Office: (513) 556-6069</div>
                             <div>E-mail: arthur.helmicki@uc.edu</div>
                             <div>-------------------------------</div>
                             <div>Victor Hunt</div>
                             <div>Research Associate Professor</div>
                             <div>Department of Electrical Engineering and Computer Science</div>
                             <div>Office:(513) 556-3687</div>
                             <div>Email: huntvj@ucmail.uc.edu </div>
             </TextContainer2>
             </ItemContainer2>
             <ItemContainer3>
             <TextContainer>Environmental Microbiology and One Health Lab (EMOHL)</TextContainer>
             <TextContainer2><div>Jiyoung Lee</div>
                             <div>Professor</div>
                             <div>The Division of Environmental Health Sciences</div>
                             <div>Ohio State University</div>
                             <div>Office: (614) 292-5546</div>
                             <div>E-mail: lee.3598@osu.edu</div>
             </TextContainer2>
             </ItemContainer3>
             <Navbar /> 
            <Booter />
 
        </PageContainer>
     );  
}