import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img1 from './images/0fff2ce207f9229a9555a157573c9d8a.png';
import Img2 from './images/d87nyoa-9d6b813c-e70e-4eb3-be0c-2de0b54c9848.png';
import Img3 from './images/2dd4b919861377.562e1820d324a.png';

import Img7 from './images/81.png';


import Img6 from './images/nature.png'

function Cards() {
  return (
    <div className='cards'>
  
   <h1>Listen Ghilbi best songs by Joe Hisashi here!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
            
          <ul className='cards__items'>
<CardItem
              img src={Img6} 
                       
                        
            />
          </ul>
            <h2>Studio Ghibli Quotes</h2>
    <ul>    
      <li><p>“Once You've Met Someone You Never Really Forget Them. It Just Takes A While For Your Memories To Return.”</p><span>- Spirited Away</span></li>
      <li><p>"A Heart's a heavy burden"</p><span>- Howl's Moving Castle</span></li>
      <li><p>"Whenever someone creates something with all of their heart,then that creation is given a soul."</p><span>- The Cat Returns</span></li>
      <li><p>"We each need to find our own inspiration. Sometimes it's not easy" </p><span>- Kiki's Delivery Service</span></li>
      <li><p>"Trees and people used to be good friends."</p><span>- My Neighbor Totoro</span></li>
      <li><p>"No matter how many WEAPONS you have, no matter how great your TECHNOLOGY might be, the world cannot live without LOVE. "</p><span>- Castle in the Sky</span></li>
      <li><p>"You cannot alter your fate. However, you can rise to meet it."</p><span>- Princess Mononoke</span></li>
      <li><p>"When I saw you, I just wanted to find a way to protect you."</p><span>- The Secret World of Arrietty</span></li>
      <li><p>"I love Ponyo whether she's a fish, a human, or something in between."</p><span>- Ponyo</span></li>
      <li><p>"My Heart Is Stronger Now That You're In It."</p><span>- The Secret World of Arrietty</span></li>
   
    </ul>
    
          <ul className='cards__items'>
            
           
            <CardItem
              img src={Img1} 
                      
                        
            />
             <CardItem
              img src={Img2} 
                        
                       
                        
            /> <CardItem
              img src={Img3} 
                      
                        
             />
          </ul>
            <ul className='cards__items'>
          <CardItem
              img src={Img7} 
                       
                        
            />
          </ul>
            
          
        </div>
      </div>
    </div>
  );
}

export default Cards;