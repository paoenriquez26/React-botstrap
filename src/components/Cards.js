import React from "react"
import Card from './Card';
import image1 from "../access/img1.jpg"
import image2 from "../access/img4.jpg"
import image3 from "../access/img2.jpg"
const cards =[
{
    id:1,
    title:'caninos',
    image:image1,
    veterinario:'Luis',
    url:'http://www.google.com'

},
{
    id:2,
    title:'Mapaches',
    image:image2,
    veterinario:'Ramon',
    url:'http://www.terra.com'

},
{
    id:3,
    title:'erizos',
    image:image3,
    veterinario:'Vic Vaporub',
    url:'http://www.yahoo.com'

}



]

export default function Cards(){
return(

    <div className="Container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
cards.map(c =>(
<div className='col-md-4' key={cards.id}>
    <Card
    key={c.id}
    id={c.id}
    title={c.title}
    image={c.image}
    veterinario={c.veterinario}
    url={c.url}
    />






</div>
))


          }
        </div>
    </div>
)



}