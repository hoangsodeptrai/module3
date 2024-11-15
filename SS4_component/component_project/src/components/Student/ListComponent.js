import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";



class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <>
      <table className="table table-dark">
     <thead>
       <tr>
         <td>STT</td>
         <td>ID</td>
         <td>Name</td>
         <td>Address</td>
         <td></td>
       </tr>
     </thead>
     <tbody>
       {this.props.list.map((e, i) => (
         <tr key={e.id}>
           <td>{i + 1}</td>
           <td>{e.id}</td>
           <td>{e.name}</td>
           <td>{e.address}</td>
           <td>
             <button className="btn btn-sm btn-danger">Delete</button>
           </td>
         </tr>
       ))}
     </tbody>
   </table>
      
      </>
    );
  }
}
export default ListComponent;
