import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Debounced Input
const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => setValue(initialValue), [initialValue]);
    useEffect(() => {
        const timeout = setTimeout(() => onChange(value), debounce);
        return () => clearTimeout(timeout);
    }, [debounce, onChange, value]);

    return (
        <input {...props} value={value} className="form-control border-0 search" onChange={e => setValue(e.target.value)} />
    );
};

const PaymentReport = () => {
    document.title = "PaymentReport";

    const searchTable = useMemo(() => [
        { id: "10", name: "Tyrone", email: "tyrone@example.com", designation: "Senior Response Liaison", company: "Raynor, Rolfson and Daugherty", location: "Qatar" },
        { id: "09", name: "Cathy", email: "cathy@example.com", designation: "Customer Data Director", company: "Ebert, Schamberger and Johnston", location: "Mexico" },
        { id: "08", name: "Patsy", email: "patsy@example.com", designation: "Dynamic Assurance Director", company: "Streich Group", location: "Niue" },
        { id: "07", name: "Kerry", email: "kerry@example.com", designation: "Lead Applications Associate", company: "Feeney, Langworth and Tremblay", location: "Niger" },
        { id: "06", name: "Traci", email: "traci@example.com", designation: "Corporate Identity Director", company: "Koelpin - Goldner", location: "Vanuatu" },
        { id: "05", name: "Noel", email: "noel@example.com", designation: "Customer Data Director", company: "Howell - Rippin", location: "Germany" },
        { id: "04", name: "Robert", email: "robert@example.com", designation: "Product Accounts Technician", company: "Hoeger", location: "San Marino" },
        { id: "03", name: "Shannon", email: "shannon@example.com", designation: "Legacy Functionality Associate", company: "Zemlak Group", location: "South Georgia" },
        { id: "02", name: "Harold", email: "harold@example.com", designation: "Forward Creative Coordinator", company: "Metz Inc", location: "Iran" },
        { id: "01", name: "Jonathan", email: "jonathan@example.com", designation: "Senior Implementation Architect", company: "Hauck Inc", location: "Holy See" }
    ], []);

    const columns = useMemo(() => [
        { header: "एस आर क्र.", accessorKey: "id" },
        { header: "UDISE", accessorKey: "name" },
        { header: "SchoolName", accessorKey: "email" },
        { header: "Application Id", accessorKey: "designation" },
        { header: "Email", accessorKey: "company" },
        { header: "Phone Number", accessorKey: "location" }
    ], []);

    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    const fuzzyFilter = (row, columnId, value, addMeta) => {
        const itemRank = rankItem(row.getValue(columnId), value);
        addMeta({ itemRank });
        return itemRank.passed;
    };

    const table = useReactTable({
        columns,
        data: searchTable,
        filterFns: { fuzzy: fuzzyFilter },
        state: { columnFilters, globalFilter },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel()
    });

    const {
        getHeaderGroups,
        getRowModel,
        getCanPreviousPage,
        getCanNextPage,
        getPageOptions,
        setPageIndex,
        nextPage,
        previousPage,
        getState
    } = table;

    // Export to PDF
    const exportToPDF = () => {
        const doc = new jsPDF();
        const headers = columns.map(col => col.header);
        const rows = searchTable.map(row =>
            columns.map(col => row[col.accessorKey])
        );

        autoTable(doc, {
            head: [headers],
            body: rows
        });

        doc.save("payment-report.pdf");
    };

    // Copy to clipboard
    const handleCopy = () => {
        const text = searchTable
            .map(row => columns.map(col => row[col.accessorKey]).join("\t"))
            .join("\n");
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    return (
        <Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Payment Report" pageTitle="Home" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Payment Report</h5>
                                </CardHeader>
                                <CardBody>
                                    <Row className="mb-3">
                                        <Col sm={8} className="text-start">
                                            <CSVLink
                                                data={searchTable}
                                                filename={"payment-report.csv"}
                                                className="me-2 p-2 btn"
                                                style={{ backgroundColor: 'rgb(237 237 237)' }}
                                            >
                                                CSV
                                            </CSVLink>
                                            <button
                                                onClick={exportToPDF}
                                                className="me-2 p-2 btn"
                                                style={{ backgroundColor: 'rgb(237 237 237)' }}
                                            >
                                                PDF
                                            </button>
                                            <button
                                                onClick={() => window.print()}
                                                className="me-2 p-2 btn"
                                                style={{ backgroundColor: 'rgb(237 237 237)' }}
                                            >
                                                Print
                                            </button>
                                            <button
                                                onClick={handleCopy}
                                                className="p-2 btn"
                                                style={{ backgroundColor: 'rgb(237 237 237)' }}
                                            >
                                                Copy
                                            </button>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="search-box me-2 mb-2 d-inline-block col-12" style={{ border: '1px solid rgb(237 237 237)' }}>
                                                <DebouncedInput
                                                    value={globalFilter ?? ''}
                                                    onChange={value => setGlobalFilter(value)}
                                                    placeholder="Search"
                                                />
                                                <i className="bx bx-search-alt search-icon"></i>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Table hover>
                                        <thead>
                                            {getHeaderGroups().map(headerGroup => (
                                                <tr key={headerGroup.id}>
                                                    {headerGroup.headers.map(header => (
                                                        <th
                                                            key={header.id}
                                                            {...{ onClick: header.column.getToggleSortingHandler() }}
                                                        >
                                                            {header.isPlaceholder ? null : (
                                                                <>
                                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                                    {header.column.getIsSorted() && (
                                                                        <span>{header.column.getIsSorted() === 'asc' ? ' ↑' : ' ↓'}</span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>

                                        <tbody>
                                            {getRowModel().rows.map(row => (
                                                <tr key={row.id}>
                                                    {row.getVisibleCells().map(cell => (
                                                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>

                                    <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
                                        <div className="col-sm">
                                            <div className="text-muted">
                                                Showing
                                                <span className="fw-semibold ms-1">
                                                    {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
                                                </span>
                                                &nbsp;–&nbsp;
                                                <span className="fw-semibold ms-1">
                                                    {Math.min(
                                                        (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                                                        searchTable.length
                                                    )}
                                                </span>
                                                &nbsp;of&nbsp;
                                                <span className="fw-semibold ms-1">{searchTable.length}</span> Results
                                            </div>
                                        </div>
                                        <div className="col-sm-auto">
                                            <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
                                                <li className={!getCanPreviousPage() ? "page-item disabled" : "page-item"}>
                                                    <Link to="#" className="page-link" onClick={previousPage}>
                                                        Previous
                                                    </Link>
                                                </li>
                                                {getPageOptions().map((item, key) => (
                                                    <li className="page-item" key={key}>
                                                        <Link
                                                            to="#"
                                                            className={getState().pagination.pageIndex === item ? "page-link active" : "page-link"}
                                                            onClick={() => setPageIndex(item)}
                                                        >
                                                            {item + 1}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className={!getCanNextPage() ? "page-item disabled" : "page-item"}>
                                                    <Link to="#" className="page-link" onClick={nextPage}>
                                                        Next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default PaymentReport;
