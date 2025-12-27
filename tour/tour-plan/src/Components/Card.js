// import React, { useState } from 'react'

import { useState } from "react";

function Card ({id,image,info,price,name}) {

   const [readmore, setReadmore] = useState(false)

    const description = `${info.substring(0,200)}....`;

    function readmorehandler (){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} alt='' className="image"></img>
            <div className="tour-info">

                <div className="tour-detail">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">{description}
                <span className="read-more" onClick={readmorehandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
            </div>
            <button className="btn-red" onClick={removeTour}>Not Intrested</button>
        </div>








    );
}


export default Card