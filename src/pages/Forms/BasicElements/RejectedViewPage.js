import { useNavigate } from "react-router-dom"
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import { Card, CardBody, CardHeader, Col, Container, Row, Button } from "reactstrap"
import { useState } from "react"
import Swal from 'sweetalert2';

const SchoolInfoTable = () => {
  const navigate = useNavigate()
  const [activeRadios, setActiveRadios] = useState({})

  const schoolInfo = [
    { srno: "1", title: "शाळेचे नाव", value: "" },
    { srno: "2", title: "शासन व उपशासनांतर्गत आहे का ते दर्शवा", value: "" },
    { srno: "3", title: "जिल्हा", value: "Pune" },
    { srno: "4", title: "तालुका", value: "Mawal" },
    { srno: "5", title: "गाव/शहर", value: "Gahunje" },
    { srno: "6", title: "पिनकोड", value: "412101" },
    { srno: "7", title: "शाळेचा मोबाईल नंबर", value: "" },
    { srno: "8", title: "शाळेचा ईमेल आयडी", value: "kpcfcghjk" },
    { srno: "9", title: "शाळेचा प्रकार", value: "अनुदानित" },
    { srno: "10", title: "Udise No", value: "" },
    { srno: "11", title: "Application Submitted Date", value: "12/07/2024" },
    { srno: "12", title: "Application Resubmitted Date", value: "13/07/2024" },
  ]

  const generalInfo = [
    { srno: "1", title: "गुगल लोकेशन लिंक", value: "MPF4+RF Pimpri-Chinchwad, Maharashtra, India (Open in map)" },
    { srno: "2", title: "स्व मान्यता (टप्पा -२ ) प्रमाणपत्र मागणी कालावधी", value: '["2022-2025"]' },
    { srno: "3", title: "शाळा मान्यता दस्तऐवजात नमूद केलेला पत्ता", value: "Tathwade Gahunje Rasta Pune" },
    { srno: "4", title: "शाळेचा स्थापना वर्ष", value: "2017" },
    { srno: "5", title: "प्रथम शाळा सुरु दिनांक", value: "04-06-2018" },
    { srno: "6", title: "कोणत्या इयत्तेसाठी स्वमान्यता प्रमाणपत्र पाहिजे", value: "1 - 8" },
    { srno: "7", title: "शाळेचे क्षेत्र", value: "Grampanchayat" },
    { srno: "8", title: "सरल प्रणालीत सुरु असलेली वर्ग", value: "1 - 10" },
    { srno: "9", title: "माध्यम", value: "English" },
    { srno: "10", title: "UDISE मध्ये असलेले वर्ग", value: "1 - 10" },
    { srno: "11", title: "शाळेचे मंडळ", value: "state_board" },
    { srno: "12", title: "ट्रस्ट सोसायटी व्यवसाय समितीचे नाव", value: "Hans Education Modern Foundation" },
  ]

  // Building/Facilities data from the image
  const buildingInfo = [
    { srno: "1", title: "संस्थेचे नावे उपलब्ध जागेचा पुरावा", value: "Rent agreement" },
    { srno: "2", title: "एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)", value: "1500" },
    { srno: "3", title: "खेळाच्या मैदानाचे क्षेत्रफळ", value: "2500" },
    { srno: "4", title: "मालकीच्या परिसराचे एकूण क्षेत्रफळ", value: "4000" },
  ]

  // Office staff data from the image
  const staffInfo = [
    { srno: "1", title: "मुख्याध्यापक -नि-कार्यालय- नि- भांडार कोठी", value: "3" },
    { srno: "2", title: "कर्मचाऱ्यांची संख्या", value: "13" },
    { srno: "3", title: "विज्ञान प्रयोगशाळा कोठी संख्या", value: "01" },
    { srno: "4", title: "कर्मचाऱ्यांची संख्या", value: "01" },
    { srno: "5", title: "विज्ञान प्रयोगशाळा कोठी संख्या", value: "18" },
  ]

  // Required facilities data
  const requiredFacilities = [
    { srno: "1", title: "विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी क्रमीत सोयीसुविध", value: "2" },
    { srno: "2", title: "मुलांसाठी स्वतंत्र शौचालय", value: "8" },
    { srno: "3", title: "मुलांसाठी स्वतंत्र मुतारी", value: "8" },
    { srno: "4", title: "मुलींसाठी स्वतंत्र शौचालय", value: "8" },
    { srno: "5", title: "मुलींसाठी स्वतंत्र मुतारी", value: "8" },
    { srno: "6", title: "पिण्यन पाणी", value: "NA" },
  ]

  // Essential facilities data
  const essentialFacilities = [
    { title: "अग्निशमन सिलिंडर संख्या", value: "1" },
    { title: "वैद्यकीय प्रथमोपचार पेटी संख्या", value: "1" },
    { title: "सीसीटीव्ही संख्या", value: "36" },
    { title: "शाळा मान्यता क्र व UDISE नोंद NOC या तपशील असलेले दर्शनी भागात प्रदर्श लावले आहेत का?", value: "yes" },
  ]

  // Teaching materials data
  const teachingMaterials = [
    {
      srno: "1",
      title:
        "मानीव शैक्षणिक वर्षात प्राथमिक शाळी किमान 200 दिवस 800 तासांची तालिका व उच्च प्राथ. शाळी 220 दिवस 1000 तासांची तालिका अध्यापन कार्यवाही",
      value: "yes",
    },
    { srno: "2", title: "किमान ४५/४८ तासिका आठवड्यास अध्यापन कार्यवाही", value: "45 hrs" },
    { srno: "3", title: "प्रत्येक वर्गात शैक्षणिक साहित्य आराखड्यानुसार दुरुस्त आहे ?", value: "yes" },
    { srno: "4", title: "शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या", value: "200" },
    { srno: "5", title: "ग्रंथालयात विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या", value: "1000" },
    { srno: "6", title: "क्रीडा व खेळ विषयक उपलब्ध संच संख्या", value: "7" },
    { srno: "7", title: "मार्गिके / नियतकालिके ( किशोर, जीवन शिक्षण इ. ) संख्या", value: "03" },
  ]

  // Document checklist data from the image
  const documentChecklist = [
    { srno: "1", title: "मान्यतेचे शासन निर्णय/शासन आदेश", value: "कामे" },
    { srno: "2", title: "शिक्षण उपसंचालकांचे मान्यतेचे आदेश", value: "रिकामे" },
    { srno: "3", title: "प्रथम मान्यता आदेश / सर्व वर्षांचे नैमित्तिक वाढ आदेश", value: "रिकामे" },
    { srno: "4", title: "संस्थेचा नमुना १ मधील मागणी अर्ज (दुर्मी सेरॉक्स जोडू नये)", value: "रिकामे" },
    { srno: "5", title: "संस्था नोंदणी 1950 आणि 1860 प्रमाणपत्र / कंपनी प्रमाणपत्र", value: "रिकामे" },
    { srno: "6", title: "संस्थेच्या नवे जागा असल्याचे खरेदीखत / भाडेकरार / कुलमुखत / मालमत्ता / ७/१२", value: "रिकामे" },
    { srno: "7", title: "विद्यार्थींकडून कोणतीही फी /देणगी घेत नसल्याचे मुख्याध्यापक हमीपत्र", value: "रिकामे" },
    { srno: "8", title: "प्रस्तावाच्या सोबतच्या नमुन्यातील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र", value: "रिकामे" },
  ]

  // Facilities inspection data from the image
  const facilitiesInspection = [
    { title: "उत्तर", value: "रिकामे" },
    { title: "सरळक भित", value: "रिकामे" },
    { title: "मुलांचे शौचालय", value: "रिकामे" },
    { title: "मुलींचे शौचालय", value: "रिकामे" },
    { title: "पाण्याची सुविधा", value: "रिकामे" },
    { title: "खेळाचे मैदान", value: "रिकामे" },
    { title: "शाळेचे प्रवेशद्वार / इमारत /इतर सुविधा", value: "रिकामे" },
    { title: "वाचनालय, संगणक, प्रयोगशाळा किंवा वेध", value: "रिकामे" },
  ]

  // Inspection officer opinion data
  const inspectionOpinion = [
    { title: "-", opinion: "शाळेचे मान्यता विषयक सर्व कागदपत्रे उपलब्ध आहेत?" },
    { title: "-", opinion: "RTE 2009 मधील नियमानुसार सर्व भौतिक सुविधांची पूर्तता होत आहे?" },
    { title: "-", opinion: "नमुना 2 प्रमाणपत्र देण्यास शिफारस आहे?" },
    { title: "-", opinion: "अभिप्राय" },
    { title: "-", opinion: "तपासणी अधिकारी" },
    { title: "-", opinion: "तपासणी दिनांक" },
    { title: "-", opinion: "तपासणी अधिकारी अभिप्राय कागदपत्र" },
  ];

  const handleUpdate = () => {
    // Add your update logic here
    console.log("Update application clicked")
    alert("Application updated successfully!")
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleUpdateStatus = () => {
    // Add your update status logic here
    console.log("Update Application Status clicked")
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Status Updated!',
    });
  }

  const handleDownloadAll = () => {
    const table = document.getElementById("applicationTable");
    if (!table) {
      Swal.fire({
        icon: 'error',
        title: 'Table Not Found!',
        text: 'Cannot find the application table to download.',
      });
      return;
    }

    let csv = "";

    // Get headers
    const headerRow = table.querySelector("thead tr");
    const headers = [];
    for (const cell of headerRow.cells) {
      headers.push(cell.innerText);
    }
    csv += headers.join(",") + "\n";

    // Get data rows
    const dataRows = table.querySelectorAll("tbody tr");
    for (const row of dataRows) {
      const rowText = [];
      for (const cell of row.cells) {
        rowText.push(cell.innerText);
      }
      csv += rowText.join(",") + "\n";
    }

    // Create Blob and download
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "applications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Success Swal
    Swal.fire({
      icon: 'success',
      title: 'Download Started!',
      text: 'Your table is downloading as a CSV file.',
    });
  };



  const handleDownloadDocument = (documentName) => {
    console.log(`Downloading document: ${documentName}`)
    alert(`Downloading ${documentName}...`)
  }

  const handleRadioChange = (section, index, value) => {
    setActiveRadios({
      ...activeRadios,
      [`${section}-${index}`]: value,
    })
    console.log(`Changed ${section} item ${index} to ${value}`)
  }

  const handleAreaChange = (area) => {
    console.log(`Area changed to: ${area}`)
  }

  // Table component for consistent styling
  const TableComponent = ({
    title,
    data,
    headers,
    keyField = "srno",
    valueField = "value",
    titleField = "title",
    className = "",
    actions = null,
  }) => (
    <div className={`mt-2 mb-4 ${className}`}>
      {title && <h5 className="mb-3 fw-bold">{title}</h5>}
      <div className="table-responsive">
        <table className="table table-bordered mb-0">
          <thead className="table-light">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="align-middle">
                  {header}
                </th>
              ))}
              {actions && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header, headerIndex) => {
                  if (headerIndex === 0 && keyField) {
                    return (
                      <td key={headerIndex} className="align-middle">
                        {row[keyField] || index + 1}
                      </td>
                    )
                  } else if (headerIndex === 1 && titleField) {
                    return (
                      <td key={headerIndex} className="align-middle">
                        {row[titleField]}
                      </td>
                    )
                  } else if (headerIndex === 2 && valueField) {
                    return (
                      <td key={headerIndex} className="align-middle">
                        {row[valueField] || "-"}
                      </td>
                    )
                  } else {
                    return (
                      <td key={headerIndex} className="align-middle">
                        {row[header.toLowerCase()] || "-"}
                      </td>
                    )
                  }
                })}
                {actions && <td className="align-middle">{actions(row, index)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Application View" pageTitle="Applications" />
        <Row>
          <Col lg={12}>
            <Card className="shadow-sm">
              <CardHeader className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="card-title mb-0">Application View</h4>
                </div>

              </CardHeader>
              <CardBody>
                {/* Table 1 - School Info */}
                <TableComponent
                  title="शाळेची मूलभूत माहिती"
                  data={schoolInfo}
                  headers={["एस आर क्र.", "शीर्षक", "शाळेने भरलेली माहिती"]}
                />

                {/* Table 2 - General Info */}
                <TableComponent
                  title="सामान्य माहिती"
                  data={generalInfo}
                  headers={["एस आर क्र.", "शीर्षक", "शाळेने भरलेली माहिती"]}
                />

                {/* Table 3 - Student Count */}
                <div className="mt-2 mb-2">
                  <h5 className="mb-0 fw-bold">विद्यार्थी संख्या</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">तपशील</th>
                          <th className="align-middle">1st</th>
                          <th className="align-middle">2nd</th>
                          <th className="align-middle">3rd</th>
                          <th className="align-middle">4th</th>
                          <th className="align-middle">5th</th>
                          <th className="align-middle">6th</th>
                          <th className="align-middle">7th</th>
                          <th className="align-middle">8th</th>
                          <th className="align-middle">9th</th>
                          <th className="align-middle">10th</th>
                          <th className="align-middle">एकूण</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle">शाळा मुले</td>
                          <td className="align-middle">21</td>
                          <td className="align-middle">11</td>
                          <td className="align-middle">17</td>
                          <td className="align-middle">16</td>
                          <td className="align-middle">11</td>
                          <td className="align-middle">2</td>
                          <td className="align-middle">8</td>
                          <td className="align-middle">8</td>
                          <td className="align-middle">13</td>
                          <td className="align-middle">8</td>
                          <td className="align-middle fw-bold">115</td>
                        </tr>
                        <tr>
                          <td className="align-middle">शाळा मुली</td>
                          <td className="align-middle">22</td>
                          <td className="align-middle">16</td>
                          <td className="align-middle">17</td>
                          <td className="align-middle">12</td>
                          <td className="align-middle">12</td>
                          <td className="align-middle">4</td>
                          <td className="align-middle">2</td>
                          <td className="align-middle">5</td>
                          <td className="align-middle">03</td>
                          <td className="align-middle">7</td>
                          <td className="align-middle fw-bold">100</td>
                        </tr>
                        <tr>
                          <td className="align-middle fw-bold">एकूण</td>
                          <td className="align-middle fw-bold">43</td>
                          <td className="align-middle fw-bold">27</td>
                          <td className="align-middle fw-bold">34</td>
                          <td className="align-middle fw-bold">28</td>
                          <td className="align-middle fw-bold">23</td>
                          <td className="align-middle fw-bold">6</td>
                          <td className="align-middle fw-bold">10</td>
                          <td className="align-middle fw-bold">13</td>
                          <td className="align-middle fw-bold">16</td>
                          <td className="align-middle fw-bold">15</td>
                          <td className="align-middle fw-bold">215</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Building Facilities Section - Contains 4 tables in one section */}
                <div className="mt-5 mb-4">
                  <h5 className="mb-3 fw-bold">इमारत सुविधा/मालकीच्या परिसराचे क्षेत्रफळ / एकूण बांधकामाचे क्षेत्र</h5>

                  {/* Area Selection */}
                  <div className="mb-4 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <input
                          type="radio"
                          id="urban"
                          name="area"
                          className="me-2"
                          onChange={() => handleAreaChange("urban")}
                        />
                        <label htmlFor="urban" className="form-check-label">
                          नगर क्षेत्र
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="rural"
                          name="area"
                          className="me-2"
                          defaultChecked
                          onChange={() => handleAreaChange("rural")}
                        />
                        <label htmlFor="rural" className="form-check-label">
                          ग्रामीण
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Table 1 - Building Info */}
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">एस आर क्र.</th>
                          <th className="align-middle">शीर्षक</th>
                          <th className="align-middle">शाळेने भरलेली माहिती</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buildingInfo.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.srno}</td>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">{row.value || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 2 - Staff Info */}
                  <h6 className="mb-3 mt-4">कार्यालय- भांडार- मुख्याध्यापक कोठी कर्मचाऱ्यांची संख्या व मागे नक्काशानुसार</h6>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">एस आर क्र.</th>
                          <th className="align-middle">कोठ्या</th>
                          <th className="align-middle">कोठी संख्या</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staffInfo.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.srno}</td>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">{row.value || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 3 - Required Facilities */}
                  <h6 className="mb-3 mt-4">इतर सुविधा</h6>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">एस आर क्र.</th>
                          <th className="align-middle">शीर्षक</th>
                          <th className="align-middle">संख्या</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requiredFacilities.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.srno}</td>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">{row.value || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 4 - Essential Facilities */}
                  <h6 className="mb-3 mt-4">आवश्यक सुविधा</h6>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">आवश्यक सुविधा</th>
                          <th className="align-middle">शाळेने भरलेली माहिती</th>
                        </tr>
                      </thead>
                      <tbody>
                        {essentialFacilities.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">{row.value || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table - Teaching Materials */}
                <TableComponent
                  title="अध्ययन- अध्यापन सामिग्री, साहित्य/खेळ व क्रीडा विषयक सामग्री/ प्रयोगशाळा मधील साहित्यांची उपलब्धता"
                  data={teachingMaterials}
                  headers={["एस आर क्र.", "शीर्षक", "शाळेने भरलेली माहिती"]}
                />

                {/* Table - Document Checklist */}
                <div className="mt-5 mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">मंजूर शाळा दस्तऐवज चेकलिस्ट</h5>
                    <div className="d-flex justify-content-end mt-2 gap-2">
                      <Button color="primary" onClick={handleDownloadAll}>
                        Download All
                      </Button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table id="applicationTable" className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">एस आर क्र.</th>
                          <th className="align-middle">शीर्षक</th>
                          <th className="align-middle">शाळेने भरलेली माहिती</th>
                          <th className="align-middle">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {documentChecklist.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.srno}</td>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <span className="me-2">{row.value || "-"}</span>

                              </div>
                            </td>
                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <input
                                    type="radio"
                                    id={`reject-${index}`}
                                    name={`action-${index}`}
                                    className="me-1"
                                    checked={activeRadios[`document-${index}`] === "reject"}
                                    onChange={() => handleRadioChange("document", index, "reject")}
                                  />
                                  <label htmlFor={`reject-${index}`}>नकार द्या</label>
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    id={`accept-${index}`}
                                    name={`action-${index}`}
                                    className="me-1"
                                    checked={
                                      activeRadios[`document-${index}`] === "accept" ||
                                      !activeRadios[`document-${index}`]
                                    }
                                    onChange={() => handleRadioChange("document", index, "accept")}
                                  />
                                  <label htmlFor={`accept-${index}`}>स्वीकारा</label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table - Inspection Officer Opinion */}
                <TableComponent
                  title="तपासणी अधिकारी अभिप्राय"
                  data={inspectionOpinion}
                  headers={["शीर्षक", "तपासणी अधिकारी अभिप्राय"]}
                  keyField="opinion"
                />

                {/* Table - Facilities Inspection */}
                <div className="mt-5 mb-4">
                  <h5 className="mb-3 fw-bold">
                    तपासणी अधिका-याने शाळेच्या भौतिक सुविधा दर्शविणा-या खालील सर्व सुविधांचे जिओ टॅगिंगसह GPS सेंसच फोटो जोडावेत
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">शीर्षक</th>
                          <th className="align-middle">प्रतिमा</th>

                        </tr>
                      </thead>
                      <tbody>
                        {facilitiesInspection.map((row, index) => (
                          <tr key={index}>
                            <td className="align-middle">{row.title}</td>
                            <td className="align-middle">
                              {row.value !== "रिकामे" ? (
                                <div className="d-flex align-items-center">

                                  <Button
                                    color="link"
                                    size="sm"
                                    className="p-0 text-primary"
                                    onClick={() => handleDownloadDocument(`${row.title} image`)}
                                  >
                                    <i className="ri-download-line"></i>
                                  </Button>
                                </div>
                              ) : (
                                "-"
                              )}
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end mt-5 gap-2">
                  <Button color="primary" onClick={handleGoBack}>
                    <i className="ri-arrow-left-line align-middle me-1"></i> मागे जा
                  </Button>
                  <Button color="secondary" onClick={handleUpdateStatus}>
                    <i className="ri-check-line align-middle me-1"></i> Update Application Status
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SchoolInfoTable
