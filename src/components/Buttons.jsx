import React from 'react'

function Buttons()
 {
    const cities=[
        {
            id:1,
            title:"London",
           
        },
        {
            id:2,
            title:"India",
           
        },
        {
            id:3,
            title:"Tokyo",
           
        },
        {
            id:4,
            title:"Paris",
           
        },
        {
            id:5,
            title:"Sydney",
           
        },
    ];
   return (
    <div classname="">
     {cities.map((city)=> (
            <button key={city.id} className="text-white text-lg font-medium">
                {city.title}
            </button>
    ))}
         
    </div>
    ); 
  
 }

export default Buttons;
