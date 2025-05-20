import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Table, Button, Card, CardBody, Col, Container, Row, Form } from 'reactstrap';

import BreadCrumb from '../../../Components/Common/BreadCrumb';
import UiContent from "../../../Components/Common/UiContent";
import nikitaImage from '../../../assets/images/users/avatar-7.jpg';

const User_View = () => {
    const navigate = useNavigate();

    // Static record data
    const record = {
        id: 1,
        नाव: "Nikita Darekar",
        रोल: "Officer",
        फोन: "1234567890",
        इमेल: "nikita@gmail.com" 
    };

    const breadcrumbTitle = "यूजर";
    const breadcrumbPageTitle = "Dashboard  / यूजर";

    const breadcrumbPaths = [
        "/",
        "/User-Report",
        ""
    ];

    const PreviewCardHeader = ({ title, buttonLabel, onButtonClick }) => (
        <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">{title}</h5>
            <Button color="primary" onClick={onButtonClick}>
                {buttonLabel}
            </Button>
        </div>
    );

    return (
        <React.Fragment>
            <UiContent />
            <style>
                {`
                    .page-title-right {
                        margin-left: 66%;
                    }
                    .mb-sm-0 {
                        display: none;
                    }
                `}
            </style>
            <div className="page-content" style={{ backgroundColor: '#fbf7f4' }}>
                <Container fluid>
                    <BreadCrumb
                        title={breadcrumbTitle}
                        pageTitle={breadcrumbPageTitle}
                        paths={breadcrumbPaths}
                    />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader
                                    title="यूजर"
                                    buttonLabel="Back To The Report"
                                    onButtonClick={() => navigate('/User-Report')}
                                />
                                <CardBody style={{ padding: `24px 20px` }}>
                                    <div className="live-preview">
                                        <Form>
                                            <Table bordered responsive className="table-custom">
                                                <tbody>
                                                    <tr>
                                                        <th>नाव</th>
                                                        <td>Nikita Darekar</td>
                                                    </tr>

                                                    <tr>
                                                        <th>फोटो</th>
                                                        <td>
                                                        <img
                                                            src={nikitaImage}
                                                            alt="Nikita Darekar"
                                                            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                        />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>रोल</th>
                                                        <td>Officer</td>
                                                    </tr>
                                                    <tr>
                                                        <th>फोन</th>
                                                        <td>1234567890</td>
                                                    </tr>
                                                    <tr>
                                                        <th>इमेल</th>
                                                        <td>nikita@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>स्टेटस</th>
                                                        <td>active</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form>
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

export default User_View;
