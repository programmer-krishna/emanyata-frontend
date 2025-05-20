import React, { useState, useEffect } from 'react';

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import List from 'list.js';

import BreadCrumb from '../../../Components/Common/BreadCrumb';

const ReportTaluka = () => {
  
    const [entryInfo, setEntryInfo] = useState("Showing 1 to 10 of 3 entries");
        
    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };

    const [modal_delete, setmodal_delete] = useState(false);
    const tog_delete = () => {
        setmodal_delete(!modal_delete);
    };

    useEffect(() => {
        const options = {
            valueNames: ['name','status'],
            page: 10,
            pagination: true
        };

        const customerList = new List('customerList', options);

        customerList.on('updated', () => {
            const rows = document.querySelectorAll('#customerTable tbody tr');

            rows.forEach((row, index) => {
                const srNoCell = row.querySelector('th');
                if (srNoCell) {
                    // ✅ Fix: Remove the extra +1
                    srNoCell.innerHTML = customerList.i + index;
                }
            });

            // ✅ Fix for entry info
            const start = customerList.i;
            const end = customerList.i + customerList.visibleItems.length - 1;
            const total = customerList.size();

            setEntryInfo(`Showing ${start} to ${end} of ${total} entries`);
        });


        // Trigger once on mount
        setTimeout(() => {
            customerList.update();
        }, 0);
    }, []);
    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="तालुका अहवाल" pageTitle="होम"/>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                  <CardHeader className="d-flex justify-content-between align-items-center">
                                                                   <h4 className="card-title mb-0">तालुका अहवाल</h4>
                                                                   <Button
                                                                       color="success"
                                                                       className="add-btn me-1"
                                                                       id="create-btn"
                                                                       tag={Link}
                                                                       to="/तालुका"
                                                                   >w
                                                                       <i className="ri-add-line align-bottom me-1"></i> जोडा
                                                                   </Button>
                                                               </CardHeader>

                                <CardBody>
                                    <div className="listjs-table" id="customerList">
                                        <div className="table-responsive table-card mt-3 mb-1">
                                            <table className="table align-middle table-nowrap" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "50px" }}>क्रमांक</th>
                                                        <th className="sort" data-sort="name">तालुक्याचं नाव</th>
                                                        {/* <th className="sort" data-sort="email">ई-मेल</th>
                                                        <th className="sort" data-sort="phone">फोन</th> */}
                                                        <th className="sort" data-sort="status">स्टेटस</th>
                                                        <th className="sort" data-sort="action">ऍक्शन</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                                                        <td className="name">Pimpri</td>
                                                        {/* <td className="email">marycousar@velzon.com</td>
                                                        <td className="phone">580-464-4694</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2111</Link></td>
                                                        <td className="name">Shirur</td>
                                                        {/* <td className="email">johnnyevans@velzon.com</td>
                                                        <td className="phone">407-645-1767</td> */}
                                                        <td className="status"><span className="badge bg-danger-subtle text-danger text-uppercase">Inactive</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                     <tr>
                                                        <th scope="row"></th>
                                                        <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2112</Link></td>
                                                        <td className="name">Mulshi</td>
                                                        {/* <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td> */}
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <div className="edit">
                                                                    <button className="btn btn-sm btn-success edit-item-btn"
                                                                        data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                </div>
                                                                <div className="remove">
                                                                    <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
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
                                                    <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                                        orders for you search.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pagination Controls */}
                                       <div className="d-flex justify-content-between align-items-center mt-3">
                                                                                 <div>{entryInfo}</div>
                                                                                 <div className="pagination-wrap hstack gap-2">
                                                                                     <Link className="page-item pagination-prev disabled" to="#">
                                                                                         Previous
                                                                                     </Link>
                                                                                     <ul className="pagination listjs-pagination mb-0"></ul>
                                                                                     <Link className="page-item pagination-next" to="#">
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

export default ReportTaluka;