import react, { useState } from 'react';
import "./Carousel.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
export const Carousel=({data})=>{
  const[slide,setslide] =useState(0);
  const nextslide=() =>
  {
setslide(slide ===data.length -1 ? 0:slide+1);
  }
  const prevslide=() =>
    {
  setslide(slide === 0 ? data.length-1:slide-1);
    }
  return(
    <div className='carousel'>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevslide}/>
      {data.map((item,idx)=>{
        return <img src={item.src} alt={item.alt} key={idx} className={slide ===idx ? "slide" :"slide-hidden"}/>
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextslide}/>
    <span className='indicators'>
      { data.map((_,idx)=>{
        return<button key={idx} onClick={()=>setslide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
      })}
    </span>
    </div>
  )
}