import React, { useEffect, useRef }  from 'react';
import L from 'leaflet';
import '../Map/styles.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";
import { markerscioto } from './markers';
import {Link} from "react-router-dom";
import "./markers.css"
import Iframe from 'react-iframe'
import "./Map.css"




import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { markerScioto , markerErie, markerMary, markerOhio} from './markers';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});



L.Marker.prototype.options.icon = DefaultIcon;

const defaultCenter = [40.3, -82.9];
const defaultZoom = 7;


export function Map(props) {
  
  const data=props.data
  let handleClick=props.handleClick
  console.log(handleClick)
  

    
  return (
    <div className="Map" style={{marginTop:'1em'}}>
      <MapContainer  center={defaultCenter} zoom={defaultZoom} style={{height:'60vh'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
          
       {data.map((obj,index)=>
       <Marker key={index} position={[obj.location.split(',')[0],obj.location.split(',')[1]] }eventHandlers={{
        click:()=>{
          props.handleClick(obj)
        }
       }}></Marker>
       )
        }
        {/* <Marker position={[41.7019444, -83.26138888888889]} eventHandlers={{
        popupopen: (e) => {
            e.popup._closeButton.removeAttribute("href");
            e.popup._closeButton.style.cursor = "pointer";
        },
        click:(e)=>{
          console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeee")
          props.handleClick(e)
        }
        
    }}> */}
{/*        
          <Popup>Lake Erie at the intake crib */}
          {/* <Iframe className="Erieboy" src="https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=7dd7eab1-621f-4f8d-8143-672685d09ded&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
                    /> */}
          {/* <ul className="markererie">
                 {markerErie.map(item =>{                            
                  return (
                  <li key = {item.id} className={item.cName}>
                    <Link to ={item.path}onClick={(event) => {event.stopPropagation()}}>{item.title}  </Link>
                  </li>
                  )
                })}
              </ul>
          </Popup> */}
        {/* </Marker> */}
        {/* <Marker position={[40.5419444, -84.57333333333332]}eventHandlers={{
        popupopen: (e) => {
            e.popup._closeButton.removeAttribute("href");
            e.popup._closeButton.style.cursor = "pointer";
        }
    }}>
          <Popup> Grand Lake Saint Marys (714 S. Sugar St., Celina, Ohio) */}
          {/* <Iframe className="Marybob" src= "https://charts.mongodb.com/charts-project-0-sdqry/embed/dashboards?id=6792d134-7816-4eee-82fb-d97cde766d6a&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale" */}
                    {/* /> */}
          {/* <ul className="markermary">
                 {markerMary.map(item =>{                            
                  return (
                  <li key = {item.id} className={item.cName}>
                    <Link to ={item.path}onClick={(event) => {event.stopPropagation()}}>{item.title}  </Link>
                  </li>
                  )
                })}
              </ul>
          </Popup>
        </Marker> */}
        {/* <Marker position={[39.07379, -84.42019]}eventHandlers={{
        popupopen: (e) => {
            e.popup._closeButton.removeAttribute("href");
            e.popup._closeButton.style.cursor = "pointer";
        }
    }}>
          <Popup> Ohio River (5510 Kellog Ave., Cincinnati, Ohio)
                <ul className="markerohio">
                 {markerOhio.map(item =>{                            
                  // return (
                  // // <li key = {item.id} className={item.cName}>
                  // //   <Link to ={item.path}onClick={(event) => {event.stopPropagation()}}>{item.title}  </Link>
                  // // </li>
                  // )
                })}
              </ul>
          </Popup>
        </Marker> */}
        
      </MapContainer>
    </div>
  );
}
