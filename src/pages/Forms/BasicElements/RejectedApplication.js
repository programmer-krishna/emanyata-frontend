import React, { useState, useEffect } from "react"
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap"
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import { useNavigate } from "react-router-dom"
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import Swal from 'sweetalert2';

// ✅ ApplicationPage Component
const ApplicationPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null)
  const [filteredData, setFilteredData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const navigate = useNavigate()

  document.title = " Rejected Applications | ई मान्यता प्रणाली"

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index)
  }

  const handleAction = (action, rowIndex) => {
    const rowData = filteredData[rowIndex]

    if (action === "view") {
      navigate("/पहा", {
        state: {
          id: rowData[0],
          status: rowData[1],
          schoolName: rowData[2],
          address: rowData[3],
        },
      })
    } else if (action === "logView") {
      const generateRandomDate = () => {
        const start = new Date(2023, 0, 1)
        const end = new Date()
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        return date.toISOString().split("T")[0]
      }

      const finalapplicationData = [
        { action: "Form Submitted", date: generateRandomDate() },
        { action: "Document Verified", date: generateRandomDate() },
        { action: "Final Review Done", date: generateRandomDate() },
        { action: "Approved", date: generateRandomDate() },
      ]

      navigate("/नोंदवही", {
        state: {
          id: rowData[0],
          schoolName: rowData[2],
          finalapplication: finalapplicationData,
        },
      })
    }
  }

  const handleCopy = () => {
    const table = document.getElementById("applicationTable");
    let text = "";

    // Get headers
    const headerRow = table.querySelector("thead tr");
    const headers = [];
    for (const cell of headerRow.cells) {
      headers.push(cell.innerText);
    }
    text += headers.join("\t") + "\n";

    // Get data rows
    const dataRows = table.querySelectorAll("tbody tr");
    for (const row of dataRows) {
      const rowText = [];
      for (const cell of row.cells) {
        rowText.push(cell.innerText);
      }
      text += rowText.join("\t") + "\n";
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Table has been copied!',
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to copy the table!',
        });
      });
  };

  const handleCSV = () => {
    const table = document.getElementById("applicationTable")
    let csv = ""

    // Get headers
    const headerRow = table.querySelector("thead tr")
    const headers = []
    for (const cell of headerRow.cells) {
      const text = cell.innerText.replace(/"/g, '""')
      headers.push(`"${text}"`)
    }
    csv += headers.join(",") + "\n"

    // Get data rows
    const dataRows = table.querySelectorAll("tbody tr")
    for (const row of dataRows) {
      const rowText = []
      for (const cell of row.cells) {
        const text = cell.innerText.replace(/"/g, '""')
        rowText.push(`"${text}"`)
      }
      csv += rowText.join(",") + "\n"
    }

    const blob = new Blob([csv], { type: "text/csv" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "applications.csv"
    link.click()
  }

  // Top of the file
  const handlePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Rejected Applications", 14, 15);

    const table = document.getElementById("applicationTable");

    const headerRow = table.querySelector("thead tr");
    const headers = [];
    for (const cell of headerRow.cells) {
      headers.push(cell.innerText);
    }

    const dataRows = table.querySelectorAll("tbody tr");
    const data = [];
    for (const row of dataRows) {
      const rowData = [];
      for (const cell of row.cells) {
        rowData.push(cell.innerText);
      }
      data.push(rowData);
    }

    autoTable(doc, {
      head: [headers],
      body: data,
      startY: 25,
      theme: "grid",
      styles: {
        fontSize: 8,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
    });

    doc.save("applications.pdf");
  }

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800")
    printWindow.document.write("<html><head><title>Print Applications</title>")
    printWindow.document.write("<style>")
    printWindow.document.write(`
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            .badge { 
                background-color: #28a745; 
                color: white; 
                padding: 4px 8px; 
                border-radius: 4px; 
                font-size: 12px;
            }
        `)
    printWindow.document.write("</style>")
    printWindow.document.write("</head><body>")
    printWindow.document.write("<h2 style='text-align: center;'>Finalized Applications</h2>")

    // Get table without action column
    const table = document.getElementById("applicationTable")
    const clonedTable = table.cloneNode(true)

    // Remove action column (first column)
    const headerRow = clonedTable.querySelector("thead tr")
    headerRow.removeChild(headerRow.firstElementChild)

    const dataRows = clonedTable.querySelectorAll("tbody tr")
    dataRows.forEach((row) => {
      row.removeChild(row.firstElementChild)
    })

    printWindow.document.write(clonedTable.outerHTML)
    printWindow.document.write("</body></html>")
    printWindow.document.close()
    printWindow.focus()

    // Print after a short delay to ensure content is loaded
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  const tableData = [
    [
      1,
      "Application Rejected",
      "Bharati Vidyapeeth Rabindranath Tagore School of Excellence Balewadi, Pune",
      "4/1/2 Mitcon Road Balewadi",
    ],
    [2, "Application Rejected", "P A I H TECH ENGLISH SCHOOL KONDHWA KHURD PUNE 411048", "कोंढवा खुर्द पुणे 411048"],
    [3, "Application Rejected", "RAHUL INTERNATIONAL SCHOOL", "SERVEY NO 274/275/2A/2 HINJEWADI, MULSHI"],
    [
      4,
      "Application Rejected",
      "The Elite School And Junior College",
      "Gat No 600, At.Koye,Po.Kurkundi,Tal.Khed,Dist. Pune",
    ],
    [5, "Application Rejected", "Patil NATIONAL SCHOOL", "SERVEY NO 274/275/2A/2 HINJEWADI, MULSHI"],
    [
      6,
      "Application Rejected",
      "The Modern School And Junior College",
      "Gat No 600, At.Koye,Po.Kurkundi,Tal.Khed,Dist. Pune",
    ],
    [7, "Application Rejected", "The Orbis School Keshavnagar", "Survey No 66, Village Keshavnagar, Mundhwa, Pune"],
    [8, "Application Rejected", "VIBGYOR High School Balewadi", "Survey No. 29, Balewadi, Pune"],
    [
      9,
      "Application Rejected",
      "Indian Model International School",
      "S.No. 35/1/4B/2/A/8, (Old S.No. 35/1/1/B), Bavdhan",
    ],
    [10, "Application Rejected", "Delhi Public School Pune", "Survey No. 43, Baner Road, Pune"],
    [11, "Application Rejected", "Symbiosis International School", "Lavale, Mulshi, Pune"],
    [12, "Application Rejected", "Podar International School", "Pimpri-Chinchwad, Pune"],
    [13, "Application Rejected", "Indira National School", "Tathawade, Pune"],
    [14, "Application Rejected", "Akshara International School", "Wakad, Pune"],
    [15, "Application Rejected", "Euro School", "Wakad, Pune"],
    [16, "Application Rejected", "Wisdom World School", "Hadapsar, Pune"],
    [17, "Application Rejected", "The Bishop's School", "Camp, Pune"],
  ]

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(tableData)
    } else {
      const lowercasedQuery = searchQuery.toLowerCase()
      const filtered = tableData.filter((row) =>
        row.some((cell) => String(cell).toLowerCase().includes(lowercasedQuery)),
      )
      setFilteredData(filtered)
    }
    // Reset to first page when search query changes
    setCurrentPage(1)
  }, [searchQuery])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Rejected Applications" pageTitle="होम" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Rejected Applications</h4>
                </CardHeader>

                <CardBody>
                  <div className="listjs-table" id="applicationList">
                    <Row className="g-4 mb-4">
                      <Col className="col-sm-auto">
                        <div className="d-flex gap-1">
                          <Button color="light" size="sm" className="add-btn me-1" onClick={handleCSV}>
                            CSV
                          </Button>

                          <Button color="light" size="sm" className="add-btn me-1" onClick={handleCopy}>
                            Copy
                          </Button>

                          <Button color="light" size="sm" className="add-btn me-1" onClick={handlePDF}>
                            PDF
                          </Button>

                          <Button color="light" size="sm" className="add-btn me-1" onClick={handlePrint}>
                            Print
                          </Button>
                        </div>
                      </Col>
                      <Col className="col-sm d-flex justify-content-sm-end align-items-center">
                        <div className="search-box d-flex align-items-center">
                          <span className="me-2 mb-0">Search:</span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder=" "
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ maxWidth: "200px" }}
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="table-responsive table-card mt-3 mb-1">
                      <table className="table align-middle table-nowrap" id="applicationTable">
                        <thead className="table-light">
                          <tr>
                            <th>एक्शन</th>
                            <th>एस आर क्र.</th>
                            <th>स्टेटस</th>
                            <th>शाळेचे नाव</th>
                            <th>शासन व उपशासन आदेशात नमूद केलेला पत्ता</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          {currentItems.map((row, index) => {
                            const actualIndex = indexOfFirstItem + index
                            return (
                              <tr key={index}>
                                <td>
                                <div className="d-flex justify-content-center">
                                    <button
                                      className="btn btn-success btn-sm me-2 flex-fill"
                                      onClick={() => handleAction("view", actualIndex)}
                                      style={{ minWidth: '100px' }}  >
                                      पहा
                                    </button>
                                    <button
                                      className="btn btn-primary btn-sm flex-fill"
                                      onClick={() => handleAction("logView", actualIndex)}
                                      style={{ minWidth: '100px' }}
                                    >
                                      नोंद पहा
                                    </button>
                                  </div>
                                </td>
                                <td>{row[0]}</td>
                                <td>
                                  <span
                                    className={`badge ${row[1].includes("Rejected") ? "bg-danger" : "bg-warning"}`}
                                  >
                                    {row[1]}
                                  </span>
                                </td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                              </tr>

                            )
                          })}
                          {currentItems.length === 0 && (
                            <tr>
                              <td colSpan={5} className="text-center">
                                No matching records found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of{" "}
                        {filteredData.length} entries
                      </div>
                      <div className="pagination-container">
                        <ul className="pagination mb-0">
                          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <Button
                              color="light"
                              size="sm"
                              className="page-link"
                              onClick={goToPreviousPage}
                              disabled={currentPage === 1}
                            >
                              Previous
                            </Button>
                          </li>
                          {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                              <Button
                                color={currentPage === i + 1 ? "primary" : "light"}
                                size="sm"
                                className="page-link"
                                onClick={() => paginate(i + 1)}
                              >
                                {i + 1}
                              </Button>
                            </li>
                          ))}
                          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <Button
                              color="light"
                              size="sm"
                              className="page-link"
                              onClick={goToNextPage}
                              disabled={currentPage === totalPages}
                            >
                              Next
                            </Button>
                          </li>
                        </ul>
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
  )
}

export default ApplicationPage
