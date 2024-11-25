import React from "react";
import StudentsForm from "./StudentForm";
class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "hoàng",
          phone: "9871829",
          email: "ahsidla@gmail.com",
        },
      ],
    };
  }
  createStudents = (students) => {
    //  console.log("asdasdas",students)
    this.setState({
      students: [...this.state.students, students],
    });
  };
  deleteStudents = (index) => {
    console.log("asdasj,dasn");
    this.setState({
      students: [...this.state.students.splice(1)],
    });
  };

  render() {
    return (
      <>
        <StudentsForm onCreateStudents={this.createStudents} />
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>
                  <button onClick={this.deleteStudents}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default StudentsList;
