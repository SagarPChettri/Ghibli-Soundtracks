import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio headquartered in Koganei, Tokyo. 
            The studio is best known for its animated feature films, and has also produced several short subjects, television commercials, and one television film. The studio's
            mascot and most recognizable symbol is a character named Totoro, who is a giant catlike spirit from the 1988 anime film My Neighbor Totoro. Among Studio Ghibli's 
            highest-grossing films are Spirited Away (2001), Howl's Moving Castle (2004) and Ponyo (2008).
            The studio was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki,
             after the successful performance of Topcraft's Nausicaä of the Valley of the Wind (1984). It has also collaborated with
              video game studios on the visual development of several video games.Five of the studio's films are among the ten 
              highest-grossing anime feature films made in Japan. Spirited Away is second, grossing 31.68 billion yen in Japan
               and over US$380 million worldwide, and Princess Mononoke is fourth, grossing 20.18 billion yen. Many of their works
                have won the Animage Grand Prix award. Four have won the Japan Academy Prize for Animation of the Year. Five of the
                 studio's films have received Academy Award nominations. Spirited Away won the 2002 Golden Bear and the 2003 Academy 
                 Award for Best Animated Feature.

On August 3, 2014, Studio Ghibli temporarily suspended production, following the retirement of Miyazaki. In February 2017, Suzuki announced that Miyazaki had come out of retirement again to direct a new feature film titled How Do You Live?, which he intended to be his last film.
          </div>
        
        </div>
        
      </div>
      <div className=' footer-link-items'>
        <h2>Best Ghibli Movies</h2>
        <ul><li> <h3>Spirited Away (2001)</h3>
          
         <p>During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.</p>
          <span>Votes: 708,648 | Gross: $10.06M</span>
          </li>        <li> <h3>My Neighbor Totoro (1988)</h3><p>The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage
             daughter, Arrietty, is discovered.</p><span>Votes: 317,399 | Gross: $1.11M</span>
            </li>
              <li> <h3>The Secret World of Arrietty (2010)</h3><p>The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter, Arrietty, is discovered.</p><span>Votes: 87,877 | Gross: $19.20M</span></li>
          <li> <h3>The Tale of The Princess Kaguya (2013)</h3> 
            <p>Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all
             who encounter her, but ultimately she must confront her fate, the punishment for her crime.</p>
             <span>Votes: 43,535 | Gross: $1.51M</span></li>
          
          <li> <h3>Ponyo (2008)</h3><p>A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.
             </p><span>Votes: 135,653 | Gross: $15.09M</span></li>
          <li> <h3> Grave of the Fireflies (1988)</h3><p>A young boy and his little sister struggle to survive in Japan during World War II.</p><span>Votes: 258,151</span></li>
          <li> <h3> Princess Mononoke (1997)</h3><p>On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.</p><span>Votes: 371,513 | Gross: $2.38M</span></li>
    
          <li> <h3> Howl's Moving Castle (2004)</h3><p>When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.</p>
          <span>Votes: 365,965 | Gross: $4.71M</span></li>
          <li> <h3>Whisper of the Heart (1995)</h3><p>A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.</p>
          <span>Votes: 58,369</span></li>
          <li> <h3>Kiki's Delivery Service (1989)</h3><p>A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.</p>
          <span>Votes: 135,851</span></li>
        </ul>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
         
         
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/SagarPantaChhetri/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/sagar_p_chhetri/'
              target='_blank'
              aria-label='Instagram'
              
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              
              to='https://www.youtube.com/'
              target="_blank"
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/sagar-panta-35580b217/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
           
        </div><small class='website-rights '>Sagar P. Chhetri © 2021, All Rights Reserved </small>
      </section>
    </div>
  );
}

export default Footer;