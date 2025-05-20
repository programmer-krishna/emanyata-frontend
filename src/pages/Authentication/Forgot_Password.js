import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
  Spinner
} from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import * as Yup from "yup";
import { useFormik } from "formik";

const VerificationPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate here

  const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    background: 'linear-gradient(to bottom, transparent 0%, transparent 58%, #f8f8fa 58%, #f8f8fa 100%)',
    overflow: 'hidden'
  };

  const particlesContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 1
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '20px',
    left: 0,
    width: '100%',
    textAlign: 'center',
    color: '#878a99',
    zIndex: 1
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      identifier: '',
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .required("कृपया ईमेल किंवा मोबाईल नंबर प्रविष्ट करा")
        .test(
          'is-email-or-mobile',
          'कृपया वैध ईमेल किंवा मोबाईल नंबर प्रविष्ट करा',
          (value) => {
            if (!value) return false;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobileRegex = /^[6-9]\d{9}$/;
            return emailRegex.test(value) || mobileRegex.test(value);
          }
        )
    }),
    onSubmit: (values) => {
      setLoading(true);
      setError(null);
      console.log("Verification Identifier:", values.identifier);
      // Simulate successful verification and then navigate
      setTimeout(() => {
        setLoading(false);
        navigate('/ओटीपी_पास'); // Navigate to the OTP page after (simulated) verification
      }, 1500);
    }
  });

  document.title = "Verification | ई मान्यता प्रणाली";

  return (
    <React.Fragment>
      <div style={wrapperStyle}>
        <div style={particlesContainerStyle}>
          <ParticlesAuth />
        </div>
        <Container style={contentContainerStyle}>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="mt-4 shadow-lg border-0 rounded-4">
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h4 className="text-dark fw-bold fs-3">ई मान्यता प्रणाली</h4>
                    <p className="fs-6 fw-medium text-muted" style={{ letterSpacing: "0.5px" }}>
                      कृपया ईमेल किंवा मोबाईल नंबर प्रविष्ट करा
                    </p>
                  </div>

                  {error && <Alert color="danger" className="mt-3 text-center">{error}</Alert>}

                  <div className="p-2 mt-4">
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                        <Label htmlFor="identifier" className="form-label visually-hidden">ईमेल किंवा मोबाईल नंबर</Label>
                        <div className="input-group">
                          <span className="input-group-text"><i className="ri-mail-line"></i></span>
                          <Input
                            name="identifier"
                            id="identifier"
                            className="form-control"
                            placeholder="कृपया ईमेल किंवा मोबाईल नंबर प्रविष्ट करा"
                            type="text"
                            value={validation.values.identifier}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={validation.touched.identifier && !!validation.errors.identifier}
                          />
                        </div>
                        {validation.touched.identifier && validation.errors.identifier ? (
                          <FormFeedback type="invalid">{validation.errors.identifier}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mt-4">
                        <Button
                          className="w-100"
                          type="submit"
                          disabled={loading}
                          style={{ backgroundColor: 'rgb(255, 128, 0)', borderColor: 'rgb(255, 128, 0)' }}
                        >
                          {loading && <Spinner size="sm" className="me-2" />}
                          पुष्टी करा
                        </Button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  <Link to="/साइन_इन_करा" className="fw-semibold text-primary text-decoration-underline">
                    लॉगिन वर परत जा
                  </Link>
                </p>
              </div>

            </Col>
          </Row>
        </Container>

        <div style={footerStyle}>
          © {new Date().getFullYear()} YourAppName. Crafted with <i className="mdi mdi-heart text-danger"></i> by YourBrand
        </div>

      </div>
    </React.Fragment>
  );
};

export default VerificationPage;