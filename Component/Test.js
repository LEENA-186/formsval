import React, { useContext } from "react";
import { TransactionHistory } from "../Context";
import {Pagination ,Button}from "react-bootstrap";
import { Pie  } from "react-chartjs-2";
import { Chart,registerables } from "chart.js";
import jsPDF from "jspdf";
Chart.register(...registerables);

const Test = () => {

  const { phone } = useContext(TransactionHistory);
  const { upi } = useContext(TransactionHistory);
  const { bank } = useContext(TransactionHistory);
 
  console.log("phone", phone[0].history.length);
  console.log("upi", upi[0].upihistory.length);
  console.log("bank", bank[0].bankhistory.length);

let active = 2;
let items = [];
// items.push(phone[0])
// console.log('items',items);

const data = {
  labels: [
    'phone ',
    'Bank',
    'upi'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [phone[0].history.length, bank[0].bankhistory.length, upi[0].upihistory.length],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const downloedPdf=()=>{
  const doc = new jsPDF();
  doc.text(phone[0], 10, 10);
  doc.save('a4.pdf');

}
  return (
    <>
   
      <div> {phone[0].history.length||upi[0].upihistory.length||bank[0].bankhistory.length>0 ? 
      <>
      <Button onClick={downloedPdf}>download pdf</Button>
       <div> 
          {phone[0].history.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>Phone banking</p>
                <p>To-Name: {item.name}</p>
                <p>To-PhoneNumber: {item.phone}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div>
        <div>
          {upi[0].upihistory.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>UPI banking</p>
                <p>To-Name: {item.name}</p>
                <p>UPI-ID: {item.upi}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div> 
        
        <div>
          {bank[0].bankhistory.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>Bank banking</p>
                <p>To-Name: {item.holderName}</p>
                <p>Acc.NO: {item.accNo}</p>
                <p>Branch: {item.branch}</p>
                <p>IFSC: {item.ifsc}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div> </>: <h1 className="fs-1 text text-center mt-5" >Please make some Transaction </h1> }</div>
       
        <Pagination size="lg">{items}</Pagination>
        <div className="chart-js">
        <Pie data={data} />
        </div>
    </>
  );
};

export default Test;
