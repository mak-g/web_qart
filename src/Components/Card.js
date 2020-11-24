import React from 'react';
import ChatBox from "./ChatBox";
function Card(props) {
    return(
        <div className="Card">
            <img src="/images/gfg.png" alt="not  set"/>
            <h5>{props.title}</h5>
            <h6>price-  {props.price}</h6>
            <h6>status-  {props.status}</h6>
            <div className="Description">
                Description-  {props.Description}
            </div>
            <button className="btn btn-primary" onClick={e=>{props.onChange(<ChatBox {...props}/>)}}> Chat &nbsp;<i className="fa fa-comments"></i> </button>

        </div>
    )
}
export default  Card