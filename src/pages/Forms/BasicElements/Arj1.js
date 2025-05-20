// updated Arj code 

import React, {useEffect, useState } from 'react';
import {Button, Card,CardBody, CardHeader, Col,Container,Row} 
from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';
                                      

const Arj1 = () => { 
  document.title = "अर्ज यादी";

  const [dataList, setDataList] = useState([]);

  const data= () => {
    const statuses = ['Rejected', 'Inspection Officer Appointed', 'Approved', 'Pending', 'Inspection Scheduled', 'Inspection Completed'];
    const districts = ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Pokhara', 'Chitwan', 'Nepalgunj', 'Dharan', 'Biratnagar'];
    const schoolTypes = ['Secondary', 'Higher Secondary', 'Primary', 'Basic', 'College'];
    
    const data = [];
    
    for (let i = 1; i <= 20; i++) {
      const district = districts[Math.floor(Math.random() * districts.length)];
      const schoolType = schoolTypes[Math.floor(Math.random() * schoolTypes.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      data.push({
        id: i,
        srNo: `${1 + i}`,
        status: status,
        applicationNo: `${Math.floor(100000 + Math.random() * 900000)}`,
        comment: 'Truti PDF | School Inspection PDF',
        udiseNo: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        schoolName: `${district} ${schoolType} School ${i}`
      });
    }
    
    return data;
  };
  
  useEffect(() => {
    setDataList(data);
  }, []);

  useEffect(() => {
    if (dataList.length > 0) {
      if ($.fn.dataTable.isDataTable('#buttons-datatables')) {
        $('#buttons-datatables').DataTable().destroy();
      }
  
      const exportOptions = {
        columns: ':not(:first-child)',
        format: {
          header: (data) => $('<div>').html(data).text().trim()
        }
      };
  
      const buttons = [
        {
          extend: 'copy',
          text: 'Copy',
          className: 'btn btn-secondary',
          exportOptions
        },
        {
          extend: 'csv',
          text: 'CSV',
          className: 'btn btn-info',
          exportOptions,
          filename: 'अर्ज_यादी',
          charset: 'utf-8',
          bom: true
        },
        {
          extend: 'pdf',
          text: 'PDF',
          className: 'btn btn-danger',
          exportOptions,
          title: 'अर्ज यादी',
          customize: function (doc) {
            doc.defaultStyle.fontSize = 10;
            doc.styles.tableHeader.alignment = 'left';
            doc.styles.title.alignment = 'center';
          }
        },
        {
          extend: 'print',
          text: 'Print',
          className: 'btn btn-dark',
          exportOptions,
          title: 'अर्ज यादी'
        }
      ];
  
      const table = $('#buttons-datatables').DataTable({
        dom: '<"row m-2" <"col-md-6" B>>t',
        buttons,
        paging: true,
        searching: false,
        info: false,
        lengthChange: false
      });
  
      const updatePagination = () => {
        const info = table.page.info();
        $('.pagination-prev').toggleClass('disabled', info.page === 0);
        $('.pagination-next').toggleClass('disabled', info.page === info.pages - 1);
  
        let pagesHtml = '';
        for (let i = 0; i < info.pages; i++) {
          pagesHtml += `<li class="page-item ${i === info.page ? 'active' : ''}">
            <a class="page-link" href="#">${i + 1}</a>
          </li>`;
        }
        $('.listjs-pagination').html(pagesHtml);
  
        $('.listjs-pagination .page-link').on('click', function (e) {
          e.preventDefault();
          const page = parseInt($(this).text(), 10) - 1;
          table.page(page).draw('page');
        });
      };
  
      updatePagination();
  
      table.on('draw', function () {
        updatePagination();
      });
  
      
      $('.pagination-prev').off('click').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
          table.page('previous').draw('page');
        }
      });
  
      $('.pagination-next').off('click').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
          table.page('next').draw('page');
        }
      });
    }
  }, [dataList]);
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="अर्ज" pageTitle={<a href="/ऍडमिन-डॅशबोर्ड">डॅशबोर्ड</a>} />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">अर्ज</h4>
                  
                </CardHeader>
                <CardBody>
                <div className="table-responsive table-card mb-1">
                    <table  id="buttons-datatables"  className="table align-middle table-nowrap">
                      <thead>
                        <tr>
                          <th>अ. क्र. </th>
                          <th>ॲक्शन</th>
                          <th>स्टेटस</th>
                          <th>अर्ज क्रमांक</th>
                          <th>टिप्पणी</th>
                          <th>युडीस क्रमांक</th>
                          <th>शाळेचे नाव</th>
                          <th>Application Submit Date</th>
                          <th>Application Updated Date</th>
                          <th>Inspection Complete Date</th>
                          <th>Inspection Officer details</th>
                          <th>शासन व उपसंचालन आदेशात नमूद केलेला पत्ता</th>
                          <th>जिल्हा</th>
                          <th>तालुका</th>
                          <th>गाव/शहर</th>
                          <th>पिनकोड</th>
                          <th>दुरध्वनी क्रमांक.(एसटीडी कोडसह)</th>
                          <th>शाळेचा मोबाईल नंबर</th>
                          <th>शाळेचा ईमेल आयडी</th>
                          <th>जवळच्या पोलीस ठाण्याचे नाव </th>
                          <th>शाळेचा प्रकार</th>
                          <th>गूगल लोकेशन लिंक</th>
                          
                          <th>स्व मान्यता (नमुना - २) प्रमाणपत्र मागणी कालावधी </th>
                          <th>शासन मान्यता दस्तऐवजात नमूद केलेला पत्ता</th>
                          <th>शाळेच्या स्थापनेचे वर्ष</th>
                          <th>प्रथम शाळा सुरु दिनांक</th>
                          <th>कोणत्या इयत्तेसाठी स्वमान्यता प्रमाणपत्र पाहिजे</th>
                          <th>शाळेचे क्षेत्र</th>
                          <th>सरल प्रणालीत सुरु असलेले वर्ग</th>
                          <th>माध्यम</th>
                          <th>UDISE मध्ये असलेले वर्ग</th>
                          <th>शाळेचे मंडळ</th>
                          <th>शाळेची पूर्ण वेळ</th>
                          <th>शाळेची अर्धी वेळ (शनिवार)</th>
                          <th>प्रत्येक वर्गासाठी मध्यान्ह भोजनाची वेळ</th>
                          <th>ट्रस्ट सोसायटी व्यवस्थापन समितीचे नाव</th>
                          <th>संस्था/कंपनीचा उद्देश फक्त शिक्षण सेवेचा आहे का?</th>
                          <th>शाळा मान्यतेमध्ये नमूद केलेल्या पत्त्यावर त्याच ठिकाणी सुरू आहे का?</th>
                          
                          <th> शाळा स्थलांतरित झाली आहे का? </th>
                          <th> शाळा हस्तांतरित झाली आहे का? </th>
                          <th> महाराष्ट्र शासनाची मान्यता आहे का? </th>
                          <th> महाराष्ट्र शासन मान्यता क्रमांक </th>
                          <th> महाराष्ट्र शासन मान्यता दिनांक </th>

                          <th> शिक्षण उपसंचालकांची मान्यता आहे का? </th>
                          <th> शिक्षण उपसंचालकांची मान्यता क्रमांक </th>
                          <th> शिक्षण उपसंचालकांची मान्यता दिनांक </th>

                          <th> प्रथम मान्यता आहे का?</th>
                          <th> प्रथम मान्यता क्रमांक </th>
                          <th> प्रथम मान्यता दिनांक </th>

                          <th> शासनाचे ना हरकत प्रमाणपत्र (N.O.C.) आहे का? </th>
                          <th> शासनाचे ना हरकत प्रमाणपत्र (N.O.C.) क्रमांक </th>
                          <th> शासनाचे ना हरकत प्रमाणपत्र (N.O.C.) दिनांक </th>

                          <th> संलग्नता प्रमाणपत्र आहे का? </th>
                          <th> संलग्नता प्रमाणपत्र क्रमांक </th>
                          <th> संलग्नता प्रमाणपत्र दिनांक </th>

                          <th> संस्थेच्या नावे उपलब्ध जागेचा पुरावा आहे का? </th>
                          <th> मालमत्ता दस्तऐवज प्रकार </th>

                          <th> एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)</th>
                          <th> खेळाच्या मैदानाचे क्षेत्रफळ</th>
                          <th> शाळेच्या परिसराचे एकूण क्षेत्रफळ</th>

                          <th> मुख्याध्यापक खोली संख्या </th>
                          <th> मुख्याध्यापक सरासरी आकार </th>
                          <th> कार्यालय खोली संख्या </th>
                          <th> कार्यालय सरासरी आकार </th>
                          <th>स्टाफरूम खोली संख्या</th>
                          <th>स्टाफरूम सरासरी आकार</th>
                          <th>भांडार खोली संख्या</th>
                          <th>भांडार सरासरी आकार</th>
                          <th>वर्गखोल्यांची संख्या</th>
                          <th>वर्गखोल्यांची सरासरी आकार</th>
                          <th>विज्ञान प्रयोगशाळा खोली संख्या</th>
                          <th>विज्ञान प्रयोगशाळा सरासरी आकार</th>
                          <th>१० संगणकांसाठी खोली संख्या</th>
                          <th>१० संगणकांसाठी सरासरी आकार</th>
                          <th>ग्रंथालय खोली संख्या</th>
                          <th>ग्रंथालय सरासरी आकार</th>
                          <th>एकूण खोली संख्या</th>
                          <th>एकूण सरासरी आकार</th>

                          <th> विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी कमोड शौचालय </th>   
                          <th> विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी कमोड शौचालय संख्या </th>   

                          <th> मुलांसाठी स्वतंत्र शौचालय </th> 
                          <th> मुलांसाठी स्वतंत्र शौचालय संख्या </th>
                          <th> मुलांसाठी स्वतंत्र मुत्रारी </th>
                          <th> मुलांसाठी स्वतंत्र मुत्रारी संख्या </th>
                          <th> मुलांसाठी स्वतंत्र स्वच्छता गृह नळ </th>
                          <th> मुलांसाठी स्वतंत्र स्वच्छता गृह नळ संख्या </th>

                          <th> मुलींसाठी स्वतंत्र शौचालय </th>
                          <th> मुलींसाठी स्वतंत्र शौचालय संख्या </th>
                          <th> मुलींसाठी स्वतंत्र मुत्रारी </th>
                          <th> मुलींसाठी स्वतंत्र मुत्रारी संख्या </th>
                          <th> मुलींसाठी स्वतंत्र स्वच्छता गृह नळ </th>
                          <th> मुलींसाठी स्वतंत्र स्वच्छता गृह नळ संख्या </th>

                          <th> पाण्याची टाकी </th>
                          <th> पाण्याच्या टाकीची क्षमता (लिटरमध्ये) </th>

                          <th>  नळजोडणी </th>
                          <th>  नळजोडण्यांची संख्या </th>
                          <th> खेळाचे मैदान </th>
                          <th> खेळाच्या मैदानाचे एकूण क्षेत्रफळ (से.मी.² मध्ये) </th>
                          <th> संरक्षक भिंत चारही बाजूंनी आहे का? </th>
                          <th> संरक्षक भिंतीचे चारही बाजूंनी माप (से.मी.² मध्ये) </th>

                          <th> किचन शेड </th>
                          <th> किचन शेडची संख्या </th>
                          <th> विना अडथळा प्रवेशासाठी उताराचा रस्ता </th>
                          <th> रॅम्प बाजूला कठडे आहेत का? </th>

                          <th> निकषानुसार सुविधा उपलब्ध आहे का?</th>
                          <th> अध्यापनासाठी वापरात असलेल्या वर्ग खोल्यांची संख्या  </th>
                          <th> अध्यापनासाठी वापरात असलेल्या वर्ग खोल्यांच्या छप्पराचा प्रकार पक्का आहे का? </th>

                          <th>अग्निशमन सिलिंडर संख्या </th>
                          <th>वैद्यकीय प्राथमिकोपचार पेटी संख्या</th>
                          <th>सीसीटीव्ही संख्या</th>
                          <th>शाळा मान्यता क्र व UDISE अँड NOC चा तपशील असलेले दर्शनी भागात फलक लावले आहेत का?</th>

                          <th>मागील शैक्षणिक वर्षात प्राथमिक साठी किमान २०० दिवस ८०० तासांची तासिका व उच्च प्राथ. साठी २२० दिवस १००० तासांची तासिका अध्यापन कार्यवाही</th>
                          <th>किमान ४५/४८ तासिका आठवड्यास अध्यापन कार्यवाही</th>
                          <th>प्रत्येक वर्गात शैक्षणिक साहित्य आवश्यकतेनुसार पुरेसे आहे ?</th>
                          <th>शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या</th>
                          <th>ग्रंथालयात विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या</th>
                          <th>क्रीडा व खेळ विषयक उपलब्ध संच संख्या</th>
                          <th>मासिके / नियतकालिके ( किशोर, जीवन शिक्षण इ.) संख्या</th>
                          <th>वर्तमानपत्रे नावे व संख्या</th>

                          <th>मान्यतेचे शासन निर्णय / शासन पत्र</th>
                          <th>शिक्षण उपसंचालकांचे मान्यतेचे आदेश</th>
                          <th>प्रथम मान्यता आदेश / सर्व वर्गांचे नैसर्गिक वाढ आदेश</th>
                          <th>संस्थेचा नमुना १ मधील मागणी अर्ज (जुनी हेरिटेज जोडू नये)</th>
                          <th>संस्था आणि शिक्षणाधिकाऱ्यांचे संयुक्त खाते कायम ठेव पावती</th>
                          <th>संस्था/कंपनी नोंदणी प्रमाणपत्र</th>
                          <th>संस्थेच्या नावे जागा असल्याचे खरेदीखत / भाडेकरार / बक्षीसपत्र / मालमता / ७/१२</th>
                          <th>ऑडिट रिपोर्ट (गेल्या १ वर्ष)</th>
                          <th>फी बाबत EPTA मंजुरीच्या मिटिंगची प्रत</th>
                          <th>मागील तीन वर्षांच्या वर्ग फी रचनेनुसार फी संरचना</th>
                          <th>परिवहन समिती ऑनलाइन प्रत (www.schoolbussafetypune.org)</th>
                          <th>महिला तक्रार निवारण समिती व RTE 2009 कलम 32 नुसार तक्रार निवारण समिती</th>

                          <th> प्रस्तावित शाळेवास मनुषमालिकेतील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र </th>
                          <th> संस्थेची नोंदणी १९५० आणि १८६० प्रमाणपत्र </th>
                          <th> विध्यार्थ्यांकडून कोणतेही फी / देणगी घेत नसल्याचे मुख्याध्यापक हमीपत्र </th>
                          <th> शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का </th>
                          <th>स्वमान्यता आदेश २०१३ ते २०१६ </th>
                          <th>Payment Amount </th>
                          <th>Payment Status </th>

                        </tr>
                      </thead>
                      <tbody>
                        {dataList.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>
                              <button
                                className="btn btn-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "30px", height: "30px", padding: 0 }}
                                onClick={() => window.location.href = '/अर्ज-पाहा'}
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                            </td>
                            
                            <td>
                              <span className={`badge text-uppercase ${item.status === 'Rejected'
                                ? 'bg-danger-subtle text-danger'
                                : 'bg-success-subtle text-success'
                                }`}>
                                {item.status}
                              </span>
                            </td>
                            <td>{item.applicationNo}</td>
                            <td>
                              <a href="#" className="link-primary">Truti PDF</a> |{' '}
                              <a href="#" className="link-primary">School Inspection PDF</a>
                            </td>
                            <td>{item.udiseNo}</td>
                            <td>{item.schoolName}</td>
                            <td>7-12-2025</td>
                            <td>12-12-2025</td>
                            <td>7-12-2025</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            
                            <td>kk</td>
                            <td>kk</td>

                            <td>kk</td>
                            <td>
                                MPF4+RF Pimpri-Chinchwad, Maharashtra, India{' '}  
                            </td>

                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>

                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>

                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>

                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>
                            <td>kk</td>

                            

                            
                            
                            
                            
                            
                            
                            


                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-end">
  <div className="pagination-wrap hstack gap-2">
    <a className="page-item pagination-prev disabled" href="#">Previous</a>
    <ul className="pagination listjs-pagination mb-0"></ul>
    <a className="page-item pagination-next" href="#">Next</a>
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

export default Arj1;
