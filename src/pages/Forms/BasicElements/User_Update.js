

import { Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Row, UncontrolledDropdown } from 'reactstrap';

import React, { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";

import { InputExample, InputSizing, FileInput, InputGroup, InputGroupSizing, MultipleInputs, ButtonsCheckboxesRadiosGroup, ButtonsWithDropdowns, CustomForms } from './BasicElementCode';


const User_Update = () => {
    document.title = "Basic Elements | Velzon - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="यूजर" pageTitle="Forms" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="यूजर" />

                                <CardBody className="card-body">
                                    <div className="live-preview">
                                        <Row className="gy-4">
                                           

                                            

                                           

                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="valueInput" className="form-label">नाव</Label>
                                                    <Input type="text" className="form-control" id="valueInput" defaultValue="Input value" />
                                                </div>
                                            </Col>

                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="valueInput" className="form-label">रोल</Label>
                                                    <Input type="text" className="form-control" id="valueInput" defaultValue="Input value" />
                                                </div>
                                            </Col>

                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="valueInput" className="form-label">फोन</Label>
                                                    <Input type="text" className="form-control" id="valueInput" defaultValue="Input value" />
                                                </div>
                                            </Col>

                                           

                                            

                                           

                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="iconInput" className="form-label">इमेल</Label>
                                                    <div className="form-icon">
                                                        <Input type="email" className="form-control form-control-icon" id="iconInput" placeholder="example@gmail.com" />
                                                        <i className="ri-mail-unread-line"></i>
                                                    </div>
                                                </div>
                                            </Col>

                                         

                                            <Col xxl={3} md={6}>
    <div>
        <Label htmlFor="exampleInputpassword" className="form-label">पासवर्ड</Label>
        <div className="position-relative">
            <Input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
                id="exampleInputpassword"
                defaultValue="44512465"
            />
            <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
        </div>
    </div>
</Col>

                                            
<Col xxl={3} md={6}>
    <div>
        <Label htmlFor="confirmPassword" className="form-label">कन्फर्म पासवर्ड</Label>
        <div className="position-relative">
            <Input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control pe-5"
                id="confirmPassword"
                defaultValue="44512465"
            />
            <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
        </div>
    </div>
</Col>


                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="exampleInputpassword" className="form-label">फोटो</Label>
                                                    <Input className="form-control" type="file" id="formFile" />
                                                </div>
                                            </Col>
                                                                                    
                                            <Col xxl={3} md={6}>
                                                <Label htmlFor="exampleInputpassword" className="form-label">स्टेटस</Label>
                                                <select className="form-select mb-3" aria-label="Default select example">
                                                    <option >Select your Status </option>
                                                    <option value="1">Declined Payment</option>
                                                    <option value="2">Delivery Error</option>
                                                    <option value="3">Wrong Amount</option>
                                                </select>
                                            </Col>

                                        </Row>

                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "352px" }}>
                                            <code>
                                                <InputExample />
                                            </code>
                                        </pre>
                                    </div>

                                    <div className="d-flex gap-2 justify-content-end mt-4">
                                                            <button className="btn btn-success" onClick={() => navigate('/User-Report')}>
                                                                Save
                                                            </button>
                                                            <button className="btn btn-primary" onClick={() => navigate('/User-Report')}>
                                                                Save & Continue
                                                            </button>
                                                            <button className="btn btn-warning" onClick={() => navigate('/User-Report')}>
                                                                Reset
                                                            </button>
                                                            <button className="btn btn-secondary" onClick={() => navigate('/User-Report')}>
                                                                Cancel
                                                            </button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    


                   


                   


                    


                    


                   


                    

                </Container>

            </div>


        </React.Fragment>
    );
}

export default User_Update;