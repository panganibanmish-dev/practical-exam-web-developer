import React from 'react';
import './Section.css';

function Section() {
    return (
        <div className='section-container'>
            <section className='section-subscription'>
                <p className='section-subscription-heading'>
                    “We believe that NS is the only system on the market that has the capability to run all of our mission-critical business operations from one single software solution.
                    We have gained much needed visibility into our entire business globally, which has transformed our ability to make timely and informed business decisions. 
                    There is no part of our business that NetSuite doesn’t touch.”
                </p>
                <p className='section-subscription-text'>
                    --Ethan Nyholm, Owner and CEO, STM Bags
                </p>
            </section>
        </div>
    )
}

export default Section