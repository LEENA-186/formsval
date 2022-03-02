import React, { useState } from "react";
import {Routes, Route, Navigate ,Link} from 'react-router-dom';
import { Button, Offcanvas, Body ,Nav,NavDropdown,Item} from "react-bootstrap";
import { IconName } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const UserdashBoard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let mycolor={
  backgroundColor:"black"
}
  return (
    <>
      <Button  className="dashboard_btn" variant="primary" onClick={handleShow}>
         View Dashboard
     
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Customer Dashboard</b> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to='/phone'>Active</Nav.Link>
         <Nav.Link  as={Link} to='/ApplyLoan' eventKey="applyLoan">Apply Loan</Nav.Link>
            <Nav.Link as={Link} to='/LoanCalc' eventKey="link-2">Cibil Score Calculator</Nav.Link>
            <NavDropdown title="Invesment Plans" id="nav-dropdown">
        <NavDropdown.Item as={Link} to='/FixedDeposit'eventKey="4.1">Fixed Deposit</NavDropdown.Item>
        <NavDropdown.Item  as={Link} to='/RecuringDeposit' eventKey="4.2">Recuring Deposit</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/MutualFunds' eventKey="4.3">Mutual funds</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Mortage' eventKey="4.4">Reverse mortgage</NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserdashBoard;
