import React from 'react';

import Select from "react-select";

import { Card, CardBody, Col, Container, Form, Input, InputGroup, Label, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import Flatpickr from "react-flatpickr";

import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";

// import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from './FormlayoutsCode';
const puneTalukas = [
    { value: "haveli", label: "हवेली" },
    { value: "baramati", label: "बारामती" },
    { value: "shirur", label: "शिरूर" },
    { value: "junnar", label: "जुन्नर" },
    { value: "ambegaon", label: "आंबेगाव" },
    { value: "khed", label: "खेड" },
    { value: "mulshi", label: "मुळशी" },
    { value: "purandar", label: "पुरंदर" },
    { value: "bhor", label: "भोर" },
    { value: "velhe", label: "वेल्हे" },
    { value: "daund", label: "दौंड" },
    { value: "indapur", label: "इंदापूर" },
  ];

const Form_Gaav = () => {
    document.title="Form Layouts | Velzon - React Admin & Dashboard Template";
   

    const breadcrumbTitle = "गावांची नोंद";
  const breadcrumbPageTitle = " मुख्यपृष्ठ / गावाचा अहवाल";
  const breadcrumbPaths = [
    "/dashboard",
    "/gaav_report",
  ];
  const [villageName, setVillageName] = React.useState('');
  const [villageNameError, setVillageNameError] = React.useState('');

  const handleVillageNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[\u0900-\u097Fa-zA-Z\s]*$/; // Only Marathi + English + spaces
    if (regex.test(value)) {
      setVillageName(value);
      setVillageNameError('');
    } else {
      setVillageNameError('फक्त मराठी किंवा इंग्रजी अक्षरे टाका (No numbers or special characters)');
    }
  };
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
                                <PreviewCardHeader title="गावांची नोंद" buttonLabel="गावाचा अहवाल" onButtonClick={() => navigate("/gaav_report")} />
                                <CardBody>
                                    {/* <p className="text-muted">More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. <span className="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p> */}
                                    <div className="live-preview">
                                        <Form >
                                            <Row>
                                            <Col md={6}>
  <div className="mb-3">
    <Label htmlFor="firstNameinput" className="form-label">गावाचे नाव</Label>
    <Input
      type="text"
      className="form-control"
      id="firstNameinput"
      value={villageName}
      onChange={handleVillageNameChange}
      placeholder="गावाचे नाव लिहा"
      required
    />
    {villageNameError && (
      <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
        {villageNameError}
      </div>
    )}
  </div>
</Col>

                                                <Col md={6}>
                                                <div className="mb-3">
        <Label htmlFor="talukaSelect" className="form-label">तालुका</Label>
        <Select
          id="talukaSelect"
          options={puneTalukas}
          placeholder="तालुका निवडा"
          isSearchable
        />
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
                                                        <option value="active">सक्रिय (Active)</option>
                                                        <option value="inactive">निष्क्रिय (Inactive)</option>
                                                    </select>
                                                    </div>

                                                </Col>
                                                 <Col md={12}>
                                                                                                   {/* <div className="text-end">
                                                                                                       <button type="submit" className="btn btn-primary">Submit</button>
                                                                                                   </div> */}
                                                                                                   <div className="text-end">
                                                                                                       <Link to="/report-gaav">
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

export default Form_Gaav;