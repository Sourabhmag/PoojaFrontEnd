import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [loanData, setloanData] = useState([]);
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    // Fetcing all data from db
    axios
      .get("http://localhost:4000/app/getData")
      .then((res) => {
        setloanData(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const agentHandler = () => {
    var x = [];
    loanData.map((i) => {
      console.log("i = " + JSON.stringify(i));
      return x.push(i.collectionAgent);
    });
    setAgent(
      x.filter((item, index, array) => {
        return array.indexOf(item) === index;
      })
    );

    console.log("Agents = " + agent);
    console.log("val of x = " + x);
  };

  return (
    <>
      <h1 className="cell"> Customer Installment Chart</h1>
      <div className="main">
        <div>
          <NavLink to="/loan">Add Customer</NavLink>
          {loanData.map((customer) => (
            <div key={Math.random()}>
              <NavLink
                to={{
                  pathname: "/pooja",
                  loanData: {
                    customerloanData: customer,
                  },
                }}
              >
                {customer.customerName}
              </NavLink>
              <br />
            </div>
          ))}
        </div>
        <button id="btn" onClick={agentHandler}>
          Show Agent
        </button>
               
        <div>
          
          {agent.map((agentData, index) => (
            <NavLink
              key = {index}
              to={{
                pathname: "/agent",
                loanData: {
                  customerloanData: agentData,
                },
              }}
            >
              <li>{agentData}</li>
              <div>
                {agentData.agentName}
                <br />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
export default Menu;
