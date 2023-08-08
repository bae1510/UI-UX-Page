import React from 'react';
import './Page.css'
import { GrMail } from 'react-icons/gr';
import { BiSolidUser } from 'react-icons/bi';
import { BsApple } from 'react-icons/bs';
import {BsTelephonePlus} from 'react-icons/bs';
import BenfitsPage from './BenfitsPage';

function Page() {
  return ( 
    <div>
    <div className="header">
    <BsTelephonePlus  className='icon'/>
    <h4>0987654421</h4>
    <BsTelephonePlus  className='icon'/>
    <h4>1234567889</h4>
    <GrMail className='icon'/>
    <h4>career@gmail.com</h4>
    <BiSolidUser className='icon'/>
    <h4>user guide</h4>
    <BsApple className='apple'/>
    <h4 className='download'>Download App | SIP Calculater</h4>
    </div>
    
        
   
    
    <img src="https://s42013.pcdn.co/wp-content/uploads/2012/05/wordpress-tips2.jpg" className='img'/>

<div className='text'>
    <h3>Online SIP Investment Made Easy with India's Most Trusted Platform</h3>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    
</div>
<hr/>
<div className='text2'>
    <h2>Get Your Personalize d Portfolio in just 2 Minutes</h2>

    <p style={{marginTop : "3rem"}}>I am _________ Years old and I want to  invest ________</p>
</div>
<BenfitsPage/>
    </div>
  )
}

export default Page