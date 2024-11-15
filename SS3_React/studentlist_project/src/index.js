import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

const studenList = [
  {
    id: 1,
    name: "Hoang",
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Hoang",
    address: "Ha Noi",
  },
  {
    id: 3,
    name: "Hoang",
    address: "Ha Noi",
  },
];
const table = (
  <table>
    <thead>
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Address</td>
    </tr>
    </thead>
    <tbody>
    {studenList.map((e, i) => (
      <tr key={e.id} >
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.address}</td>
      </tr>
    ))}
    </tbody>
    
  </table>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  table
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
