import React from 'react';
import "./Benefits.css";
import Explore from './Explore';

function BenfitsPage() {
    const teamData = [
        {
          img: "https://static.thenounproject.com/png/2705425-200.png",
          title: "Disciplined Investment",
          bio: "A fund's NAV is calculated by dividing the total value of all the cash and securities in a fund's portfolio, less any liabilities, by the number of shares outstanding.",
        },

        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KgfanH76ctYOqdmhSe8WeuFZhplvowuy1w&usqp=CAU",
            title: "Diversification",
            bio: "Diversification involves investing in a range of assets to reduce the risk of loss due to market volatility.",
        },

        {
            img: "https://thumbs.dreamstime.com/b/simple-flat-financial-growth-chart-icon-symbol-vector-illustration-155008068.jpg",
            title: "Financial Growth",
            bio: "Investments in certain funds have the potential for financial growth over time, though they also come with risk.",
        },
        {
            img: "https://cdn1.vectorstock.com/i/1000x1000/28/50/clock-icon-with-45-minutes-time-interval-vector-40192850.jpg",
            title: "Irrelevant to Market Timing",
            bio: "Investments in certain funds have the potential for financial growth over time, though they also come with risk.",
        }
    ];

    return (
        <div>
        <div className='background'>
            <div className='fulltxt'>
                <p className='txt'>Benefits of SIP</p>
                <p>The actual market value of a fund may differ slightly from its NAV, which may represent a buying or selling opportunity.</p>
            </div>
            <div className='container'>
                {teamData.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.title}  className='img1'/>
                        <h5>{item.title}</h5>
                        <p>{item.bio}</p>
                    </div>
                ))}
            </div>
            <div className='btn'>
            <button className='btnEdit'>Start SIP</button>
            </div>
            </div>
            <Explore/>
        </div>
    );
}

export default BenfitsPage;
