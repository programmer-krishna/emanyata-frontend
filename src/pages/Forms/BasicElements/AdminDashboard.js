"use client";

import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PieChart, Pie, Cell } from "recharts";

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const applicationData = location.state || {};

  document.title = "Application Details | ई मान्यता प्रणाली";

  const handleBack = () => {
    navigate(-1);
  };

  const stats = [
    { title: "एकूण शाळा", value: 2299 },
    { title: "एकूण अनुदानित शाळा", value: 1301 },
    { title: "एकूण विनाअनुदानित शाळा", value: 333 },
    { title: "स्वयं अर्थसहाय्यित", value: 678 },
    { title: "कायम विनाअनुदानित", value: 2299 },
    { title: "अंशतः अनुदानित", value: 13 },
    { title: "Application Pending", value: 36 },
    { title: "Application Accepted", value: 78 },
    { title: "Application Rejected", value: 99 },
    { title: "Inspection Assigned", value: 44 },
    { title: "Inspection Completed", value: 33 },
    { title: "Application Finalized", value: 78 },
  ];

  const chartData = [
    { month: 'Jan', Pending: 45, Reject: 20, Accept: 15, AssignInspection: 10, Verified: 5, Proceed: 8, Approved: 12, FinalSubmit: 18 },
    { month: 'Feb', Pending: 50, Reject: 22, Accept: 16, AssignInspection: 11, Verified: 6, Proceed: 9, Approved: 13, FinalSubmit: 19 },
    { month: 'Mar', Pending: 60, Reject: 25, Accept: 18, AssignInspection: 12, Verified: 7, Proceed: 10, Approved: 14, FinalSubmit: 20 },
    { month: 'Apr', Pending: 55, Reject: 21, Accept: 17, AssignInspection: 11, Verified: 6, Proceed: 9, Approved: 13, FinalSubmit: 19 },
    { month: 'May', Pending: 65, Reject: 28, Accept: 20, AssignInspection: 14, Verified: 8, Proceed: 11, Approved: 16, FinalSubmit: 22 },
    { month: 'Jun', Pending: 70, Reject: 30, Accept: 22, AssignInspection: 15, Verified: 9, Proceed: 12, Approved: 17, FinalSubmit: 23 },
    { month: 'Jul', Pending: 68, Reject: 29, Accept: 21, AssignInspection: 14, Verified: 8, Proceed: 11, Approved: 16, FinalSubmit: 22 },
    { month: 'Aug', Pending: 75, Reject: 32, Accept: 23, AssignInspection: 16, Verified: 10, Proceed: 13, Approved: 18, FinalSubmit: 24 },
    { month: 'Sep', Pending: 60, Reject: 25, Accept: 19, AssignInspection: 12, Verified: 7, Proceed: 10, Approved: 14, FinalSubmit: 20 },
  ];


  const pieData = [
  { name: "Pending", value: 70 },
  { name: "Reject", value: 30 },
  { name: "Accept", value: 22 },
  { name: "AssignInspection", value: 15 },
  { name: "Verified", value: 9 },
  { name: "Proceed", value: 12 },
  { name: "Approved", value: 17 },
  { name: "FinalSubmit", value: 23 },
];

const COLORS = [
  "#6366f1", "#ef4444", "#facc15", "#fb923c", "#22c55e",
  "#a855f7", "#0ea5e9", "#14b8a6"
];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="ऍडमिन-डॅशबोर्ड" pageTitle="होम" />

          {/* Internal CSS for neumorphic stat card */}
          <style>
            {`
              .stat-card {
                background: #ffffff;
                border-radius: 18px;
                box-shadow: 8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff;
                padding: 20px 25px;
                display: flex;
                align-items: center;
                gap: 40px;
                height: 140px;
                transition: 0.3s ease;
              }

              .stat-card:hover {
                transform: translateY(-6px);
                box-shadow: 10px 10px 30px #d1d9e6, -10px -10px 30px #ffffff;
              }

              .icon-circle {
                background: linear-gradient(145deg, #e2e8ec, #ffffff);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff;
                transition: transform 0.4s;
              }

              .stat-card:hover .icon-circle {
                transform: rotate(10deg) scale(1.05);
              }

              .icon-circle i {
                font-size: 28px;
                color: #ff8c42;
              }

              .stat-info {
                display: flex;
                flex-direction: column;
              }

              .stat-title {
                font-size: 18px;
                font-weight: 600;
                color: #333;
              }

              .stat-value {
                font-size: 24px;
                font-weight: bold;
                color: #111;
              }
            `}
          </style>

          {/* Cards Section */}
          <Row className="gy-4">
            {stats.map((stat, index) => (
              <Col xl={4} md={6} key={index}>
                <div className="stat-card">
                  <div className="icon-circle">
                    <i className="fas fa-file"></i>
                  </div>
                  <div className="stat-info">
                    <div className="stat-title">{stat.title}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Chart Section */}
          <Row className="mt-5">

  <Col lg={8}>
    <Card className="shadow-sm border-0">
      <CardHeader className="bg-transparent">
        <h5 className="mb-0">अर्जाचा सारांश </h5>
      </CardHeader>
      <CardBody style={{ height: "450px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Legend />
            <Bar dataKey="Pending" fill="#6366f1" />
            <Bar dataKey="Reject" fill="#ef4444" />
            <Bar dataKey="Accept" fill="#facc15" />
            <Bar dataKey="AssignInspection" fill="#fb923c" />
            <Bar dataKey="Verified" fill="#22c55e" />
            <Bar dataKey="Proceed" fill="#a855f7" />
            <Bar dataKey="Approved" fill="#0ea5e9" />
            <Bar dataKey="FinalSubmit" fill="#14b8a6" />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  </Col>

  {/* Pie Chart - 4 Columns */}
  <Col lg={4}>
  <Card className="shadow-sm border-0" style={{ height: "450px" }}>
    <CardHeader className="bg-transparent">
      <h5 className="mb-0">एकूण अर्जांचे प्रमाण </h5>
    </CardHeader>
    <CardBody style={{ height: "370px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={Object.entries(
                chartData.reduce((acc, curr) => {
                  Object.keys(curr).forEach(key => {
                    if (key !== 'month') {
                      acc[key] = (acc[key] || 0) + curr[key];
                    }
                  });
                  return acc;
                }, {})
              ).map(([name, value]) => ({ name, value }))}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              isAnimationActive={true}
            >
              {
                ['#6366f1', '#ef4444', '#facc15', '#fb923c', '#22c55e', '#a855f7', '#0ea5e9', '#14b8a6'].map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))
              }
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
        {[
          { name: "Pending", color: "#6366f1" },
          { name: "Reject", color: "#ef4444" },
          { name: "Accept", color: "#facc15" },
          { name: "AssignInspection", color: "#fb923c" },
          { name: "Verified", color: "#22c55e" },
          { name: "Proceed", color: "#a855f7" },
          { name: "Approved", color: "#0ea5e9" },
          { name: "FinalSubmit", color: "#14b8a6" },
        ].map((item, index) => (
          <span key={index} className="d-flex align-items-center">
            <span style={{
              backgroundColor: item.color,
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "6px"
            }}></span>
            <span style={{ fontSize: "13px" }}>{item.name}</span>
          </span>
        ))}
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

export default AdminDashboard;
