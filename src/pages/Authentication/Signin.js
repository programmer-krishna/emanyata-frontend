import React, { useEffect, useState } from 'react';
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
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth"; // Corrected import path
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter"; // Corrected import path
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser, socialLogin, resetLoginFlag } from "../../slices/thunks";
import { createSelector } from 'reselect';

// Custom CSS for the login button
const loginButtonStyles = {
    backgroundColor: 'rgb(255, 128, 0)',
    borderColor: 'rgb(255, 128, 0)',
    color: '#fff',
    width: '100%',
};

const Login = (props) => {
    const dispatch = useDispatch();

    const selectLayoutState = (state) => state;
    const loginpageData = createSelector(
        selectLayoutState,
        (state) => ({
            user: state.Account.user,
            error: state.Login.error,
            loading: state.Login.loading,
            errorMsg: state.Login.errorMsg,
        })
    );

    const {
        user, error, loading, errorMsg
    } = useSelector(loginpageData);

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);

    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.user.confirm_password;
            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("कृपया आपले ईमेल प्रविष्ट करा"),
            password: Yup.string().required("कृपया आपला पासवर्ड प्रविष्ट करा"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.router.navigate));
        }
    });

    const signIn = type => {
        dispatch(socialLogin(type, props.router.navigate));
    };

    const socialResponse = type => {
        signIn(type);
    };

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, errorMsg]);

    document.title = "Login | ई मान्यता प्रणाली";

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4 shadow-lg border-0 rounded-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h4 className="text-dark fw-bold fs-3">ई मान्यता प्रणाली</h4>
                                            <p className="fs-6 fw-medium" style={{ color: "#000", letterSpacing: "0.5px" }}>
                                                शाळेसाठी लॉगिन करा
                                            </p>
                                        </div>

                                        {error && <Alert color="danger">{error}</Alert>}

                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                            >
                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">मोबाईल किंवा ईमेल आयडी</Label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="ri-user-line"></i></span>
                                                        <Input
                                                            name="email"
                                                            type="email"
                                                            placeholder="ईमेल प्रविष्ट करा"
                                                            value={validation.values.email || ""}
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={validation.touched.email && !!validation.errors.email}
                                                        />
                                                    </div>
                                                    {validation.touched.email && validation.errors.email && (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    )}
                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="password" className="form-label">पासवर्ड</Label>
                                                    <div className="input-group auth-pass-inputgroup">
                                                        <span className="input-group-text"><i className="ri-lock-password-line"></i></span>
                                                        <Input
                                                            name="password"
                                                            type={passwordShow ? "text" : "password"}
                                                            placeholder="पासवर्ड प्रविष्ट करा"
                                                            value={validation.values.password || ""}
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={validation.touched.password && !!validation.errors.password}
                                                        />
                                                        <button
                                                            className="btn btn-light"
                                                            type="button"
                                                            onClick={() => setPasswordShow(!passwordShow)}
                                                        >
                                                            <i className={passwordShow ? "ri-eye-off-line" : "ri-eye-line"} />
                                                        </button>
                                                    </div>
                                                    {validation.touched.password && validation.errors.password && (
                                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                    )}
                                                </div>

                                                <div className="form-check mb-3 d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <Input className="form-check-input" type="checkbox" id="auth-remember-check" />
                                                        <Label className="form-check-label" htmlFor="auth-remember-check">पासवर्ड लक्षात ठेवा</Label>
                                                    </div>
                                                    <div>
                                                        <Link to="/पासवर्ड_विसरला" className="text-primary">पासवर्ड विसरलात?</Link>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <Button
                                                        className="btn text-center"
                                                        type="submit"
                                                        disabled={loading}
                                                        style={loginButtonStyles}
                                                    >
                                                        {loading && <Spinner size="sm" className="me-2" />}
                                                        लॉगिन इन
                                                    </Button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <h6 className="text-muted">यासह लॉगिन इन करा</h6>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <Button color="light" className="btn-icon rounded-circle me-2" onClick={() => socialResponse("facebook")}>
                                                            <i className="ri-facebook-fill text-primary fs-16" />
                                                        </Button>
                                                        <Button color="light" className="btn-icon rounded-circle me-2" onClick={() => socialResponse("google")}>
                                                            <i className="ri-google-fill text-danger fs-16" />
                                                        </Button>
                                                        <Button color="light" className="btn-icon rounded-circle">
                                                            <i className="ri-twitter-fill text-info fs-16" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                               
                                <div className="mt-4 text-center">
                                    <p className="mb-4">
                                        नवीन खाते तयार करा
                                        <Link to="/साइनअप" className="fw-semibold text-primary ms-1">
                                            साइन अप
                                        </Link>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(Login);

