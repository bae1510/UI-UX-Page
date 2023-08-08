import React from 'react'
import "./Explore.css"
import SIP from './SIP'
import Points from './Points'
function Explore() {
    const data =[
        {
            img: "https://cdn.iconscout.com/icon/free/png-256/free-tax-saving-1817352-1538223.png",
            title: "Mutual Funds Investment",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://c8.alamy.com/comp/2C5EBYE/reliability-glyph-icon-protection-and-reliable-umbrella-sign-vector-graphics-a-solid-pattern-on-a-white-background-2C5EBYE.jpg",
            title: "SIP with Insurance",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://thumbs.dreamstime.com/z/state-government-tax-business-cartoon-black-white-balance-calculation-work-personal-finance-saving-money-elements-vector-153326515.jpg",
            title: "Tax Saving Plan",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
        {
            img: "https://w7.pngwing.com/pngs/48/969/png-transparent-mutual-fund-investment-fund-bank-money-mutual-jinhui-logo-text-hand-investment.png",
            title: "New Fund Offer",
            bio: "Mutual Funds are subject to a host of regulations made by the Securities and Exchange Board of India (SEBI).",
         
        },
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
    <div className='fund'>
       <h4>Explore Our Products for Mutual Fund Investment</h4> 
       <p>A mutual fund has a more diversified portfolio than a single stock and is hence less risky.</p>

    </div>
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
    <Points/>
    <SIP/>
    </div>
  )
}

export default Explore