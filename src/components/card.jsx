import React from 'react';
import './card.css';


export default function Card({img, children}) {
  console.log(img);
  
  return <div className="card">
    {img ? <img src={img} className='dimg' alt='Картинка' /> : '' }
    <div className='news-body'>
      { children }
    </div>
  </div>
}
