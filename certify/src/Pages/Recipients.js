import React from "react";

import { Form, Button, Container, input } from "react-bootstrap";
import { NavbarHome, NavbarDashboard, NavbarInformation } from "../Components";

export default function Recipients() {


  return (
  
  <div className="recipient full-height">
    {/* <NavbarDashboard />
    <NavbarInformation /> */}
    <div className="container">
      <div className="upload-cont card">
        <Form action="">
            <input type="file" accept=".xls,.xlsx,.csv" />
          <button className="btn btn-primary">Upload file</button>
        </Form>
      </div>
      <div className="recipient-tab d-flex justify-content-center flex-column">
        <Button className="btn btn-primary">
          <i className="bi bi-plus-circle-fill mx-2"></i>
          Add recipient
        </Button>
        <table className="table mt-3">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">No. Certificate</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark Otto</td>
              <td>Guest</td>
              <td>mail@mail.com</td>
              <td>cert-01/event/2021</td>
              <td>Not yet sent</td>
              <td>
                <div className="action-btn">
                  <a href="#"><i style={{color: '#1265D7'}} className="bi bi-pencil-square"></i></a>
                  <a href="#"><i style={{color: 'red'}} className="bi bi-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mark Otto</td>
              <td>Guest</td>
              <td>mail@mail.com</td>
              <td>cert-01/event/2021</td>
              <td>Not yet sent</td>
              <td>
                <div className="action-btn">
                  <a href="#"><i style={{color: '#1265D7'}} className="bi bi-pencil-square"></i></a>
                  <a href="#"><i style={{color: 'red'}}  className="bi bi-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mark Otto</td>
              <td>Guest</td>
              <td>mail@mail.com</td>
              <td>cert-01/event/2021</td>
              <td>Not yet sent</td>
              <td>
                <div className="action-btn">
                  <a href="#"><i style={{color: '#1265D7'}} className="bi bi-pencil-square"></i></a>
                  <a href="#"><i style={{color: 'red'}} className="bi bi-trash"></i></a>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="text" className="form-control form-control-sm" placeholder="Name" /></td>
              <td><input type="text" className="form-control form-control-sm" placeholder="Role" /></td>
              <td><input type="email" className="form-control form-control-sm" placeholder="mail@mail.com" /></td>
              <td><input type="text" className="form-control form-control-sm" placeholder="Cert. no." /></td>
              <td></td>
              <td>
                <div className="action-btn">
                  <a href="#"><i style={{color: '#1265D7'}} className="bi bi-check-circle-fill"></i></a>
                  <a href="#"><i style={{color: 'red'}}  className="bi bi-x-circle-fill"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
