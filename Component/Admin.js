import React from "react";
import './gpay.css'
import { Link } from 'react-router-dom';
import {  Row, Col } from "react-bootstrap";
import I18Example from "./AdminDashboard/i18/I18Example";
import Admindashboard from "./AdminDashboard/Admindashboard";
import wmt from "../img/wmt.png";
import repansys from "../img/repansys.png";
import leave from "../img/leave.png";
import { useTranslation, withTranslation} from 'react-i18next';
const Admin = (lang) => {
  // console.log(lang.props, 'props')
  //   const { t } = lang.props;
  console.log(lang.props, 'props')
    const { t } = useTranslation();
  
  return (
    <div>
      
      <Row className="bor">
      
        <Col>
      
          <Link to='/wmt'> <img className="img" src={wmt} />{" "}</Link>
          <h1 className="text-center text-uppercase">{t('home.Work Management Tracker')}</h1>
        </Col>
        <Col>
        <Link to='/leave'> <img className="img" src={leave} />{" "}</Link> 
        <h1 className="text-center text-uppercase">{t('home.Apply Leave')}</h1>
        </Col>
        <Col>
        <Link to='/ReportAnalysis'> <img  className="img" src={repansys} /></Link>
        <h1 className="text-center text-uppercase">{t('home.Report Analysis')}</h1>
        </Col>
      </Row>
      
{/* <Admindashboard/> */}
<I18Example/>
       <div>

       <Link to='/check'><button className="mainbtn">{t('home.CheckIn')}</button></Link>  
       {/* <Link to='/createaccount'><button className="mainbtn1">Create Account</button></Link>  */}
      </div>
    
      </div>
      
  );
};

export default withTranslation()(Admin);
