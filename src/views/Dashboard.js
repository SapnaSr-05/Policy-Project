import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import "./styleUi.css"
import p1 from '../assets/images/logo/p1.jpg'
import travel2 from '../assets/images/logo/travel2.png'
import c1 from '../assets/images/logo/c1.png'
import wh2 from '../assets/images/logo/wh2.png'
import health from '../assets/images/logo/health.png'
import other2 from '../assets/images/logo/other2.png'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
    const history = useHistory()

    const handlHistory = () => { //when click one item then open second page
        history.push('./home')

    }
    return (
        <div>

            <Row>
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card>
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={p1} alt="" />
                            <CardText>
                                Car
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card >
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={wh2} alt="" />
                            <CardText>
                                2 Wheeler
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card >
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={c1} alt="" />
                            <CardText>
                                Commerical
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            
                {/* Secod Card */}
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card >
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={travel2} alt="" />
                            <CardText>
                                Travel
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card >
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={health} alt="" />
                            <CardText>
                                Health
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                    <Card >
                        <CardBody className="border">
                            <CardImg top width="50px" height="80px" src={p1} alt="" />
                            <CardText>
                                Other
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* third Card */}
            <h4>My ACTIONABLES</h4>
            <Row>
                <Card
                    className="my-4"
                    style={{
                        width: '28rem'
                    }}>
                    <CardHeader>
                        <div className="border-bottom-danger pb-1">
                            Support Ticket &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View All</div>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            ASHISH-(PB769817612)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resolved
                            Changes Required in <br />Policy Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </CardText>
                        <CardText>
                            ASHISH-()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ownership Transfer<br />
                            Changes Required in <br />Policy Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </CardText>

                    </CardBody>
                </Card>
                <Card
                    className="my-4 ml-2"
                    style={{
                        width: '28rem'
                    }}>
                    <CardHeader>
                        <div className="border-bottom-danger pb-1">
                            Offline Request&nbsp; <Button className="button1 bg-info" >4 New Updates</Button>
                            &nbsp;&nbsp;&nbsp;View All</div>
                    </CardHeader>
                    <CardBody >
                        <CardText>
                            PB0742367&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additional Doc Require
                        </CardText>
                        <CardText>
                            PB0742312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additional Doc Require
                        </CardText>
                    </CardBody>
                </Card>
                <Card
                    className="my-4 ml-1"
                    style={{
                        width: '28rem'
                    }}>
                    <CardHeader>
                        <div className="border-bottom-danger pb-1">
                            Leads &nbsp;&nbsp;<Button className="button1 bg-info" >0 Expiring Today</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View All</div>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            HR14P9474&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue<br />
                            Sanjay Kumar<br />
                            605766486
                        </CardText>
                        <CardText>
                            MP20NEW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue<br />
                            Chote lal Jhariya<br />
                            549288029
                        </CardText>

                    </CardBody>
                </Card>
            </Row>

        </div>
    )
}

export default Dashboard
