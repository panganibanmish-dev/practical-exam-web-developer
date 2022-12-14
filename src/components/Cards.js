import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

function Cards() {
    return (
        <>
            <div className='card-container'>
                <Row>
                    <Col>
                    <Card style={{ color: "black" }}>
                            <Card.Img alignItem= "center" variant='top' src='/images/thumbnail-1.jpg' style={{ width: 200, height: 200, zIndex: 999, position: 'relative', display: "block" }} />
                            <Card.Body>
                                <Card.Title>See the Proof: </Card.Title>
                                <Card.Subtitle>Sourcingpartner achieves growth success with NetSuite in 100 days</Card.Subtitle>
                                <Button variant='outline-primary' className='btn-card'>Download Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ color: "black" }}>
                            <Card.Img variant='top' src='/images/thumbnail-2.jpg' style={{ width: 200, height: 200, zIndex: 999, position: 'relative', display: "block" }} />
                            <Card.Body>
                                <Card.Title>See the Proof: </Card.Title>
                                <Card.Subtitle>Sourcingpartner achieves growth success with NetSuite in 100 days</Card.Subtitle>
                                <Button variant='outline-primary' className='btn-card'>Download Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ color: "black", alignItem: "center"}}>
                            <Card.Img variant='top' src='/images/thumbnail-3.jpg' style={{ width: 200, height: 200, zIndex: 999, position: 'relative', display: "block" }} />
                            <Card.Body>
                                <Card.Title>See the Video: </Card.Title>
                                <Card.Subtitle>Sourcingpartner achieves growth success with NetSuite in 100 days</Card.Subtitle>
                                <Button variant='outline-primary' style={{alignItem: "center"}} className='btn-card'>View Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Cards