import { Col, Form, Input, FormGroup, Label, Button, FormText, Container, Card, CardBody } from 'reactstrap'
// import './styleUi.css'
import "./styleUi.css"
import Select from 'react-select'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const option1 = [
  { value: 'Comprehensive', label: 'Comprehensive' },
  { value: 'TP only', label: 'TP only' }
]
const option2 = [
  { value: 'Private Car', label: 'Private Car' },
  { value: 'Commerical Vehicle', label: 'Commerical Vehicle' },
  { value: '3 Three Wheeler', label: '3 Three Wheeler' },
  { value: 'School Bus', label: 'School Bus' },
  { value: 'PCV', label: 'PCV' },
  { value: 'Tractor', label: '3 Tractor' },
  { value: 'MISC D', label: 'MISC D' }
]
const options = [
  { value: 'Reliance General Insurance', label: 'Reliance General Insurance' },
  { value: 'ERGO', label: 'ERGO' },
  { value: 'Shriram General Insurance', label: 'Shriram General Insurance' },
  { value: 'Edelweiss', label: 'Edelweiss' },
  { value: 'HDFC', label: 'HDFC' }
]
const option = [
  { value: 'Paid Driver', label: 'Paid Driver' },
  { value: 'NCB Protection', label: 'NCB Protection' },
  { value: 'Roadside Assistance', label: 'Roadside Assistance' },
  { value: 'Passenger Assistance', label: 'Passenger Assistance' },
  { value: 'Unnamed Passenger Cover', label: 'Unnamed Passenger Cover' },
  { value: 'Invoice Cover', label: 'Invoice Cover' }
]

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const history = useHistory()

  const handlHistory = () => { //when click one item then open second page

  }
  const [formValues, setFormValues] = useState({
    rto: '',
    policyType: null,
    insurance: null,
    addOns: null,
    idv: '',
    email: '',
    mobile: '',
    dob: '',
    pan: '',
    vehicleType: null,
    files: {
      invoice: null,
      panCard: null,
      idProof: null,
      quote: null,
      paymentScreenshot: null,
      policySection: null
    },
    remarks: ''
  })
  const [errors, setErrors] = useState({
    rto: '',
    policyType: '',
    insurance: '',
    addOns: '',
    idv: '',
    email: '',
    mobile: '',
    dob: '',
    pan: '',
    vehicleType: '',
    files: {
      invoice: '',
      panCard: '',
      idProof: '',
      quote: '',
      paymentScreenshot: '',
      policySection: ''
    },
    remarks: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSelectChange = (selectedOption, name) => {
    setFormValues({ ...formValues, [name]: selectedOption })
  }
  const handleFileChange = (e, fileName) => {
    const files = { ...formValues.files, [fileName]: e.target.files[0] }
    setFormValues({ ...formValues, files })
  }
  const validateForm = () => {
    const newErrors = {}
    // Validation start
    // RTO Number 
    newErrors.rto = formValues.rto ? '' : 'RTO Number is required'

    // Policy Type validation
    newErrors.policyType = formValues.policyType ? '' : 'Policy Type is required'

    // Insurance validation
    newErrors.insurance = formValues.insurance ? '' : 'Insurance is required'

    // Add-ons validation
    newErrors.addOns = formValues.addOns ? '' : 'Add-ons are required'

    // IDV validation
    newErrors.idv = formValues.idv && !isNaN(formValues.idv) ? '' : 'IDV must be a number'

    // Email validation
    newErrors.email = formValues.email && /\S+@\S+\.\S+/.test(formValues.email) ? '' : 'Invalid email format'

    // Mobile validation
    newErrors.mobile = formValues.mobile && formValues.mobile.length === 10 ? '' : 'Mobile number must be 10 digits'

    // DOB validation
    newErrors.dob = formValues.dob ? '' : 'Date of Birth is required'

    // PAN Number validation
    newErrors.pan = formValues.pan && /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan) ? '' : 'Invalid PAN number format'

    // Vehicle Type validation
    newErrors.vehicleType = formValues.vehicleType ? '' : 'Vehicle Type is required'

    // File validations
    Object.keys(formValues.files).forEach((file) => {
      if (!formValues.files[file]) {
        newErrors.files = newErrors.files || {}
        newErrors.files[file] = `${file} is required`
      }
    })

    // Remarks validation
    newErrors.remarks = formValues.remarks ? '' : 'Remarks are required'
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      history.push('./second-page')
      // Form is valid, submit the form
      console.log('Form submitted:', formValues)
    } else {
      console.log('Form contains errors')
    }
  }
  return (
    <div>
      {/* form start */}
      {/* <h1>Form</h1> */}
      <Card className="border">
        <CardBody>
          <Container>
            {/* Continue for first fields... */}
            <Form>
              <FormGroup as row className="border-bottom-danger pb-1">
                <Col md="3">
                  <Label for="rto">
                    RTO Number
                  </Label>
                  <Input 
                    id="rto"
                    name="rto"
                    value={formValues.rto}
                    onChange={handleChange}
                    placeholder="Enter a RTO Number"
                    type="number"
                    className={errors.rto ? 'border-danger' : ''} 
                    required
                  />
                  {errors.rto && <FormText color="danger">{errors.rto}</FormText>}
                </Col>
                <Col md="3">
                  <Label for="exampleSelect">Policy Type</Label>
                  <Select
                    value={formValues.policyType}
                    onChange={(selected) => handleSelectChange(selected, 'policyType')}
                    options={option1}
                    className={errors.policyType ? 'border-danger' : ''} 
                    required
                  />
                  {errors.policyType && <FormText color="danger">{errors.policyType}</FormText>}
                </Col>
              </FormGroup>
              {/* Continue for second fields... */}
              <FormGroup className="border-bottom-danger pb-1">
                <Label>Quote Request From Insurures(s)</Label>
              </FormGroup>
              <FormGroup as a row>
                <Col md="3">
                  <Label for="exampleSelect">Insurance</Label>
                  <Select
                    value={formValues.insurance}
                    onChange={(selected) => handleSelectChange(selected, 'insurance')}
                    options={options}
                    className={errors.insurance ? 'border-danger' : ''} 
                    required
                  />
                  {errors.insurance && <FormText color="danger">{errors.insurance}</FormText>}
                </Col>
                <Col md="3">
                  <Label for="exampleSelect" >Add-ons</Label>
                  <Select
                    value={formValues.addOns}
                    onChange={(selected) => handleSelectChange(selected, 'addOns')}
                    options={option}
                    className={errors.addOns ? 'border-danger' : ''} 
                    required
                  />
                  {errors.addOns && <FormText color="danger">{errors.addOns}</FormText>}
                </Col>
                <Col md="3">
                  <Label for="idv">IDV</Label>
                  <Input
                    id="idv"
                    name="idv"
                    value={formValues.idv}
                    onChange={handleChange}
                    placeholder="Enter a IDV Value"
                    type="number"
                    className={errors.idv ? 'border-danger' : ''} 
                    required
                  />
                  {errors.idv && <FormText color="danger">{errors.idv}</FormText>}
                </Col>
              </FormGroup>
              {/* Continue for third fields... */}
              <FormGroup as a row>
                <Col md="3">
                  <Label for="exampleSelect">User Email</Label>
                  <Input
                    id="policy"
                    name="policy"
                    placeholder="enter a email id"
                    type="email" required
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleSelect" >Mobile Number</Label>
                  <Input
                    id="policy"
                    name="policy"
                    placeholder="enter a mobile number"
                    type="number" required
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleSelect">DOB</Label>
                  <Input
                    id="policy"
                    name="policy"
                    placeholder="enter a dob"
                    type="date" required
                  />
                </Col>
              </FormGroup>
              <FormGroup as a row>
                <Col md="3">
                  <Label for="exampleSelect">PAN Number</Label>
                  <Input
                    id="pan"
                    name="pan"
                    placeholder="enter a pan number"
                    type="text"
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleSelect">Insurance Type</Label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={option2} required
                  />
                </Col>
              </FormGroup>
              <FormGroup className="border-bottom-danger pt-1">
                <Label >Upload File</Label>
              </FormGroup>
              <FormGroup as a row>
                <Col md="3">
                  <Label for="exampleFile">
                    Invoice
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleFile">
                    PAN Card
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleFile">
                    Voter ID/Driving Licence/Passport
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
              </FormGroup>
              <FormGroup as a row>
                <Col md="3">
                  <Label for="exampleFile">
                    Quote From Other Insurer/Broker
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleFile" >
                    Payment Done Screenshot(SVRM)
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
                <Col md="3">
                  <Label for="exampleFile">
                    Policy Section Section(SVRM)
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                  />
                </Col>
              </FormGroup>
              <FormGroup as row className="border-bottom-danger pb-1">
                <Col md="4">
                  <Label for="rto">
                    Remarks
                  </Label>
                  <Input
                    id="remarks"
                    name="remarks"
                    value={formValues.remarks}
                    onChange={handleChange}
                    placeholder="Enter Remarks"
                    type="text"
                    className={errors.remarks ? 'border-danger' : ''} 
                  />
                  {errors.remarks && <FormText color="danger">{errors.remarks}</FormText>}
                </Col>
              </FormGroup>
              <Button  style={{ cursor: 'pointer' }} onClick={handleSubmit}>
                Request For Quote
              </Button>
            </Form>
          </Container>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
