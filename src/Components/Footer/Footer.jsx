import React from 'react';
import logoFootImg from "../../assets/logo-footer.png"
import bgShadowImg from "../../assets/bg-shadow.png"
const Footer = () => {
    return (

      
        <div className=''>
    
 <footer className="footer relative sm:footer-horizontal bg-black text-white p-10">
        <div className="justify-center items-center ">     
    <img className= 'absolute z-10 bottom-56 h-100 w-175 rounded-3xl ' src={bgShadowImg} />
    <div ><h3 className="text-center items-center overlay-text">Text on image</h3></div>
  </div>
<div className='grid grid-cols-1'>
  <div className='mx-auto my-10'><img src={logoFootImg} alt="" /></div>
<div className='flex mx-96 gap-45'>
    <nav className='grid grid-cols-1'>
    <h4 className="footer-title"> <a className="link link-hover">About Us </a></h4>
    <p>We are Passionate Team Dedicated to Provide Best service To our Customers</p>
    
  </nav>
  <nav className='grid grid-cols-1'>
    <h4 className="footer-title"> <a className="link link-hover">Quick Links</a></h4>
  <li className='link'> <a>Home</a></li>
  <li className='link'> <a>Services</a></li>
  <li className='link'> <a>About</a></li>
  <li className='link'> <a>Contact</a></li>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <p>Subscribe to our Newsletter for latest Update</p>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</div>
</div>
</footer>
        </div>
    );
};

export default Footer;