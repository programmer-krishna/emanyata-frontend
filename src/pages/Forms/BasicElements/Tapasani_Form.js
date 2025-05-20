import React, { useState } from 'react';
import {
    Button, Card, CardBody, CardHeader, Col, Container,
    Row, Form, FormLabel, FormControl, FormGroup, FormCheck
} from 'react-bootstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { useNavigate } from 'react-router-dom'; //
const Tapasani_Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNo: '',
        padnam: '',
        photo: null,
        status: 'active',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: '' });
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'नाव आवश्यक आहे.';
        if (!formData.email) newErrors.email = 'ई-मेल आवश्यक आहे.';
        if (!formData.password) newErrors.password = 'पासवर्ड आवश्यक आहे.';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'पुष्टी पासवर्ड आवश्यक आहे.';
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'पासवर्ड आणि पुष्टी पासवर्ड जुळत नाहीत.';
        }
        const cleanedMobile = formData.mobileNo.replace(/\s/g, '');

        if (!cleanedMobile) {
            newErrors.mobileNo = 'मोबाईल नंबर आवश्यक आहे.';
        } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
            newErrors.mobileNo = 'वैध मोबाईल नंबर प्रविष्ट करा.';
        }

        if (!formData.padnam) newErrors.padnam = 'पदनाम आवश्यक आहे.';

        return newErrors;
    };

    const navigate = useNavigate(); // 👈 add this inside your component

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
            return;
        }

        console.log('फॉर्म डेटा सबमिट केला:', {
            ...formData,
            photo: formData.photo ? formData.photo.name : null,
        });

        setSuccessMessage('फॉर्म यशस्वीरित्या सबमिट झाला!');
        setErrors({});

        // Hide success message after 3 seconds (not 5)
        setTimeout(() => {
            setSuccessMessage('');
            // 👉 Navigate after success message disappears
            navigate('/तपासणी-अहवाल');
        }, 3000); // 3000 milliseconds = 3 seconds

        // Reset form data immediately
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobileNo: '',
            padnam: '',
            photo: null,
            status: 'active',
        });

        // Clear file input
        const fileInput = document.getElementById("formPhoto");
        if (fileInput) {
            fileInput.value = '';
        }
    };


    const redAsterisk = <span style={{ color: 'red' }}>*</span>;

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="तपासणी तयार करा" pageTitle="होम" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title mb-0">तपासणी तयार करा</h4>
                                </CardHeader>
                                <CardBody>
                                    {successMessage && (
                                        <div className="alert alert-success">{successMessage}</div>
                                    )}

                                    <Form onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <FormGroup controlId="formName">
                                                    <FormLabel>नाव {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                                        placeholder="तुमचे पूर्ण नाव प्रविष्ट करा"
                                                        isInvalid={!!errors.name}
                                                    />
                                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formEmail">
                                                    <FormLabel>ई-मेल {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                                        placeholder="तुमचा ई-मेल आयडी प्रविष्ट करा"
                                                        isInvalid={!!errors.email}
                                                    />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formPassword">
                                                    <FormLabel>पासवर्ड {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="password"
                                                        value={formData.password}
                                                        onChange={(e) => handleInputChange('password', e.target.value)}
                                                        placeholder="नवीन पासवर्ड तयार करा"
                                                        isInvalid={!!errors.password}
                                                    />
                                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formConfirmPassword">
                                                    <FormLabel>पासवर्डची पुष्टी करा {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="password"
                                                        value={formData.confirmPassword}
                                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                                        placeholder="तुमचा पासवर्ड पुन्हा प्रविष्ट करा"
                                                        isInvalid={!!errors.confirmPassword}
                                                    />
                                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formMobileNo">
                                                    <FormLabel>मोबाईल नंबर {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="tel"
                                                        value={formData.mobileNo}
                                                        onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                                                        placeholder="तुमचा १० अंकी मोबाईल नंबर प्रविष्ट करा"
                                                        isInvalid={!!errors.mobileNo}
                                                    />
                                                    {errors.mobileNo && <div className="text-danger">{errors.mobileNo}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formPadnam">
                                                    <FormLabel>पदनाम {redAsterisk}</FormLabel>
                                                    <FormControl
                                                        type="text"
                                                        value={formData.padnam}
                                                        onChange={(e) => handleInputChange('padnam', e.target.value)}
                                                        placeholder="तुमचे पदनाम प्रविष्ट करा "
                                                        isInvalid={!!errors.padnam}
                                                    />
                                                    {errors.padnam && <div className="text-danger">{errors.padnam}</div>}
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formPhoto">
                                                    <FormLabel>फोटो अपलोड करा</FormLabel>
                                                    <FormControl
                                                        type="file"
                                                        id="formPhoto"
                                                        onChange={handlePhotoChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup controlId="formStatus">
                                                    <FormLabel>स्टेटस</FormLabel>
                                                    <div>
                                                        <FormCheck
                                                            inline
                                                            label="Active (सक्रिय)"
                                                            type="radio"
                                                            name="status"
                                                            value="active"
                                                            checked={formData.status === 'active'}
                                                            onChange={(e) => handleInputChange('status', e.target.value)}
                                                        />
                                                        <FormCheck
                                                            inline
                                                            label="Inactive (निष्क्रिय)"
                                                            type="radio"
                                                            name="status"
                                                            value="inactive"
                                                            checked={formData.status === 'inactive'}
                                                            onChange={(e) => handleInputChange('status', e.target.value)}
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button type="submit" className="mt-3">
                                            सबमिट करा
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Tapasani_Form;
