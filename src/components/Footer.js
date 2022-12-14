import React from 'react';
// import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/aus' active><h4>AUSTRALIA</h4></Link>
                    </div>
                    <div className='footer-link-items'>
                        <Link to='/us'><h4>UNITED STATES</h4></Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/uk' ><h4>UNITED KINGDOM</h4></Link>
                    </div>
                    <div className='footer-link-items'>
                        <Link to='/france'><h4>FRANCE</h4></Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/hk' ><h4>HONG KONG</h4></Link>
                    </div>
                    <div className='footer-link-items'>
                        <Link to='/japan'><h4>JAPAN</h4></Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/sg'><h4>SINGAPORE</h4></Link>
                    </div>
                    <div className='footer-link-items'>
                        <Link to='/nl'><h4>NETHERLANDS</h4></Link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p style={{ color: 'white' }}>
                        Level 13, 100 Arthur Street
                    </p>
                    <p style={{ color: 'white' }}>
                        North Sydney NSW 2060
                    </p>
                    <p style={{ color: 'white' }}>
                        +61-2-9464-6100
                    </p>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/'>
                            <img src='/images/logo.png' style={{ zIndex: 999, position: 'relative', display: "block", backgroundRepeat: "no-repeat", backgroundSize: "auto" }} width="auto" height="auto" />
                        </Link>
                    </div>
                    <small className='website-rights'></small>
                </div>
            </section>
        </div>
    )
}

export default Footer