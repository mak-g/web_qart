import React,{useState} from 'react';
import ChatBox from "./ChatBox";
import Card from "./Card";
function Publishers(props) {
    const [publishers,addPublisher]=useState([{title:"geeks for geeks",price:"6000/day",status: "negotiable",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id magnam minima neque repudiandae vel, veniam? Aliquam, ea libero? Aperiam atque commodi cupiditate dicta distinctio dolorum ea et labore magnam nemo sapiente temporibus vel, veniam. Ad, atque facere fuga necessitatibus neque officia similique vitae. Nulla quo vel velit? Aperiam, eos!"}]);
    return(
        <div className="Content">
            {
                publishers.map( publisher => <Card {...publisher} {...props}/> )
            }

            {/*<ChatBox/>*/}
            {/*<h1>Publishers</h1>*/}
        </div>
    )
}
export default Publishers