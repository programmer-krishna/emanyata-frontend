import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row, Button, Badge } from "reactstrap"
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import { useLocation, useNavigate } from "react-router-dom"

const ApplicationLog = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { id, schoolName } = location.state || {}

    document.title = `Application Log | ई मान्यता प्रणाली`

    const handleGoBack = () => {
        navigate(-1)
      }

    // Sample log data
    const logData = [
        {
            srno: "1",
            action: "Bharati Vidyapeeth Rabindranath Tagore School of Excellence Balewadi, Pune",
            date: "2023-06-15 10:30:45",
            status: "Rejected",
        },
        {
            srno: "2",
            action: "P A I H TECH ENGLISH SCHOOL KONDHWA KHURD PUNE 411048, कोंढवा खुर्द पुणे",
            date: "2023-06-18 14:22:10",
            status: "Rejected",
        },
        {
            srno: "3",
            action: "RAHUL INTERNATIONAL SCHOOL, SERVEY NO 274/275/2A/2 HINJEWADI, MULSHI",
            date: "2023-07-12 10:05:15",
            status: "Rejected",
        },
        {
            srno: "4",
            action: "RAHUL INTERNATIONAL SCHOOL, SERVEY NO 274/275/2A/2 HINJEWADI, MULSHI",
            date: "2023-06-15 10:30:45",
            status: "Rejected",
        },
        {
            srno: "5",
            action: "The Elite School And Junior College, Gat No 600, At.Koye,Po.Kurkundi,Tal.Khed,Dist. Pune",
            date: "2023-06-18 14:22:10",
            status: "Rejected",
        },
        {
            srno: "6",
            action: "The Elite School And Junior College, Gat No 600, At.Koye,Po.Kurkundi,Tal.Khed,Dist. Pune",
            date: "2023-07-12 10:05:15",
            status: "Rejected",
        },
        {
            srno: "7",
            action: "The Orbis School Keshavnagar, Pune",
            date: "2023-07-12 10:05:15",
            status: "Rejected",
        },
        {
            srno: "8",
            action: "TVIBGYOR High School Balewadi, Pune",
            date: "2023-07-12 10:05:15",
            status: "Rejected",
        },
    ]

    const getStatusBadge = (status) => {
        switch (status) {
            case "Rejected":
                return <Badge color="danger">{status}</Badge>
            default:
                return <Badge color="light">{status}</Badge>
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Application Log" pageTitle="Applications" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="card-title mb-0">Application Log</h4>
                                    </div>
                                    <div className="d-flex justify-content-end mt-2 gap-2">
                                        <Button color="primary" onClick={handleGoBack}>
                                            मागे जा
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th>एस आर क्र.</th>
                                                    <th>एक्शन</th>
                                                    <th>डेट आणि टाईम  </th>
                                                    <th>स्टेटस</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {logData.map((log, index) => (
                                                    <tr key={index}>
                                                        <td>{log.srno}</td>
                                                        <td>{log.action}</td>
                                                        <td>{log.date}</td>
                                                        <td>{getStatusBadge(log.status)}</td>
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
        </React.Fragment>
    )
}

export default ApplicationLog
