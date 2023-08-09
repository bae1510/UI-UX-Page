import React from 'react';
import "./Explore.css";

function Explore2() {
    const data =[
        {
            img: "https://static.thenounproject.com/png/1215069-200.png",
            title: "Smart Saving Account",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDHKchMceBNoLPtbF0MRxwMuYOhGZMlYiIA&usqp=CAU",
            title: "Retirement Funds",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4JOqKRCUms4yUV8hoaI6g6U3FliA31fIZA&usqp=CAU",
            title: "Child Future Funds",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://cdn1.vectorstock.com/i/1000x1000/28/50/clock-icon-with-45-minutes-time-interval-vector-40192850.jpg",
            title: "Gold Investement",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
    ]

  return (
    <div>
<div className='block'>
        {
            data.map((item, index)=>(
                <div className={index < 4 ? 'containerr first-row' : 'containerr'} key={index}>
                <img src={item.img} className='pic'/>
                <h4>{item.title}</h4>
                <p className='para'>{item.bio}</p>
                </div>
                ))
        }
    </div>
    </div>
  )
}

export default Explore2