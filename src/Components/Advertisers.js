import React,{useState} from 'react';
import ChatBox from "./ChatBox";
import Card from "./Card";
function Advertisers(props) {
    const [advertisers,addAdvertisers]=useState([{title:"geeks for geeks",price:"by popularity of platform",status: "negotiable",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id magnam minima neque repudiandae vel, veniam? Aliquam, ea libero? Aperiam atque commodi cupiditate dicta distinctio dolorum ea et labore magnam nemo sapiente temporibus vel, veniam. Ad, atque facere fuga necessitatibus neque officia similique vitae. Nulla quo vel velit? Aperiam, eos!"}]);
    return(
        <div className="Content">
            {
                advertisers.map( advertiser => <Card {...advertiser} {...props}/> )
            }

            {/*<ChatBox/>*/}
            {/*<h1>Publishers</h1>*/}
        </div>
    )
}
export default Advertisers