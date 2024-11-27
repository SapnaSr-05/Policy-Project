import { Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import Select from 'react-select'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const option2 = [
  { value: 'Private Car', label: 'Private Car' },
  { value: 'Commerical Vehicle', label: 'Commerical Vehicle' },
  { value: '3 Three Wheeler', label: '3 Three Wheeler' },
  { value: 'School Bus', label: 'School Bus' },
  { value: 'PCV', label: 'PCV' },
  { value: 'Tractor', label: '3 Tractor' },
  { value: 'MISC D', label: 'MISC D' }
]
const option1 = [
  { value: 'Reliance General Insurance', label: 'Reliance General Insurance' },
  { value: 'ERGO', label: 'ERGO' },
  { value: 'Shriram General Insurance', label: 'Shriram General Insurance' },
  { value: 'Edelweiss', label: 'Edelweiss' },
  { value: 'HDFC', label: 'HDFC' }
]
const SecondPage = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const history = useHistory()

  const handlHistory = () => { //when click one item then open second page
      history.push('./request-details')

  }
  return (
    <Card className="border">
      <CardBody>
        <Container>
          <Form > 
            <FormGroup as a row>
              <Col md="3">
                <Label for="rto">
                  Date Time
                </Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="enter a date/time"
                  type="date"
                />
              </Col>
              <Col md="3">
                <Label for="exampleSelect">Policy Type</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={option2}
                  placeholder="Select a Policy Type"
                />
              </Col>
              <Col md="3">
                <Label for="exampleSelect">Vehicle Type</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={option1}
                  placeholder="Select a vehicle Type"
                />
              </Col>
              <Col md="3">
                <Label for="exampleSelect">Status</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={option2}
                  placeholder="Select a Status"
                />
              </Col>
            </FormGroup>
            <FormGroup as a row>
              <Col md="3">
                <Label for="exampleSelect">Payment Status</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={option2}
                  placeholder="Select a payment status"
                />
              </Col>
              <Col md="3">
                <Label for="exampleSelect">Registration Number</Label>
                <Input
                  id="reg"
                  name="reg"
                  placeholder="enter a registration number"
                  type="number"
                />
              </Col>
              <Col md="3">
                <Label for="exampleSelect">Bussiness Type</Label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={option2}
                  placeholder="Select a bussiness type"
                />
              </Col>
            </FormGroup>
          </Form>

          <Table bordered>
            <thead>
              <tr>
                <th>
                  REQ #
                </th>
                <th>
                  PARNTER
                </th>
                <th>
                  EMAIL ID
                </th>
                <th>
                  REG NUMBER
                </th>
                <th>
                  EXPIRY DATE
                </th>
                <th>
                  STATUS
                </th>
                <th>
                  PAYMENT STATUS
                </th>
                <th>
                  CREATED ON
                </th>
                <th>
                  LAST UPDATED               
                   </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                  1
                </th>
                <td>
                  Mark
                </td>
                <td>
                  Otto
                </td>
                <td>
                  @mdo
                </td>
                <td>@gfh</td>
                <td>@gfh</td>
                <td>@gfh</td>
                <td>@gfh</td>
                <td>@gfh</td>
              </tr>
              <tr>
                <th scope="row" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                  2
                </th>
                <td>
                  Jacob
                </td>
                <td>
                  Thornton
                </td>
                <td>
                  @fat
                </td>
                <td>@gh</td>
                <td>@gh</td>
                <td>@gh</td>
                <td>@gh</td>
                <td>@gh</td>
              </tr>
              <tr>
                <th scope="row" style={{ cursor: 'pointer' }} onClick={handlHistory}>
                  3
                </th>
                <td>
                  Larry
                </td>
                <td>
                  the Bird
                </td>
                <td>
                  @twitter
                </td>
                <td>@sfh</td>
                <td>@sfh</td>
                <td>@sfh</td>
                <td>@sfh</td>
                <td>@sfh</td>
              </tr>
             
              <tr></tr>
            </tbody>

          </Table>
        </Container>
      </CardBody>
    </Card>
  )
}

export default SecondPage
