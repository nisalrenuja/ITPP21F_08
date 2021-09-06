import React, { Component } from "react";
import axios from "axios";
import "./Employees.css";

export default class AdminTab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: []
    };
  }
  componentDidMount() {
    this.retrieveStaff();
  }
  retrieveStaff() {
    axios.get("http://localhost:5000/staffs").then(res => {
      if (res.data.success) {
        this.setState({
          staff: res.data.existingStaffs,
          staffcount: res.data.staffCount
        });
        console.log(this.state.staff);
        console.log(this.state.staffcount);
      }
    });
  }
  onDelete = id => {
    axios.delete(`http://localhost:5000/staffs/delete/${id}`).then(res => {
      alert("Deleted Succeefully");
      this.retrieveStaff();
    });
  };

  filterData(staffs, searchKey) {
    const result = staffs.filter(staffs =>
      staffs.name.toLowerCase().includes(searchKey)
    );
    this.setState({ staff: result });
  }

  handleSearchArea = e => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/staffs").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingStaffs, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div class="main">
          <h2 class="head1">Employees</h2>
          <hr class="line1"></hr>
          <a href="/AllEmployees">
            <button class="div1">
              <p class="txt1">Employee List</p>
            </button>
          </a>
          <a href="/EmployeePoints">
            <button class="div2">
              <p class="txt2">Employee Points</p>
            </button>
          </a>
          <div class="div3">
            <p class="txt3">Filter by</p>
            <input
              class="select1"
              type="text"
              onChange={this.handleSearchArea}
            />
            <a className="btn btn-info search">
              <i className="fas fa-search"></i>&nbsp;Search
            </a>
          </div>
          <h2 class="tah">Total Employees ( {this.state.staffcount} )</h2>
          <table className="table table-hover table1">
            <thead class="thead">
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Email</th>
                <th scope="col">Joined Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="tbody1">
              {this.state.staff.map((staffs, index) => (
                <tr key={index}>
                  <td>
                    <a href={``} style={{ textDecoration: "none" }}>
                      {staffs.empno}
                    </a>
                  </td>
                  <td>{staffs.name}</td>
                  <td>{staffs.email}</td>
                  <td>{staffs.commencement_date}</td>
                  <td>{staffs.status}</td>
                  <td>
                    <a href={``}>
                      <i class="far fa-eye"></i>
                    </a>
                    &nbsp; &nbsp;
                    <a href={``}>
                      <i class="far fa-edit"></i>
                    </a>
                    &nbsp; &nbsp;
                    <a href="#" onClick={() => this.onDelete(staffs._id)}>
                      <i class="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            &nbsp;
            <tfoot class="tfoot">
              <a href="/createassignment">
                <i class="fas fa-plus"></i>&nbsp;New Employee
              </a>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
