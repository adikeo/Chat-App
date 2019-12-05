import React from "react";
import Travel from "./Travel";

//Defines the data

const destinations = [
  {
    city:"Lisboa",
    country:"Portugal",
    photo:"https://cdn.pixabay.com/photo/2018/12/10/21/38/lisboa-3867785_960_720.jpg",
    distance:"0 kms"
  },
  {
    city:"Porto",
    country:"Portugal",
    photo:"https://cdn.pixabay.com/photo/2019/09/16/17/53/porto-4481616_960_720.jpg",
    distance:"300 kms"
  },
  {
    city:"Coimbra",
    country:"Portugal",
    photo:"https://cdn.pixabay.com/photo/2013/12/13/09/14/university-227791_960_720.jpg",
    distance:"200 kms"
  },
  {
    city:"Braga",
    country:"Portugal",
    photo:"https://cdn.pixabay.com/photo/2016/05/18/17/31/braga-1401055_960_720.jpg",
    distance:"360 kms"
  },
  {
    city:"Faro",
    country:"Portugal",
    photo:"https://iamatraveloholic.files.wordpress.com/2014/12/alb1.jpg",
    distance:"280 kms"
  }
]

const Travels = () => (
  <div>
    {destinations.map((destination) => {
        return <Travel city={destination.city} country={destination.country} photo={destination.photo} distance={destination.distance}/>;
    }
    )}
  </div>
);



export default Travels;