import React from 'react';

import { Card, CardBody, Col, Container, Form, Input, InputGroup, Label, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import Flatpickr from "react-flatpickr";

import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";

// import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from './FormlayoutsCode';

const Form_Taluka = () => {
    document.title="Form Layouts | Velzon - React Admin & Dashboard Template";

    const [talukaName, setTalukaName] = useState('');
    const [talukaNameError, setTalukaNameError] = useState('');
  
    const handleTalukaNameChange = (e) => {
      const value = e.target.value;
      const regex = /^[\u0900-\u097Fa-zA-Z\s]*$/; // Allow Marathi + English + spaces
      if (regex.test(value)) {
        setTalukaName(value);
        setTalukaNameError('');
      } else {
        setTalukaNameError('फक्त मराठी किंवा इंग्रजी अक्षरे टाका (No numbers or special characters)');
      }
    };

    const breadcrumbTitle = "तालुका नोंद";
  const breadcrumbPageTitle = " मुख्यपृष्ठ / तालुका अहवाल";
  const breadcrumbPaths = [
    "/dashboard",
    "/taluka_report",
  ];
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                {/* <BreadCrumb title="नवीन जोडा" pageTitle="मुख्यपृष्ठ > तालुका" /> */}
                <BreadCrumb title={breadcrumbTitle} pageTitle={breadcrumbPageTitle} paths={breadcrumbPaths} />
                    <Row>
                        <Col xxl={12}>
                            <Card >
                                {/* <PreviewCardHeader title="Form Grid" /> */}
                                <PreviewCardHeader title="तालुका नोंद" buttonLabel="तालुका अहवाल" onButtonClick={() => navigate("/taluka_report")} />
                                <CardBody>
                                    {/* <p className="text-muted">More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. <span className="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p> */}
                                    <div className="live-preview">
                                        <Form >
                                            <Row>
                                              <Col md={6}>
  <div className="mb-3">
    <Label htmlFor="firstNameinput" className="form-label">तालुक्याचे नाव</Label>
    <Input
      type="text"
      className="form-control"
      id="firstNameinput"
      value={talukaName}
      onChange={handleTalukaNameChange}
      placeholder="तालुक्याचे नाव लिहा"
      required
    />
    {talukaNameError && (
      <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
        {talukaNameError}
      </div>
    )}
  </div>
</Col>

                                              
                                                <Col md={6}>
                                                <div className="mb-3">
  <Label htmlFor="ForminputState" className="form-label">स्टेटस</Label>
  <select
    id="ForminputState"
    className="form-select"
    data-choices
    data-choices-search="true"
    data-choices-sorting="true"
  >
    <option value="">-- निवडा --</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>

                                                </Col>
                                                <Col md={12}>
                                                    {/* <div className="text-end">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div> */}
                                                    <div className="text-end">
                                                        <Link to="/report-taluka">
                                                            <button type="button" className="btn btn-primary">Submit</button>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "375px" }}>
                                            <code>
                                                <FormGrid />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                       

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Form_Taluka;