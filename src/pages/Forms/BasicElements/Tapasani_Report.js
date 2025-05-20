import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import List from 'list.js';
import Swal from 'sweetalert2';

const Tapasani_Report = () => {
    const [modal_list, setmodal_list] = useState(false);
    const [modal_delete, setmodal_delete] = useState(false);
    const [entryInfo, setEntryInfo] = useState("Showing 1 to 10 of 3 entries");

    const tog_list = () => {
        setmodal_list(!modal_list);
    };

    const tog_delete = () => {
        setmodal_delete(!modal_delete);
    };

    const handleRemoveClick = () => {
        Swal.fire({
            icon: 'warning',
            title: 'तुला खात्री आहे?',
            text: 'तुमची ही एंट्री एकदा हटविल्यावर परत मिळवता येणार नाही!',
            showCancelButton: true,
            confirmButtonText: 'होय, हे हटवा!',
            cancelButtonText: 'रद्द करा',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // 👉 Call your delete function here
                console.log("Deleted");
                Swal.fire('हटविले!', 'तुमची एंट्री हटविण्यात आली आहे.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('रद्द केले', 'तुमची एंट्री सुरक्षित आहे :)', 'info');
            }
        });
    };

    useEffect(() => {
        const options = {
            valueNames: ['customer_name', 'email', 'phone', 'status'],
            page: 10,
            pagination: true
        };

        const customerList = new List('customerList', options);

        // Store reference globally
        window.myCustomerList = customerList;

        customerList.on('updated', () => {
            const rows = document.querySelectorAll('#customerTable tbody tr');

            rows.forEach((row, index) => {
                const srNoCell = row.querySelector('th');
                if (srNoCell) {
                    const currentPage = Math.floor(customerList.i / options.page);
                    const startNumber = (currentPage * options.page) + 1;
                    srNoCell.innerHTML = startNumber + index;
                }
            });

            const currentPage = Math.floor(customerList.i / options.page);
            const start = (currentPage * options.page) + 1;
            const end = start + customerList.visibleItems.length - 1;
            const total = customerList.size();

            setEntryInfo(`Showing ${start} to ${end} of ${total} entries`);

            // Enable/disable your custom Prev/Next links
            const prevBtn = document.querySelector('.pagination-prev');
            const nextBtn = document.querySelector('.pagination-next');

            if (prevBtn && nextBtn) {
                prevBtn.classList.toggle('disabled', customerList.i === 1);
                nextBtn.classList.toggle('disabled', customerList.i + customerList.page >= customerList.size());
            }
        });

        setTimeout(() => {
            customerList.update();
        }, 0);
    }, []);
    const handleNext = () => {
        const list = window.myCustomerList;
        if (list && list.i + list.page < list.size()) {
            list.show(list.i + list.page, list.page);
        }
    };

    const handlePrev = () => {
        const list = window.myCustomerList;
        if (list && list.i > 1) {
            list.show(list.i - list.page, list.page);
        }
    };




    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="तपासणी" pageTitle="होम" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title mb-0">तपासणी</h4>
                                    <Button
                                        color="success"
                                        className="add-btn me-1"
                                        id="create-btn"
                                        tag={Link}
                                        to="/तपासणी"
                                    >
                                        <i className="ri-add-line align-bottom me-1"></i> जोडा
                                    </Button>

                                </CardHeader>

                                <CardBody>
                                    <div className="listjs-table" id="customerList">
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm-auto"></Col>
                                        </Row>

                                        <div className="table-responsive table-card mt-3 mb-1">
                                            <table className="table align-middle table-nowrap" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "50px" }}>क्रमांक</th>
                                                        <th className="sort" data-sort="customer_name">नाव</th>
                                                        <th className="sort" data-sort="email">ई-मेल</th>
                                                        <th className="sort" data-sort="phone">फोन</th>
                                                        <th className="sort" data-sort="status">स्टेटस</th>
                                                        <th className="sort" data-sort="action">ऍक्शन</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    {/* Sample Data */}
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* Add more rows here as needed */}
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="customer_name">Mary Cousar</td>
                                                        <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button
                                                                        className="btn btn-sm btn-danger remove-item-btn"
                                                                        onClick={handleRemoveClick}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="noresult" style={{ display: "none" }}>
                                                <div className="text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                                        colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}>
                                                    </lord-icon>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We did not find any entries matching your search.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div>{entryInfo}</div>
                                            <div className="pagination-wrap hstack gap-2">
                                                <Link className="page-item pagination-prev" to="#" onClick={handlePrev}>
                                                    Previous
                                                </Link>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <Link className="page-item pagination-next" to="#" onClick={handleNext}>
                                                    Next
                                                </Link>
                                            </div>
                                        </div>

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

export default Tapasani_Report;
