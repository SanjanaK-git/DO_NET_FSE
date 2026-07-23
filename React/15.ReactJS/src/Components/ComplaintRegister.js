import React, { Component } from "react";

class ComplaintRegister extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employeeName: "",
      complaint: ""
    };
  }


  handleSubmit = (event) => {

    event.preventDefault();

    let referenceNumber =
      "REF" + Math.floor(Math.random() * 10000);


    alert(
      "Complaint Registered Successfully!\nReference Number: "
      + referenceNumber
    );


    this.setState({
      employeeName: "",
      complaint: ""
    });

  };


  render() {

    return (

      <div>

        <h1>Complaint Registration Form</h1>


        <form onSubmit={this.handleSubmit}>


          <label>
            Employee Name:
          </label>

          <br />

          <input
            type="text"
            value={this.state.employeeName}
            onChange={(e) =>
              this.setState({
                employeeName: e.target.value
              })
            }
          />


          <br /><br />


          <label>
            Complaint:
          </label>

          <br />

          <textarea

            value={this.state.complaint}

            onChange={(e) =>
              this.setState({
                complaint: e.target.value
              })
            }

          />


          <br /><br />


          <button type="submit">
            Submit Complaint
          </button>


        </form>


      </div>

    );

  }

}


export default ComplaintRegister;
