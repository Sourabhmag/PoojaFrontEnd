import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Loan() {
  const [customerName, setCustomerName] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [paymentPeriod, setPaymentPeriod] = useState();
  const [foreClosurePayment, setForeClosurePayment] = useState();
  const [paymentCycle, setPaymentCycle] = useState(1);
  const [collectionAgent, setCollectionAgent] = useState("");

  const submitLoginHandler = () => {
    const loanDetail = {
      customerName: customerName,
      loanAmount: loanAmount,
      paymentPeriod: paymentPeriod,
      emiPayment: Math.trunc(loanAmount / paymentPeriod),
      foreClosurePayment: foreClosurePayment,
      collectionAgent: collectionAgent,
      paymentCycle: paymentCycle,
    };
    axios
      .post("http://localhost:4000/app/postData", loanDetail)
      .then((response) => console.log(response.data));
  };

  return (
    <div className="login">
      <br />
      <br />
      <NavLink to="/">Dashboard</NavLink>
      <br />
      <br />
      <form className="loginForm">
        <div>
          <label>Customer's username :</label>
          <input
            type="text"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Payment Period:</label>
          <input
            type="number"
            name="paymentPeriod"
            value={paymentPeriod}
            onChange={(e) => setPaymentPeriod(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>EMIPayment:</label>
          <input
            type="number"
            name="emiPayment"
            value={Math.trunc(loanAmount / paymentPeriod)}
          />
        </div>
        <br />

        <div>
          <label>FOREClosure Payment:</label>
          <input
            type="number"
            name="foreClosurePayment"
            value={foreClosurePayment}
            onChange={(e) => setForeClosurePayment(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Collection Agent:</label>
          <input
            type="text"
            name="collectionAgent"
            value={collectionAgent}
            onChange={(e) => setCollectionAgent(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Payment Cycle:</label>
          <input
            type="number"
            name="paymentCycle"
            value={paymentCycle}
            onChange={(e) => setPaymentCycle(e.target.value)}
          />
        </div>
        <br />

        <div>
          <button onClick={submitLoginHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Loan;
