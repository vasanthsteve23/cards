import React from 'react';
import './card.css';

function Card(props){
    return(
        <div class="card">
        <div class="content">
          <h2 class="title" style={{color:"red"}}>{props.title}</h2>
          <p class="copy">{props.para}</p>
          <a href="https://udyog.app//seller/Barathidevi%20garments/5e4d1d098f83464221744b1d"><button class="btn">View</button></a>
        </div>
      </div>
    );
}

export default Card;