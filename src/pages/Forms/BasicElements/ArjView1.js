// backend integration of school general info data
// last updated code 
//   

import React from 'react';
import { Container, Row, Col, Card, CardBody, Table,Button, CardHeader } from 'reactstrap';
import UiContent from "../../../Components/Common/UiContent";
//import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import axios from 'axios';


const ArjView1 = () => { 
    document.title = "अर्ज तपशील";  

    const navigate = useNavigate();

    const schoolDetails = {
        name: "JAWAHAR ENGLISH MEDIUM SCHOOL",
        udise: "27251800818",
    };

    const BreadCrumb = ({ path }) => {
      return (
          <Row>
              <Col xs={12}>
                  <div className="d-flex justify-content-end">
                      <ol className="breadcrumb m-0">
                          {path.map((item, index) => (
                              <li
                                  key={index}
                                  className={`breadcrumb-item ${index === path.length - 1 ? "active" : ""}`}
                              >
                                  {index !== path.length - 1 ? (
                                      <Link to={item.link} className="text-primary" >
                                        {item.label}
                                      </Link>
                                  ) : (
                                      item.label
                                  )}
                              </li>
                          ))}
                      </ol>
                  </div>
              </Col>
          </Row>
      );
  };

  const [images, setImages] = useState({});

  const facilities = [
    "उतार",
    "संपर्क भिंत",
    "मुलीचे शौचालय",
    "मुलांचे शौचालय",
    "पिण्याची सुविधा",
    "खेळाचे मैदान",
    "शाळेचे प्रवेशद्वार / इमारत / इतर सुविधा",
    "वाचनालय, संगणक, प्रयोगशाळा किंवा किचन शेड"
  ];

  const documentData = [
    { title: 'मान्यतेचे शासन निर्णय / शासन पत्र', filename: 'arjimage1.pdf' },
    { title: 'शिक्षण उपसंचालकांचे मान्यतेचे आदेश', filename: 'arjimage2.pdf' },
    { title: 'प्रथम मान्यता आदेश / सर्व वर्गांचे नैसर्गिक वाढ आदेश', filename: 'arjimage1.pdf' },
    { title: 'संस्थेचा नमुना १ मधील मागणी अर्ज (जुनी हेरिटेज जोडू नये)', filename: 'arjimage1.pdf' },
    { title: 'संस्था आणि शिक्षणाधिकाऱ्यांचे संयुक्त खाते कायम ठेव पावती', filename: 'arjimage1.pdf' },
    { title: 'संस्था/कंपनी नोंदणी प्रमाणपत्र', filename: 'arjimage1.pdf' },
    { title: 'संस्थेच्या नावे जागा असल्याचे खरेदीखत / भाडेकरार / बक्षीसपत्र / मालमता / ७/१२', filename: 'arjimage1.pdf' },
    { title: 'ऑडिट रिपोर्ट (गेल्या १ वर्ष)', filename: 'arjimage1.pdf' },
    { title: 'फी बाबत EPTA मंजुरीच्या मिटिंगची प्रत', filename: 'arjimage1.pdf' },
    { title: 'मागील तीन वर्षांच्या वर्ग फी रचनेनुसार फी संरचना', filename: 'arjimage1.pdf' },
    { title: 'परिवहन समिती ऑनलाइन प्रत (www.schoolbussafetypune.org)', filename: 'arjimage1.pdf' },
    { title: 'प्रस्तावित शाळेवास मनुषमालिकेतील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र', filename: 'arjimage1.pdf' },
    { title: 'विध्यार्थ्यांकडून कोणतेही फी / देणगी घेत नसल्याचे मुख्याध्यापक हमीपत्र', filename: 'arjimage1.pdf' },
    { title: 'शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का', filename: 'arjimage1.pdf' }
  ];
    
  // This is for downloading all documents as a zip file

  // const handleDownloadAll = async () => {
  //   const zip = new JSZip();
  //   const folder = zip.folder("Documents");

  //   for (let i = 0; i < documentData.length; i++) {
  //     const doc = documentData[i];
  //     const response = await fetch(`${process.env.PUBLIC_URL}/assets/images/ArjView/${doc.filename}`);
  //     const blob = await response.blob();
  //     folder.file(doc.filename, blob);
  //   }

  //   zip.generateAsync({ type: "blob" }).then(content => {
  //     saveAs(content, "documents.zip");
  //   });
  // };

  // This is for downloading all documents one by one

  const handleDownloadAll = () => {
  documentData.forEach((doc) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/assets/images/ArjView/${doc.filename}`;
    link.download = doc.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

    

const [schoolId, setSchoolId] = useState(3); // sample schoolId; can be dynamic
const [udiseNo, setUdiseNo] = useState(32345678178); // sample udiseNo; can be dynamic

const [userId, setUserId] = useState(4);   // sample id ; can be dynamic 

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const [inspectionData, setInspectionData] = useState([
  {
    id: "",
    userId: "",
    schoolId: "",
    applyStatus: "",
    token: "",
    status: "",
    inspectionStatus: "",
    inspectionCompletionDate: "",
    applicationNo: "",
    visitingDate: "",
    inspectionOfficeId: "",
    submittedDate: "",
    approvedDate: "",
    expiredDate: "",
    renewDate: "",
    steps: "",
    turtiPdf: "",
    tipaniPdf: "",
    schoolInspectionPdf: "",
    docAvailableVerified: false,
    rte2009Followed: false,
    namuna2Doc: false,
    officerComment: "",
    abhiprayPdf: "",
    createdAt: "",
    updatedAt: "",
  },
]);




useEffect(() => {
    const fetchInspectionData = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/school-apply/details?schoolId=${schoolId}`);
            console.log(response);
            console.log("response.data", response.data);
            console.log("response.data[0]", response.data[0]);
            //setInspectionData(response);
          
            setLoading(false);
        } catch (err) {
            console.error("Error fetching student data:", err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    fetchInspectionData();
}, [schoolId]);



    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                <BreadCrumb 
                    path={[
                        { label: "डॅशबोर्ड", link: "/dashboard" },
                        { label: "अर्ज", link: "/अर्ज" },
                        { label: "अर्ज तपशील" } // No link for the active page
                    ]}
                />

                    <Row className="my-2">
                        <Col style={{ fontSize:"14px" }} >
                            <h1 className="fs-5 mb-3 fw-bold"> 
                                अर्ज तपशील - {schoolDetails.name || " "} ({schoolDetails.udise || " "})
                            </h1>
                            <p className='fw-semibold mb-1'><strong>Inspection Officer Details:</strong></p>
                            <p className='fw-semibold mb-1'>Name: Sunanda Wakhare</p>
                            <p className='fw-semibold mb-2'>Administrative Officer Pune MNP</p>      
                        </Col>  
                    </Row>

                    <Row>
                        <Col lg={12} > 
                            <Card>
                              <CardHeader className="d-flex justify-content-between align-items-center">
                                <div className="card-title m-2 fw-semibold" style={{fontSize:"20px"}}>अर्ज</div> 
                                  
                              </CardHeader>
                              <CardBody>

                              { /* मंजूर शाळा दस्तऐवज चेकलिस्ट */ }
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{ fontSize: "18px" }}>मंजूर शाळा दस्तऐवज चेकलिस्ट</div>
                                    <div>
                                      <Button color="primary" size="md" onClick={handleDownloadAll} >Download All</Button>
                                      <div className="form-check form-check-inline ms-3">
                                        <input className="form-check-input" type="radio" name="documentStatus" id="rejectAll" value="reject" />
                                        <label className="form-check-label" htmlFor="rejectAll">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="documentStatus" id="acceptAll" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="acceptAll">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {documentData.map((doc, idx) => (
                                        <tr key={idx}>
                                          <td>{idx + 1}</td>
                                          <td>{doc.title}</td>
                                          <td>
                                            <a
                                              href={`${process.env.PUBLIC_URL}/assets/images/ArjView/${doc.filename}`}
                                              download
                                              style={{ color: 'blue' }}
                                            >
                                              डाउनलोड करा
                                            </a>
                                          </td>
                                          <td>
                                            <div className="form-check form-check-inline">
                                              <input
                                                className="form-check-input"
                                                style={{ marginRight: "10px" }}
                                                type="radio"
                                                name={`rowStatus${idx}`}
                                                id={`reject${idx}`}
                                                value="reject"
                                              />
                                              <label className="form-check-label" htmlFor={`reject${idx}`}>नकार द्या</label>
                                            </div>
                                            <div className="form-check form-check-inline ms-3">
                                              <input
                                                className="form-check-input"
                                                style={{ marginRight: "10px" }}
                                                type="radio"
                                                name={`rowStatus${idx}`}
                                                id={`accept${idx}`}
                                                value="accept"
                                                defaultChecked
                                              />
                                              <label className="form-check-label" htmlFor={`accept${idx}`}>स्वीकारा</label>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>


                                { /* तपासणी अधिकारी अभिप्राय */ }      
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>  
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>तपासणी अधिकारी अभिप्राय</div>
                                  <Table bordered responsive>
                                    <thead className="table-light"> 
                                      <tr>
                                        <th>शिर्षक</th>
                                        <th>तपासणी अधिकारी अभिप्राय</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                      <td>शाळेस मान्यता विषयक सर्व कागदपत्रे उपलब्ध आहेत?</td>
                                      <td>-</td>
                                      </tr>
                                      <tr>
                                        <td><b>RTE 2009</b> मधील निकषानुसार सर्व भौतिक सुविधांची पूर्तता होत आहे?</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>नमुना 2 प्रमाणपत्र देण्यासाठी शिफारस आहे?</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>अभिप्राय</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी अधिकारी</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी दिनांक</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी अधिकारी अभिप्राय कामकाज</td>
                                        <td>
                                          <a
                                            href={`${process.env.PUBLIC_URL}/assets/images/ArjView/arjimage1.pdf`}
                                            download
                                            style={{ color: 'blue' }}
                                          >
                                            डाउनलोड करा
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>   
                                </div>


                                { /* तपासणी अधिकार्‍यांनी शाळेच्या भौतिक सुविधा दर्शविणाऱ्या खालील सर्व सुविधांचे
                                  जिओ टॅगिंगसह <b>GPS कॅमेऱ्याने फोटो जोडावे</b>  */ }
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="fw-semibold mb-3" style={{ fontSize: "18px" }}>
                                    तपासणी अधिकार्‍यांनी शाळेच्या भौतिक सुविधा दर्शविणाऱ्या खालील सर्व सुविधांचे
                                    जिओ टॅगिंगसह <b>GPS कॅमेऱ्याने फोटो जोडावे</b>
                                  </div>
                                  <Table bordered responsive>
                                    <thead className="table-light">
                                      <tr>
                                        <th style={{ width: '30%' }}>शिर्षक</th>
                                        <th style={{ width: '70%' }}>प्रतिमा</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {facilities.map((facility, index) => (
                                        <tr key={index}>
                                          <td>{facility}</td>
                                          <td>
                                            <div className="d-flex flex-wrap gap-2">
                                              {images[index] && images[index].length > 0 ? (
                                                images[index].map((imgUrl, imgIdx) => (
                                                  <div key={imgIdx} className="position-relative" style={{ width: '80px', height: '80px' }}>
                                                    <img
                                                      src={imgUrl}
                                                      alt="facility"
                                                      className="img-thumbnail"
                                                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                  </div>
                                                ))
                                              ) : (
                                                <div style={{ width: '80px', height: '80px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                  <span className="text-muted" style={{ fontSize: '12px' }}>प्रतिमा नाही</span>
                                                </div>
                                              )}
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>
                                                             
                             
                                { /* last buttons  */}

                                <div className="d-flex justify-content-end mt-4" style={{ gap: '10px' }}>
                                  <Button
                                    color="primary"
                                    size="md"
                                    onClick={() => navigate('/अर्ज')}
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, var(--bs-primary), var(--bs-info))',
                                      color: 'white', // Ensure text is readable on the gradient
                                      border: 'none', // Remove default button border
                                    }}
                                  >
                                    मागे जा
                                  </Button>
                                  <Button
                                    color="info"
                                    size="md"
                                    onClick={() => navigate('/अर्ज')} 
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, var(--bs-primary), var(--bs-info))',
                                      color: 'white',
                                      border: 'none',
                                    }}
                                  >
                                    Update Application Status
                                  </Button>
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

export default ArjView1;


