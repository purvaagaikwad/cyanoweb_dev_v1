import React from "react";
import { Footer } from "../../components/footer";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { AccountBox} from "../../components/accountBox";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top: 3em;
`;

const BackbuttonContainer = styled.div`
     position: absolute;
     width: 300px;
     height: 200px;
     left: 0px;
     top: 20px;

`;

export function CustomerAccessPage(props){
    const {action} = useParams;
    
    

    return (
      <div>
       <PageContainer>
          <BackbuttonContainer>
            <Link to ="/">
                <Button>Back</Button>
            </Link>
          </BackbuttonContainer>
          <Navbar />   
          <StyledInnerContainer>
             <AccountBox initialActive={action} /> 
          </StyledInnerContainer>
          <Footer />
       </PageContainer>
       </div> 
     );  
}
