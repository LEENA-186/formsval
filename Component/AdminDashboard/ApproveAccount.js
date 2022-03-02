import React,{useContext} from 'react'
import { data} from '../Myform/context'
import { Card ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const ApproveAccount = () => {
  const{account}=useContext(data);
  console.log(account);

   return (
    <div>
      Approve Account
         {account.map((obj)=>(
           <div> 
             <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Requests for Account</Card.Title>
    <Card.Text>{obj.firstname}  </Card.Text>
          <Card.Text>{obj.lastname}</Card.Text>
          <Card.Text>{obj.my_email}</Card.Text> 
            <Card.Text>{obj.phone}</Card.Text> 
              <Card.Text>{obj.address}</Card.Text>
              <Card.Text>{obj.age}</Card.Text> 
            <Card.Text>{obj.gender}</Card.Text> 
              <Card.Text>{obj.country}</Card.Text>
              <Card.Text>{obj.zipcode}</Card.Text> 
              <Card.Text>{obj.Nominee}</Card.Text>
              <Card.Text>{obj.PanNumber}</Card.Text> 
            <Card.Text>{obj.AadharNumber}</Card.Text> 
              <Card.Text>{obj.termsandconditions}</Card.Text>
     {/* <Button variant="primary">Approve</Button> */}
  {/* <Button variant="primary">decline</Button> */} 
  </Card.Body>
</Card>          
            </div>))
               }
               </div>  
                )
}

export default ApproveAccount
