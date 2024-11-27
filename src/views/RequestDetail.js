import React from 'react'
import { Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import "./styleUi.css"
const RequestDetail = () => {
    return (
        <div>
            <Card className="border">
                <CardBody>
                    <Container>
                        <Label for="req" className="border-bottom-danger pb-1">Request Details Previous Year Policy Details Inspection Details</Label>
                        <Form>
                            <FormGroup as row >
                                <Col md="4">
                                    <Table borderless >
                                        <div>
                                            <tbody>
                                                <tr>
                                                    <th>Vehicle Status</th>
                                                    <td>New Vehicle</td>
                                                </tr>
                                                <tr>
                                                    <th>RTO Number</th>
                                                    <td>hr26</td>
                                                </tr>
                                                <tr>
                                                    <th>Vehicle Type</th>
                                                    <td>Private Car</td>
                                                </tr>
                                                <tr>
                                                    <th>Policy Type</th>
                                                    <td>Comprehensive</td>
                                                </tr>
                                                <tr>
                                                    <th>IDV Value</th>
                                                    <td>N/A</td>
                                                </tr>
                                                <tr>
                                                    <th>Last Year NCB</th>
                                                    <td>N/A</td>
                                                </tr>
                                                <tr>
                                                    <th>Created ON</th>
                                                    <td>05-03-2004</td>
                                                </tr>
                                                <tr>
                                                    <th>Customer Mobile No</th>
                                                    <td>123456789</td>
                                                </tr>
                                                <tr>
                                                    <th>Email Id</th>
                                                    <td>sanjay123@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th>Parnter Code</th>
                                                    <td>N/A</td>
                                                </tr>
                                                <tr>
                                                    <th>Parnter Name</th>
                                                    <td>Sunjay</td>
                                                </tr>
                                                <tr>
                                                    <th>Zone</th>
                                                    <td>KRG-WeST</td>
                                                </tr>
                                                <tr>
                                                    <th>Other Insurance's/Broker Name</th>
                                                    <td>KRG-WeST</td>
                                                </tr>
                                            </tbody>
                                        </div>
                                    </Table>
                                </Col>
                                <Col md="4">
                                    <div className='col-sm-4'>
                                        <Label for="Shared Quotes">
                                            Shared Quotes
                                        </Label>
                                    </div>
                                    <Input
                                        id="quotes"
                                        name="text"
                                        placeholder="HDFC"
                                        type="text"
                                    />
                                    <br />
                                    <Input
                                        id="quotes"
                                        name="text"
                                        placeholder="HDFC"
                                        type="text"
                                    />
                                </Col>
                                <Col md="1">
                                    <Label for="Shared Quotes">
                                        Activity History
                                    </Label>
                                </Col>
                                <Col md="2">
                                    <Label for="Shared Quotes">
                                        Attached Document
                                    </Label>
                                    <Input
                                        id="File"
                                        name="file"
                                        type="file"
                                    />
                                </Col>
                                <Col md="1">
                                    <Label for="Shared Quotes">
                                        Comment
                                    </Label>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default RequestDetail
