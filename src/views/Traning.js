import React from 'react'
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Table } from 'reactstrap'
import { Label } from 'recharts'
import "./styleUi.css"
import file from '../assets/images/logo/file.svg'
import { useHistory } from 'react-router-dom'
const Traning = () => {
    const history = useHistory()

    const handlHistory = () => { //when click one item then open second page
        history.push('./test')
    }
    return (
        <div>

            <Card>
                <CardBody>
                    <Container>
                        <h5>Maximum-Timer : 48:00:00hrs</h5>
                        {/* <h5 className='t2'>Mini-Timer : 15:00:00hrs</h5>   */}
                        <h1 className='t1'>Training</h1>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>
                                        SR.No
                                    </th>
                                    <th>
                                        Chapters
                                    </th>
                                    <th>
                                        Documents
                                    </th>
                                    <th>
                                        Timing
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        Chapter 1
                                    </td>
                                    <td>
                                        <img src={file} alt="" />pdf
                                    </td>
                                    <td>
                                        3 hours
                                    </td>
                                    <td>
                                        <Form>
                                            <FormGroup
                                                check
                                                inline
                                            >
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Some input
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        Chapter 2
                                    </td>
                                    <td>
                                        <img src={file} alt="" /> pdf
                                    </td>
                                    <td>
                                        3 hours
                                    </td>
                                    <td>
                                        <Form>
                                            <FormGroup
                                                check
                                                inline
                                            >
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Some input
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        Chapter 3
                                    </td>
                                    <td>
                                        <img src={file} alt="" /> pdf
                                    </td>
                                    <td>
                                        3 hours
                                    </td>
                                    <td>
                                        <Form>
                                            <FormGroup
                                                check
                                                inline
                                            >
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Some input
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        4
                                    </th>
                                    <td>
                                        Chapter 4
                                    </td>
                                    <td>
                                        <img src={file} alt="" />pdf
                                    </td>
                                    <td>
                                        3 hours
                                    </td>
                                    <td>
                                        <Form>
                                            <FormGroup
                                                check
                                                inline
                                            >
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Some input
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        5
                                    </th>
                                    <td>
                                        Chapter 5
                                    </td>
                                    <td>
                                        <img src={file} alt="" />pdf
                                    </td>
                                    <td>
                                        3 hours
                                    </td>
                                    <td>
                                        <Form>
                                            <FormGroup
                                                check
                                                inline
                                            >
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Some input
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </td>
                                </tr>
                                <br />
                                <Button style={{ cursor: 'pointer' }} onClick={handlHistory}>
                                    Proceed For Test
                                </Button>
                            </tbody>
                        </Table>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Traning
