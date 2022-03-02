import React,{useContext} from 'react'
import { info } from '../userDashBoard/Ccontext';
import { Card ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const ApproveLoan = () => {
  const{loan}=useContext(info);
  console.log(loan);

   return (
    <div>
      Approve Loan
         {loan.map((item)=>(
           <div> 
             <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Requests for Account</Card.Title>
    <Card.Text>{item.firstname}  </Card.Text>
          <Card.Text>{item.lastname}</Card.Text>
          <Card.Text>{item.my_email}</Card.Text> 
            <Card.Text>{item.phone}</Card.Text> 
              <Card.Text>{item.address}</Card.Text>
              <Card.Text>{item.age}</Card.Text> 
            <Card.Text>{item.gender}</Card.Text> 
              <Card.Text>{item.country}</Card.Text>
              <Card.Text>{item.State}</Card.Text>
              <Card.Text>{item.zipcode}</Card.Text> 
              <Card.Text>{item.Nominee}</Card.Text>
              <Card.Text>{item.EmployementType}</Card.Text>
              <Card.Text>{item.BankAccountType}</Card.Text> 
              <Card.Text>{item.LoanType}</Card.Text>
              <Card.Text>{item.Salary}</Card.Text>
              <Card.Text>{item.Amount}</Card.Text>
              <Card.Text>{item.PanNumber}</Card.Text> 
            <Card.Text>{item.AadharNumber}</Card.Text> 
              <Card.Text>{item.termsandconditions}</Card.Text>
     {/* <Button variant="primary">Approve</Button> */}
  {/* <Button variant="primary">decline</Button> */} 
  </Card.Body>
</Card>          
            </div>))
               }
               </div>  
                )
}

export default ApproveLoan

