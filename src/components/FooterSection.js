import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './FooterSection.css';
import { Link } from 'react-router-dom';

function FooterSection() {
    return (
        <>
            <div className='footer-Containeres'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <Row>
                            <Col style={{
                                backgroundColor: 'light-gray',
                            }}>
                                <p style={{ color: "whitesmoke" }}>
                                    Copyright © 2012,     Oracle and/or its affiliates.
                                    All rights reserved. Oracle and Java are registered trademarks of Oracle and/or its affiliates.
                                    Other names may be trademarks of their respective owners.</p>
                            </Col>
                            <Col>
                                <Link to='/privacy'><p className='p-text'>Privacy Policy </p></Link>
                                <Link to='/terms'><p className='p-text'>Website Terms of Use </p></Link>
                                <Link to='/trademark'><p className='p-text'>Trademark </p></Link>
                                <Link to='/map'><p className='p-text'> Site Map </p></Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSection