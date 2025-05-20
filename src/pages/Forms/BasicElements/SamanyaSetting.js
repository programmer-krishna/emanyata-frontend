import React, { useState } from 'react';
import { Col, Input, Label, Card, CardBody, Container, Row, CardHeader } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';


const SamanyaSetting = () => {
    const [imagePreview1, setImagePreview1] = useState(null);
    const [imagePreview2, setImagePreview2] = useState(null);
    const [imagePreview3, setImagePreview3] = useState(null);
    
    document.title = "Basic Elements | Velzon - React Admin & Dashboard Template";

    const handleImageChange = (e, setPreview) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
      
    return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
            <BreadCrumb title="सामान्य सेटिंग्ज" pageTitle="होम" />
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader className="card-header">
                            <h4 className="card-title mb-0">सामान्य सेटिंग्ज</h4>
                        </CardHeader>

                        <CardBody className="card-body">
                            <div className="live-preview">
                                <Row className="gy-4">
                                    <Col xxl={3} md={6}>
                                        <div>
                                            <Label htmlFor="basiInput" className="form-label">अर्जाचे नाव</Label>
                                            <Input type="text" className="form-control" id="basiInput" placeholder='ई मान्यता प्रणाली' />
                                        </div>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <div>
                                            <Label htmlFor="labelInput" className="form-label">फुटर मजकूर</Label>
                                            <Input type="text" className="form-control" id="labelInput" placeholder='ई मान्यता प्रणाली.All rights Reserved' />
                                        </div>
                                    </Col>
                                    
                                    <Col xxl={3} md={6}>
                                    <Label htmlFor="formFile1" className="form-label">लाईट लोगो</Label>
                                    <Input
                                        className="form-control"
                                        type="file"
                                        id="formFile1"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, setImagePreview1)}
                                    />
                                    {imagePreview1 && (
                                        <div className="mt-3 d-flex align-item-center justify-content-center">
                                        <img src={imagePreview1} alt="Preview 1" style={{ width: '15%',  borderRadius: '8px' }} />
                                        </div>
                                    )}
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Label htmlFor="formFile2" className="form-label">डार्क लोगो</Label>
                                        <Input
                                            className="form-control"
                                            type="file"
                                            id="formFile2"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(e, setImagePreview2)}
                                        />
                                        {imagePreview2 && (
                                            <div className="mt-3 d-flex align-item-center justify-content-center">
                                            <img src={imagePreview2} alt="Preview 2" style={{ width: '15%', borderRadius: '8px' }} />
                                            </div>
                                        )}
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Label htmlFor="formFile3" className="form-label">फेविकॉन</Label>
                                        <Input
                                            className="form-control"
                                            type="file"
                                            id="formFile3"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(e, setImagePreview3)}
                                        />
                                        {imagePreview3 && (
                                            <div className="mt-3 d-flex align-item-center justify-content-center">
                                            <img src={imagePreview3} alt="Preview 3" style={{ width: '15%', borderRadius: '8px' }} />
                                            </div>
                                        )}
                                    </Col>

                                    <Col md={12}>
                                        <div className="text-end">
                                            <button type="update" className="btn btn-primary"><span><i class="ri-save-line"></i></span> अपडेट करा</button>
                                        </div>
                                    </Col>
                                </Row>
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

export default SamanyaSetting;