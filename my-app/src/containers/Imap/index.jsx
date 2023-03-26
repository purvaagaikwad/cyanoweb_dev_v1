import React from "react";
import { Booter } from "../../components/footer/Dropy";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { BrandLogo } from "../../components/brandLogo";
import {Map} from "../../components/Map/Map"

import { useState, useEffect } from 'react';
import { getWeatherData } from "../../api/index";
const px5vw = (size, width = 3000) => `${(size / width) * 100}vw`;

// const SidebarContainer = styled.div`
//      position: absolute;
//      width: 320px;
//      height: 70px;
//      left: 0px;
//      top: 0px;

//      background: rgba(0, 0, 0, 0);
// `;

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
     position: absolute;
     width: 100vw;
     height: 500px;
     left: 0px;
     top: 14vh;

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

const TextContainer = styled.h3`
    top:95vh;
    font-size: 100 px;
    color: black;
    font-weight:  normal;
    position: absolute;
    width: 100vw;
    right: 0vw;
    text-align: center;
   

    
`;
const TextContainer1 = styled.h3`
    top:10vh;
    font-size: 100 px;
    color: black;
    font-weight:  normal;
    position: absolute;
    width: 100vw;
    right: 0vw;
    text-align: center;
   

    
`;

export function Imap (){

     const [coords, setCoords] = useState({});
     const [bounds, setBounds] = useState(null);
   
     const [weatherData, setWeatherData] = useState([]);
     const [places, setPlaces] = useState([]);

     const [autocomplete, setAutocomplete] = useState(null);
     const [childClicked, setChildClicked] = useState(null);
     const [isLoading, setIsLoading] = useState(false);


     useEffect(() => {
          navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
          });
        }, []);
     
     useEffect(() => {
          if (bounds) {
            setIsLoading(true);

            getWeatherData(coords.lat, coords.lng)
            .then((data) => setWeatherData(data));
     }
   }, [bounds]);
   const onLoad = (autoC) => setAutocomplete(autoC);

   const onPlaceChanged = () => {
     const lat = autocomplete.getPlace().geometry.location.lat();
     const lng = autocomplete.getPlace().geometry.location.lng();
 
     setCoords({ lat, lng });
   };

    return (
     <PageContainer>
          <Navbar />

          <LogoContainer>
                  <BrandLogo/>   
              </LogoContainer>
              <TextContainer1>Click and drag the map to view graphs on this page</TextContainer1>
              <TextContainer>Copyright: All rights reserved. No part of this website or the data contained here may be utilized in any form or by any means without permission from the project investigators.</TextContainer>
           
              <ItemContainer>
               <Map />
              </ItemContainer>



          <Booter />
              
     </PageContainer>
     );  
}
