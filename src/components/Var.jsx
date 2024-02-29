
import './style.css'
import React, { useEffect, useState } from 'react';


export const Var = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); 
    
      
        return () => clearInterval(intervalId);
      }, []); 
  return (
    
    <div id='headertop'>
      <p>Welcome: MrWaffle</p>
      <p>Fecha actual: {currentDate.toLocaleString()}</p>
     
    
      </div>
      
  )
}

