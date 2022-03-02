import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Button, Offcanvas,Nav,NavDropdown} from "react-bootstrap";
import { withTranslation} from 'react-i18next';

const Admindashboard = (lang) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// let colour = {
//   backgroundColor:"black"
// }
console.log(lang.props, 'props')
    const { t } = lang.props;
  return (
    <>
    
      <Button  className="dashboard_btn" variant="primary" onClick={handleShow}>
      {t('home.heading')}
     
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>{t('home.Admin Dashboard')}</b> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/admin" className="flex-column">
          <Nav.Link as={Link} to='/ApproveLoan'>{t('home.Approve Loan')} </Nav.Link>
          <Nav.Link as={Link} to='/ApproveAccount'> {t('home.Approve Account')}</Nav.Link>
         <Nav.Link  as={Link} to='/Emi Calculator' eventKey="Emi Calculator">{t('home.Emi Calculator')}</Nav.Link>
            <NavDropdown title="Invesment Plans" id="nav-dropdown">
        <NavDropdown.Item as={Link} to='/Approve FixedDeposit'eventKey="4.1">{t('home.Fixed Deposit')}</NavDropdown.Item>
        <NavDropdown.Item  as={Link} to='/Approve RecuringDeposit' eventKey="4.2">{t('home.Approve Recuring Deposit')}</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Approve MutualFunds' eventKey="4.3">{t('home.Approve Mutual funds')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Approve Reverse Mortage' eventKey="4.4">{t('home.ApproveReverse mortgage')}</NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default  withTranslation()(Admindashboard);
