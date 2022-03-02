import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import Data from './Data.json'
const ReportAnalysis = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    console.log(Data);
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/users",{Data}
      );
      console.log("data", data.data.Data);
      setProduct(data.data.Data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <> <h1 className="report">Report Analysis</h1>
      <div className="report_input">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
          </div>
        <Table striped bordered hover className="report_data">
          <thead>
            <tr>
              {/* <th>Id</th>
              <th>First Name</th>
              <th>Username</th>
              <th>email</th>
              <th>address</th>
              <th>street</th>
              <th>zipcode</th>
              <th>phone</th>
              <th>website</th>
              <th>company Name</th> */}
              <th>Name</th>
              <th>Age</th>
              <th>Profession</th>
              <th>Salary</th>
              <th>CreditCard</th>
              <th>DebitCard</th>
              <th>Branch</th>
              <th>AccountNumber</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>BankName</th>
              <th>IFSC code</th>
              <th>LoanType</th>
              <th>LoanAmount</th>
              <th>AccountType</th>
              </tr>
          </thead>
          <tbody>
            {product
            .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }else if (
                  item.accountno.toString().includes(search.toString())
                ) {
                  return item;
                }else if (
                  item.branch.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <tr>
                    <td> {item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.profession}</td>
                    <td> {item.salary}</td>
                    <td>{item.creditcard}</td>
                    <td>{item.debitcard}</td>
                    <td>{item.branch}</td>
                    <td> {item.accountno}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.bankname}</td>
                    <td> {item.ifsc}</td>
                    <td>{item.loantype}</td>
                    <td>{item.loanamount}</td>
                    <td>{item.accounttype}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
    
    </>
  );
};

export default ReportAnalysis;
