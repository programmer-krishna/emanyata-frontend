// backend integration updated code 
// School Info integration 
// School General Info integration
// Bhautik suvidha integration 
// Student Count integration 
// Other Facility integration
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


const ArjView = () => { 
    document.title = "अर्ज तपशील";  

    const navigate = useNavigate();

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



// schoolInfo backend integration 

  const [schoolId, setSchoolId] = useState(1); // sample schoolId; can be dynamic
  const [udiseNo, setUdiseNo] = useState(32345678178); // sample udiseNo; can be dynamic
  const [schoolGenInfoId, setSchoolGenInfoId] = useState(3);   // sample id ; can be dynamic 
  

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [schoolInfo, setSchoolInfo] = useState({
  id: "",
  schoolName: "",
  udiseNo: "",
  transactionalAddress: "",
  district: "",
  userId: "",
  talukaId: "",
  villageId: "",
  pincode: "",
  telephoneNumber: "",
  schoolMobile: "",
  policeStation: "",
  schoolType: "",
  createdAt: "",
  updatedAt: "",
  talukaName: "",
  villageName: "",
  schoolEmail: "",
});


useEffect(() => {
    const fetchSchoolInfo = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/schools/get/' + udiseNo);
           // console.log(response.data);
            setSchoolInfo(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching student data:", err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    fetchSchoolInfo();
}, [udiseNo]);


// School General Info backend integration

const [schoolGenInfo, setSchoolGenInfo] = useState({
  id: "",
  schoolAddress: "",
  addressMentionedInGovernmentApprovalDocument: "",
  schoolEstablishmentYear: "",
  dateOfFirstCommencementOfSchool: "",
  schoolAcademicSession: "",
  schoolTimeFullTime: "",
  schoolTimeHalfTime: "",
  academicLearningTimeForEachClass: "",
  lunchTimeForEachClass: "",
  sportsAndPhysicalEducationTimeForEachClass: "",
  nameOfTrustSocietyManagementCommittee: "",
  registrationNo: "",
  underTheSocietiesRegistrationAct1860: "",
  underTheMumbaiPublicTrusteeSystemAct1950: "",
  tillWhatPeriodTheRegistrationOfTrust: "",
  isThereEvidenceThatTheTrust: "",
  schoolUserName: "",
  schoolUserDegisnation: "",
  schoolUserAddress: "",
  schoolUserTelephone: "",
  accountYear: "",
  accountIncome: "",
  accountExpense: "",
  accountBalance: "",
  createdAt: "",
  updatedAt: "",
  applicationId: "",
  forWhichYearYouWantToApplyForACertificate: "",
  yearOfFoundationzOfSchool: "",
  dateOfFirstOpeningOfSchool: "",
  lowerStandard: "",
  higherStandard: "",
  schoolArea: "",
  mediumOfInstruction: "",
  schoolBoard: "",
  sangsthaCompanyName: "",
  sansthaCompanyHasPurposeForOnlyEducationService: "",
  isSchoolOpenWhereAddressMentionedInApproval: "",
  ifSansthaIsHandoverToSomeone: "",
  doYouHaveMaharastraShashanManyataNo: "",
  maharastraShashanApprovalNumber: "",
  maharastraShashanApprovalDate: "",
  doYouHaveShikshanUpsanchalakApproval: "",
  shikshanUpsanchalakApprovalDate: "",
  shikshanUpsanchalakApprovalNumber: "",
  doYouHavePrathamManyataCertificate: "",
  prathamManyataNumber: "",
  prathamManyataDate: "",
  doYouRunOnGovernmentNoObjectionCertificate: "",
  noObjectionCertificateNumber: "",
  noObjectionCertificateDate: "",
  whetherSchoolIsMovedToAnotherLocation: "",
  members: "",
  simpleHigherStandard: "",
  simpleLowerStandard: "",
  udiseLowerStandard: "",
  udiseHigherStandard: "",
  isThereAnAffiliationCertificate: "",
  affiliationCertificateNumber: "",
  affiliationCertificateDate: "",
  section1InspectionApproval: "",
  section2InspectionApproval: "",
  section3InspectionApproval: "",
  section1InspectionComment: "",
  section2InspectionComment: "",
  section3InspectionComment: ""
});



useEffect(() => {
    const fetchSchoolGenInfo = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/school-general-info/' + schoolGenInfoId);
            console.log(response.data);
            setSchoolGenInfo(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching student data:", err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    fetchSchoolGenInfo();
}, [schoolGenInfoId]);



// Bhautik suvidha backend integration

  const [facilityData, setFacilityData] = useState({
    id: "",
    schoolId: "",
    classroom: "",
    officeRoom: "",
    kitchen: "",
    separateToiletsForBoysAndGirls: "",
    drinkingWaterFacility: "",
    createdAt: "",
    updatedAt: "",
    applicationId: "",
    whetherSchoolIsMovedToAnotherLocation: "",
    typeOfProofAvailableAndItsDate: "",
    forYouTakePropertyDocumentType: "",
    areaSqM: "",
    totalAreaSqM: "",
    schoolTotalAreaSqM: "",
    principalCount: "",
    principalArea: "",
    officeCount: "",
    officeArea: "",
    staffCount: "",
    staffArea: "",
    storageCount: "",
    storageArea: "",
    classroomCount: "",
    classroomArea: "",
    labCount: "",
    labArea: "",
    compCount: "",
    compArea: "",
    libraryCount: "",
    libraryArea: "",
    schoolTotalCount: "",
    schoolTotalArea: "",
    westernToiletCount: "",
    toiletAvailableFacilityDetails: "",
    seperateBoysToiletCount: "",
    seperateBoysToiletFacilityDetails: "",
    seperateBoysWashroomCount: "",
    seperateBoysWashroomFacilityDetails: "",
    seperateBoysDrinkingWaterCount: "",
    seperateBoysDrinkingWaterFacilityDetails: "",
    seperateGirlsToiletCount: "",
    seperateGirlsToiletFacilityDetails: "",
    seperateGirlsWashroomCount: "",
    seperateGirlsWashroomFacilityDetails: "",
    seperateGirlsDrinkingWaterCount: "",
    seperateGirlsDrinkingWaterFacilityDetails: "",
    rampRoad: "",
    rocksOnTheSideOfTheRamp: "",
    rampFacilityDetails: "",
    roomNumber: "",
    theRoofIsSolidRcc: "",
    fireWarrantyCylinderNo: "",
    medicalPrimaryBoxNumber: "",
    cctvNo: "",
    plaquesInFacadesOfSchoolRecognition: "",
    aRampForBarrierFreeAccess: "",
    areaOfPlayground: "",
    areaOfPlaygroundDetails: "",
    retainingWallCompound: "",
    entranceWithProtectiveWallAndIronGate: "",
    kitchenShed: "",
    kitchenShedDetails: "",
    waterTapCount: "",
    waterTankCapacity: "",
    actualAvailableFacilityDetailsTap: "",
    actualAvailableFacilityDetailsWater: "",
    section1InspectionApproval: "",
    section2InspectionApproval: "",
    section3InspectionApproval: "",
    section4InspectionApproval: "",
    section5InspectionApproval: "",
    section6InspectionApproval: "",
    section1InspectionComment: "",
    section2InspectionComment: "",
    section3InspectionComment: "",
    section4InspectionComment: "",
    section5InspectionComment: "",
    section6InspectionComment: ""
  });
  
  
  useEffect(() => {
      const fetchFacilityData = async () => {
          try {
              const response = await axios.post('http://localhost:8080/api/bhautic-suvidha/getBySchoolId/' + schoolId);
              setFacilityData(response.data); // extract the 'data' field from response
              setLoading(false);
              console.log(response.data);   
              console.log(facilityData);   
                                    
  
          } catch (err) {
              console.error("Error fetching facility data:", err);
              setError("Failed to fetch data");
              setLoading(false);
          }
      };
  
      fetchFacilityData();
  }, [schoolId]);



  // Student Count backend integration 

  const [studentCountData, setStudentCountData] = useState({ 
    id: null,
    schoolId: null,
    totalBoys: "",
    totalGirls: "",
    total: "",
    lower: "",
    higher: "",
    createdAt: "",
    updatedAt: "",
    applicationId: null,
    inspectionAppoval: "",
    inspectionComment: ""
  });

const [studentCountStatus, setStudentCountStatus] = useState("accept");

const [studentData, setStudentData] = useState({ boys: [], girls: [] });

const total = studentData.boys.map((val, idx) => val + (studentData.girls[idx] || 0));
const totalBoys = studentData.boys.reduce((acc, val) => acc + val, 0);
const totalGirls = studentData.girls.reduce((acc, val) => acc + val, 0);
const totalStudents = totalBoys + totalGirls;


useEffect(() => {
    const fetchStudentCountData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/student-counts/school/' + schoolId);
            const data = response.data;
            console.log("Student Count Data:", data);

            const parsedBoys = JSON.parse(data.totalBoys);
            const parsedGirls = JSON.parse(data.totalGirls);

            const classOrder = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];

            const boysArray = classOrder.map(classKey => parseInt(parsedBoys[classKey] || 0, 10));
            const girlsArray = classOrder.map(classKey => parseInt(parsedGirls[classKey] || 0, 10));

            setStudentCountData(data);
            setStudentData({ boys: boysArray, girls: girlsArray });

            setLoading(false);
        } catch (err) {
            console.error("Error fetching student data:", err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    fetchStudentCountData();
}, [schoolId]);



// Other Facility Backend integration

const [resourceAvailability, setResourceAvailability] = useState({
  id: "",
  schoolId: "",
  areAllFacilitiesAccessibleWithoutHindrance: "",
  studyTeachingMaterials: "",
  sportsAndSportsEquipment: "",
  libraryBookFacilityBooks: "",
  typeAndNumberOfDrinkingWaterFacilities: "",
  sanitaryCondition: "",
  typeOfToilets: "",
  numberOfSeparateToiletFacilitiesForBoys: "",
  numberOfSeparateToiletFacilitiesForGirls: "",
  divisionWiseInformation: "",
  studentPerformanceMethod: "",
  isSchoolPressureToGiveThirdPartyExam: "",
  createdAt: "",
  updatedAt: "",
  applicationId: "",
  minimum200DaysOf800ClockHoursForPrimaryAndHigher: "",
  numberOfBooksAvailableForStudentReadingInTheLibrary: "",
  numberOfSportsAndSportsLiterature: "",
  numberOfReferenceBooksAvailableForTeacherTraining: "",
  hoursOfTeachingPerWeek: "",
  sufficientEducationalMaterialInEachClassAsRequired: "",
  magzinBooksCount: "",
  newspaperAndTotalCount: "",
  inspectionApproval: "",
  inspectionComment: ""
});

useEffect(() => {
    const fetchResourceAvailability = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/other-facility/get/' + schoolId);
           // console.log(response.data);
            setResourceAvailability(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching student data:", err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    fetchResourceAvailability();
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
                                अर्ज तपशील - {schoolInfo.schoolName || " "} ({schoolInfo.udiseNo || ""})
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
                                
                              { /* शाळेची माहिती */ }
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px'}}>
                                  <div className="mb-2 fw-semibold" style={{fontSize:"18px"}} >शाळेची माहिती</div> 
                                  <Table bordered>
                                    <thead className='table-light'>
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>     
                                      </tr>   
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <th>शाळेचे नाव</th> 
                                        <td>{schoolInfo.schoolName}</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <th>शासन व उपसंचालन आदेशात नमूद केलेला पत्ता</th>
                                        <td>{schoolInfo.transactionalAddress}</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <th>जिल्हा</th>
                                        <td>{schoolInfo.district}</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <th>तालुका</th>
                                        <td>{schoolInfo.talukaName}</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <th>गाव/शहर</th>
                                        <td>{schoolInfo.villageName}</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <th>पिनकोड</th>
                                        <td>{schoolInfo.pincode}</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <th>शाळेचा मोबाईल नंबर</th>
                                        <td>{schoolInfo.schoolMobile}</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <th>शाळेचा ईमेल आयडी</th>
                                        <td>{schoolInfo.schoolEmail}</td>
                                      </tr>
                                      <tr>
                                        <td>9</td>
                                        <th>शाळेचा प्रकार</th>
                                        <td>{schoolInfo.schoolType}</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <th>Udise No</th>
                                        <td>{schoolInfo.udiseNo}</td>
                                      </tr>
                                      <tr>
                                        <td>11</td>
                                        <th>Application Submitted Date</th>
                                        <td>{schoolInfo.createdAt ? schoolInfo.createdAt.split("T")[0] : ""}</td>
                                      </tr>
                                      <tr>
                                        <td>12</td>
                                        <th>Application Resubmitted Date</th>
                                        <td>{schoolInfo.updatedAt ? schoolInfo.updatedAt.split("T")[0] : "" }</td>
                                      </tr> 
                                    </tbody>
                                  </Table>
                                </div>


                                { /* शाळेची सामान्य माहिती */ } 
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}}>सामान्य माहिती</div>   
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="infoStatus" id="reject" value="reject" />
                                        <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="infoStatus" id="accept" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>गूगल लोकेशन लिंक</td>
                                        <td>
                                          {schoolGenInfo.schoolAddress}{' '}
                                          <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolGenInfo.schoolAddress)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: '#0d6efd' }}
                                          >
                                            (Open in Map)
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>स्व मान्यता (नमुना - २) प्रमाणपत्र मागणी कालावधी</td>
                                        <td>{schoolGenInfo.tillWhatPeriodTheRegistrationOfTrust}</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>शासन मान्यता दस्तऐवजात नमूद केलेला पत्ता</td>
                                        <td>{schoolGenInfo.addressMentionedInGovernmentApprovalDocument}</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शाळेच्या स्थापनेचे वर्ष</td>
                                        <td>{schoolGenInfo.schoolEstablishmentYear}</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>प्रथम शाळा सुरु दिनांक</td>
                                        <td>{schoolGenInfo.dateOfFirstCommencementOfSchool}</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>कोणत्या इयत्तेसाठी स्वमान्यता प्रमाणपत्र पाहिजे </td>
                                        <td>{schoolGenInfo.lowerStandard} - {schoolGenInfo.higherStandard}</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>शाळेचे क्षेत्र</td>
                                        <td>{schoolGenInfo.schoolArea}</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <td>सरल प्रणालीत सुरु असलेले वर्ग </td>
                                        <td>{schoolGenInfo.simpleLowerStandard} - {schoolGenInfo.simpleHigherStandard}</td>
                                      </tr>
                                      <tr>
                                        <td>9</td>
                                        <td>माध्यम</td>
                                        <td>{schoolGenInfo.mediumOfInstruction}</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <td>UDISE मध्ये असलेले वर्ग </td>
                                        <td>{schoolGenInfo.udiseLowerStandard} - {schoolGenInfo.udiseHigherStandard}</td>
                                      </tr>
                                      <tr>
                                        <td>11</td>
                                        <td>शाळेचे मंडळ</td>
                                        <td>{schoolGenInfo.schoolBoard}</td>
                                      </tr>
                                      <tr>
                                        <td>12</td>
                                        <td>ट्रस्ट सोसायटी व्यवस्थापन समितीचे नाव</td>
                                        <td>{schoolGenInfo.nameOfTrustSocietyManagementCommittee}</td>
                                      </tr>
                                    </tbody>
                                  </Table>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                       <th>नाव</th>
                                       <th>पदनाम</th>
                                       <th>पत्ता</th>
                                       <th>मोबाईल क्रमांक (कार्यालय निवास)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>{schoolGenInfo.schoolUserName}</td>
                                        <td>{schoolGenInfo.schoolUserDegisnation}</td>
                                        <td>{schoolGenInfo.schoolUserAddress}</td>
                                        <td>{schoolGenInfo.schoolUserTelephone}</td> 
                                      </tr>
                                    </tbody>
                                  </Table>

                                </div>

         
                            
                                { /* विद्यार्थी संख्या */ }                                                                           
                                <div className="border border-1 border-dark m-2 p-4 fw-semibold" style={{ fontSize: "14px" }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{ fontSize: "18px" }}>
                                        विद्यार्थी संख्या
                                    </div>
                                    <div>
                                        <div className="form-check form-check-inline">
                                           <input className="form-check-input" type="radio" name="studentCountStatus" id="reject" value="reject" />
                                           <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                         </div>
                                         <div className="form-check form-check-inline">
                                           <input className="form-check-input" type="radio" name="studentCountStatus" id="accept" value="accept" defaultChecked />
                                           <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                         </div>
                                    </div>
                                  </div>                       
                                  <Table bordered responsive>
                                    <thead className="table-light text-center">
                                      <tr>
                                        <th>तपशील</th>
                                          {[...Array(10)].map((_, idx) => (
                                            <th key={idx}>{`${idx + 1}वी`}</th>
                                          ))}
                                        <th>एकूण</th>
                                      </tr>
                                    </thead>
                                    <tbody className="text-center">
                                              <tr>
                                                <td>एकूण मुले</td>
                                                {studentData.boys.map((val, idx) => <td key={idx}>{val}</td>)}
                                                <td>{totalBoys}</td>
                                              </tr>
                                              <tr>
                                                <td>एकूण मुली</td>
                                                {studentData.girls.map((val, idx) => <td key={idx}>{val}</td>)}
                                                <td>{totalGirls}</td>
                                              </tr>
                                              <tr className="fw-bold">
                                                <td>एकूण</td>
                                                  {total.map((val, idx) => <td key={idx}>{val}</td>)}
                                                <td>{totalStudents}</td>
                                              </tr>
                                    </tbody>
                                  </Table>
                                </div>


                                {/* इमारत सुविधा / शाळेच्या परिसराचे क्षेत्रफळ */}  
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2" >
                                    <div className="fw-semibold mb-2" style={{fontSize:"18px"}} >इमारत सुविधा / शाळेच्या परिसराचे क्षेत्रफळ / एकूण बांधकामाचे क्षेत्र</div> 
                                    <div>
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="BuildingServiceStatus" id="reject" value="reject" />
                                          <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="BuildingServiceStatus" id="accept" value="accept" defaultChecked />
                                          <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                        </div>
                                    </div>
                                  </div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शिर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>   
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>संस्थेच्या नावे उपलब्ध जागेचा पुरावा</td>
                                        <td>{facilityData.typeOfProofAvailableAndItsDate}</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)</td>
                                        <td>{facilityData.totalAreaSqM}</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>खेळाच्या मैदानाचे क्षेत्रफळ</td>
                                        <td>{facilityData.areaOfPlayground}</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शाळेच्या परिसराचे एकूण क्षेत्रफळ</td>
                                        <td>{facilityData.schoolTotalAreaSqM}</td>
                                      </tr>
                                    </tbody>
                                  </Table>

                                  <div className='mt-4'>   
                                  
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}} >कार्यालय - भांडार - मुख्याध्यापक खोली / वर्गखोल्यांची संख्या व मापे नकाशानुसार</div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                       <th>अ. क्र.</th>
                                       <th>खोल्या</th>
                                       <th>खोली संख्या</th>
                                      </tr>
                                    </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>मुख्याध्यापक- नि-कार्यालय- नि- भांडार खोली</td>
                                      <td>{facilityData.principalCount}</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>वर्गखोल्यांची संख्या</td>
                                      <td>{facilityData.classroomCount}</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>विज्ञान प्रयोगशाळा खोली संख्या</td>
                                      <td>{facilityData.labCount}</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>ग्रंथालय खोली संख्या</td>
                                      <td>{facilityData.libraryCount}</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>एकूण खोली संख्या</td>
                                      <td>{facilityData.schoolTotalCount}</td>
                                    </tr>
                                  </tbody>
                                 </Table>
                                 </div>

                                 <div className='mt-4' >
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>शौचालय व प्रवेश सुविधा</div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शिर्षक</th>
                                        <th>संख्या</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी कमोड शौचालय</td>
                                        <td>{facilityData.westernToiletCount}</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>मुलांसाठी स्वतंत्र शौचालय</td>
                                        <td>{facilityData.seperateBoysToiletCount}</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>मुलांसाठी स्वतंत्र मुतारी</td>
                                        <td>{facilityData.seperateBoysWashroomCount}</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>मुलींसाठी स्वतंत्र शौचालय</td>
                                        <td>{facilityData.seperateGirlsToiletCount}</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>मुलींसाठी स्वतंत्र मुतारी</td>
                                        <td>{facilityData.seperateGirlsWashroomCount}</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>किचन शेड</td>
                                        <td>{facilityData.kitchenShed}</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>विना अडथळा प्रवेशासाठी उताराचा रस्ता</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>{facilityData.aRampForBarrierFreeAccess}</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                 </div>

                                 <div className='mt-4' >
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>इतर सुविधा</div> 
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>आवश्यक सुविधा</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>अग्निशमन सिलिंडर संख्या</td>
                                        <td>{facilityData.fireWarrantyCylinderNo}</td>
                                      </tr>
                                      <tr>
                                        <td>वैद्यकीय प्राथमिकोपचार पेटी संख्या</td>
                                        <td>{facilityData.medicalPrimaryBoxNumber}</td>
                                      </tr>
                                      <tr>
                                        <td>सीसीटीव्ही संख्या</td>
                                        <td>{facilityData.cctvNo}</td>
                                      </tr>
                                      <tr>
                                        <td>शाळा मान्यता क्र व UDISE अँड NOC चा तपशील असलेले दर्शनी भागात फलक लावले आहेत का?</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>{facilityData.plaquesInFacadesOfSchoolRecognition}</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                 </div>
                                </div>

                             {/* अध्ययन- अध्यापन तासिका, साहित्य/खेळ व क्रीडा विषयक सामग्री / ग्रंथालय मधील साहित्यांची उपलब्धता */} 
                                <div className='border border-1 border-dark m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}> 
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}}>
                                      अध्ययन- अध्यापन तासिका, साहित्य/खेळ व क्रीडा विषयक सामग्री / ग्रंथालय मधील साहित्यांची उपलब्धता
                                    </div>
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="TeacherSubjectStatus" id="reject" value="reject" />
                                        <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="TeacherSubjectStatus" id="accept" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>अ. क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          मागील शैक्षणिक वर्षात प्राथमिक साठी किमान २०० दिवस ८०० तासांची तासिका
                                          व उच्च प्राथ. साठी २२० दिवस १००० तासांची तासिका अध्यापन कार्यवाही
                                        </td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}> { resourceAvailability.minimum200DaysOf800ClockHoursForPrimaryAndHigher } </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>किमान ४५/४८ तासिका आठवड्यास अध्यापन कार्यवाही</td>
                                        <td>{ resourceAvailability.hoursOfTeachingPerWeek }</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>प्रत्येक वर्गात शैक्षणिक साहित्य आवश्यकतेनुसार पुरेसे आहे ?</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>{resourceAvailability.sufficientEducationalMaterialInEachClassAsRequired}</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या</td>
                                        <td>{resourceAvailability.numberOfReferenceBooksAvailableForTeacherTraining}</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>ग्रंथालयात विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या</td>
                                        <td>{resourceAvailability.numberOfBooksAvailableForStudentReadingInTheLibrary}</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>क्रीडा व खेळ विषयक उपलब्ध संच संख्या</td>
                                        <td>{resourceAvailability.numberOfSportsAndSportsLiterature}</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>मासिके  / नियतकालिके ( किशोर, जीवन शिक्षण इ.) संख्या</td>
                                        <td>{resourceAvailability.magzinBooksCount}</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <td>वर्तमानपत्रे नावे व संख्या</td>
                                        <td><strong>{resourceAvailability.newspaperAndTotalCount}</strong></td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>


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
                                      <td>शाळेस मान्यता विपयक सर्व कागदपत्रे उपलब्ध आहेत?</td>
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

export default ArjView;


