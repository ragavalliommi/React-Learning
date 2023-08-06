import { useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ListCast = () => {

   const [cast, setCast] = useState([]);

   async function fetchCast(){
        const response = await fetch("cast.json");
        setCast(await response.json());
   };

   useEffect(() => {
    fetchCast();
   });

 
   return(
    <div style={{display : "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
                gap : "1rem",
                marginBottom: "1rem"}}>

        {cast.map(member => (
            
            <OverlayTrigger key={member.id} placement="top" overlay={<Tooltip id={`tooltip-${member.id}`}>{member.name}</Tooltip>}>
                <img  src={`images/${member.slug}_tn.svg`} alt={member.name}/> 
            </OverlayTrigger>
        ))}
    </div>
   );
};

export default ListCast;