import React from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import "./styleUi.css"
const Test = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <h4 className="border-bottom-primary pb-1 test">Test Start</h4>
                    <h5>Attempt:0</h5>
                    <Row>
                        <Col md="8">
                            <p className='opt1'>Que No:1 Which of the following is golden rule for interface design?<br />
                            &nbsp;&nbsp;<Input type="checkbox" />Place the user in control<br />
                            &nbsp;&nbsp;<Input type="checkbox" /> Reduce the user’s memory load<br />
                            &nbsp;&nbsp;<Input type="checkbox" /> Make the interface consistent<br />
                            &nbsp;&nbsp;<Input type="checkbox" /> All of the mentioned</p>
                        </Col>
                        <Col md="4">
                            <CardBody>
                                <h4 className='no1'>No. of Questions</h4>
                                <div className='mark1'>
                                    <div className='bt1'>
                                        <Button className="vibhu">1</Button>&nbsp;<Button className="vibhu">2</Button>&nbsp;<Button className="vibhu">3</Button>&nbsp;<Button className="vibhu">4</Button>&nbsp;<Button className="vibhu">5</Button><br />
                                    </div>
                                    <div className='bt1'><Button className="vibhu">6</Button>&nbsp;<Button className="vibhu">7</Button>&nbsp;<Button className="vibhu">8</Button>&nbsp;<Button className="vibhu">9</Button>&nbsp;<Button className="vibhu">10</Button><br />
                                    </div>
                                    <div className='bt1'>
                                        <Button className="vibhu">11</Button>&nbsp;<Button className="vibhu">12</Button>&nbsp;<Button className="vibhu">13</Button>&nbsp;<Button className="vibhu">14</Button>&nbsp;<Button className="vibhu">15</Button><br />
                                    </div>
                                    <div className='bt1'>
                                        <Button className="vibhu">16</Button>&nbsp;<Button className="vibhu">17</Button>&nbsp;<Button className="vibhu">18</Button>&nbsp;<Button className="vibhu">19</Button>&nbsp;<Button className="vibhu">20</Button><br/>
                                    </div>
                                    <div className='bt1'>
                                        <Button className="vibhu"> 21</Button>&nbsp;<Button className="vibhu">22</Button>&nbsp;<Button className="vibhu">23</Button>&nbsp;<Button className="vibhu">24</Button>&nbsp;<Button className="vibhu">25</Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                    <Button>Previous</Button>&nbsp;
                    <Button>Clear Selection</Button>&nbsp;
                    <Button>Next</Button>&nbsp;
                    <Button>Save</Button>
                </CardBody>
            </Card>
            </div>
    )
}

export default Test
