import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

import nikitaImage from '../../../assets/images/users/avatar-7.jpg';
const User_Report = () => {
    const [modal_list, setModalList] = useState(false);
    const [modal_delete, setModalDelete] = useState(false);
    const navigate = useNavigate();
        navigate("/User-Report");
const PreviewCardHeader = ({ title, buttonLabel, onButtonClick }) => (
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{title}</h5>
                    <Button color="primary" onClick={onButtonClick}>
                        {buttonLabel}
                    </Button>
                </div>
            );
        
    const staticData = [
        {
            id: 1,
            नाव: 'Nikita Darekar',
            रोल: "Officer",
            फोन: '1234567890',
            इमेल: 'nikita@gmail.com',
            फोटो: 'https://via.placeholder.com/40',  // Replace with actual image URL
            स्थिती: 'Active'
        },
        {
            id: 2,
            नाव: 'Mayuri Thorat',
            रोल: "Assistant Engineer",
            फोन: '9876543210',
            इमेल: 'mayuri@gmail.com',
            फोटो: 'https://via.placeholder.com/40',
            स्थिती: 'Inactive'
        }
    ];

    const tog_list = () => setModalList(!modal_list);
    const tog_delete = () => setModalDelete(!modal_delete);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                            <PreviewCardHeader
                                    title="यूजर-अहवाल"
                                    buttonLabel="माहिती जोडा "
                                    onButtonClick={() => navigate('/यूजर')}
                                />
                               
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Action</th>
                                                <th>फोटो</th>
                                                <th>नाव</th>
                                                <th>रोल</th>
                                                <th>फोन</th>
                                                <th>इमेल</th>
                                                <th>स्टेटस</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {staticData.map((data) => (
                                                <tr key={data.id}>
                                                    <td>{data.id}</td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <Button size="sm" color="success" onClick={navigate('/User-Report')}>Edit</Button>
                                                            <Button size="sm" color="danger" onClick={navigate('/User-Report')}>Delete</Button>
                                                            <Button size="sm" color="primary">View</Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                        src={nikitaImage}
                                                        alt="Nikita Darekar"
                                                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                        />
                                                    </td>
                                                    <td>{data.नाव}</td>
                                                    <td>{data.रोल}</td>
                                                    <td>{data.फोन}</td>
                                                    <td>{data.इमेल}</td>
                                                    <td>{data.स्थिती}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Add/Edit Modal */}
            <Modal isOpen={modal_list} toggle={tog_list}>
                <ModalHeader toggle={tog_list}>Edit Record</ModalHeader>
                <ModalBody>
                    <p>This is a static demo modal. Editing logic not implemented.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={tog_list}>Save</Button>
                    <Button color="secondary" onClick={tog_list}>Cancel</Button>
                </ModalFooter>
            </Modal>

            {/* Delete Modal */}
            <Modal isOpen={modal_delete} toggle={tog_delete}>
                <ModalHeader toggle={tog_delete}>Delete Record</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this record?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={tog_delete}>Delete</Button>
                    <Button color="secondary" onClick={tog_delete}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default User_Report;
