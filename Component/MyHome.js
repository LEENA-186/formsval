import React from "react";
import {
  Carousel,
  Item,
  Caption,
  Button,
  Accordion,
  Navbar,
  Brand,
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  Nav,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import slide1 from "../img/slide1.png";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";
import gold from "../img/goldloan.jpg";
import personal from "../img/personal-loan.jpg";
import home from "../img/home.jpg";

const MyHome = () => {
  return (
    <>
      {" "}
      <Container className="myhome_navbar">
        <Navbar.Brand className="myhome_logo">
          {" "}
          <b> My Banking</b>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            User Login
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin">Admin Login</Nav.Link>
          <Nav.Link as={Link} to="/ContactUsForm">ContactUs</Nav.Link>
        </Nav>
      </Container>
      <Carousel className="mybody1">
        <Carousel.Item>
          <img className="imgtxt" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="emptytxt">Click Here To👇</h3>
            <Link style={{ backgroundColor: "transparent" }} to="/ApplyLoan">
              {" "}
              <Button variant="primary" className="slide_btn">
                Learn more
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="imgtxt" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="emptytxt">Click Here To👇</h3>
            <Link style={{ backgroundColor: "transparent" }} to="/Home">
              {" "}
              <Button variant="primary" className="slide_btn">
                Learn more
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="imgtxt" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="emptytxt">Click Here To👇</h3>
            <Link style={{ backgroundColor: "transparent" }} to="/ApplyLoan">
              {" "}
              <Button variant="primary" className="slide_btn">
                Learn more
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="my_container">
        <center style={{ fontSize: "30px", marginBottom: "2%" }}>
          All types of Loan Available Now
        </center>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="my_home_card">
              <Card.Img
                style={{ width: "18rem", height: "12rem" }}
                variant="top"
                src={gold}
              />
              <Card.Body className="card_body_home">
                <Card.Title style={{ backgroundColor: "transparent" }}>
                  {" "}
                  <b style={{ backgroundColor: "transparent" }}>
                    Gold Loan
                  </b>{" "}
                </Card.Title>
                <Card.Text style={{ backgroundColor: "transparent" }}>
                  Gold Loan is offered with loan amount up to Rs.50 lakh and
                  interest rate going up to 7.30% p.a. The repayment tenure is
                  up to 3 years with processing fee charged at 0.50% of the loan
                  amount.
                </Card.Text>
                <br />
                <Button className="card-btn" variant="primary">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="my_home_card">
              <Card.Img
                style={{ width: "18rem", height: "12rem" }}
                variant="top"
                src={personal}
              />
              <Card.Body className="card_body_home">
                <Card.Title style={{ backgroundColor: "transparent" }}>
                  {" "}
                  <b style={{ backgroundColor: "transparent" }}>
                    Personal Loan
                  </b>{" "}
                </Card.Title>
                <Card.Text style={{ backgroundColor: "transparent" }}>
                  personal loans at interest rates starting at 9.60% p.a. with
                  tenures of up to 7 years. The loan amount ranges from
                  Rs.25,000 to Rs.20 lakh depending on your eligibility. The
                  processing fee ranges up to 1.5% of the loan amount.
                </Card.Text>
                <Button className="card-btn" variant="primary">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="my_home_card">
              <Card.Img
                style={{ width: "18rem", height: "12rem" }}
                variant="top"
                src={home}
              />
              <Card.Body className="card_body_home">
                <Card.Title style={{ backgroundColor: "transparent" }}>
                  {" "}
                  <b style={{ backgroundColor: "transparent" }}>
                    Home Loan
                  </b>{" "}
                </Card.Title>
                <Card.Text style={{ backgroundColor: "transparent" }}>
                  The loan tenure can be extended up to 30 years, ensuring a
                  comfortable repayment period. The processing fee on these
                  loans is 0.35% of the loan amount (Min. Rs.2,000; Max.
                  Rs.10,000) plus applicable taxes.
                </Card.Text>
                <Button className="card-btn" variant="primary">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <center style={{ fontSize: "30px", marginBottom: "2%" }}>
        Frequently Asked Questions
      </center>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Whats is Mutual Fund Investments</Accordion.Header>
          <Accordion.Body>
            Mutual funds give you the ability to easily invest in increasingly
            complicated financial markets. Mutual Funds could be Equity funds,
            Debt funds, floating rate debt or balanced funds. A large part of
            the success of mutual funds is also the advantages they offer in
            terms of diversification, professional management and liquidity.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            how to Get an Instant Personal Loan in Minutes!
          </Accordion.Header>
          <Accordion.Body>
            Our Bank personal loans offer complete transparency and simplicity.
            The unique and customised personal loan offering includes instant
            online application. Fullerton provides personal loans instantly and
            the process is totally paperless. You can apply online with our
            easy-to-use online application. You can get the loan credited in
            your account shortly after loan approval.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How much money do you get from a reverse mortgage?
          </Accordion.Header>
          <Accordion.Body>
            The amount of money you can borrow depends on how much home equity
            you have available. You typically cannot use more than 80% of your
            home's equity based on its appraised value. As of 2018, the maximum
            amount anyone can be paid from a reverse mortgage is $679,650.
            However, most people will be paid much less.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How much home loan can I get on 23000 salary?
          </Accordion.Header>
          <Accordion.Body>
            Lenders will assess the personal loan amount according to your
            monthly salary of INR 23,000. With this income, you can pay an EMI
            of around 50 percent of your monthly income which is INR 11,500.
            Based on this, you can get a maximum loan of INR 4 lakh for a period
            of 5 years at an interest rate of 14 percent per annum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <center style={{ fontSize: "30px", marginBottom: "2%" }}>
        Types of Banking Services
      </center>
      <Tabs
        defaultActiveKey="Online Banking"
        id="uncontrolled-tab-example"
        className="mb-3"
        className="my_tabs"
      >
        <Tab eventKey="MobileBanking" title="MobileBanking">
          <h3>
            We are happy to bring to you our all new MobileBanking App. It has
            been designed for you, by us, keeping you in mind, to make banking
            through your mobile simple and convenient. Just like it would be for
            any other favourite app you use on your mobile. So that, you can now
          </h3>
        </Tab>
        <Tab eventKey="WhatsApp Banking" title="WhatsApp Banking">
          <h3>
            Bank is now available 24/7 x 365 days for accessing information on
            our latest offers and answering your queries on our products. Save
            70659 70659 to your contacts on WhatsApp and say "Hi" in the message
            window
          </h3>
        </Tab>
        <Tab eventKey="Online Banking" title="Online Banking">
          <h3>
            Your bank is always just a few clicks away. Make over 200 important
            transactions without stepping out with Bank's online solutions.
            Transfer money, pay utility and credit card bills, get statements on
            email and view your loan account easily and conveniently. Bank's
            Online Banking is secure, fast, and convenient
          </h3>
        </Tab>
        <Tab eventKey="Phone Banking" title="Phone Banking">
          <h3>
            Perform a wide range of transactions in your Our Bank account
            easily, quickly and conveniently over your phone. Our PhoneBanking
            services put the bank in your hand. Manage your Account, check your
            Demat balance. You can access your account by making a call, through
            a MobileBanking app or via your mobile browser.
          </h3>
        </Tab>
        <Tab eventKey="Watch Banking" title="Watch Banking">
          <h3>
            Access your bank account, locate an ATM, recharge your prepaid
            mobile, and more with a flick of your wrist - with Our Bank's
            WatchBanking. This revolutionary way to bank from Our Bank is
            available for the first time in India. WatchBanking is available on
            an Apple Watch, exclusively for Our Bank accountholders.
          </h3>
        </Tab>
        <Tab eventKey="Social Media Banking" title="Social Media Banking">
          <h3>
            It is that banks are using social media effectively in
            product/service delivery and marketing activities. Learn more in:
            New Generation Distribution Channels and Customer Experience Used in
            Marketing Financial Products and Services in Digital Transformation.
          </h3>
        </Tab>
      </Tabs>
    </>
  );
};

export default MyHome;
