import React, { useState } from "react";
import axios from 'axios'
import Papa from 'papaparse'

import { Form, Button, Container, input } from "react-bootstrap";
import RecipientRow from "../Components/RecipientRow"

export default function Recipients() {
  const [showAdd, setShowAdd] = useState(false)
  const [input, setInput] = useState(null)

  const clickShowAdd = (e) => {
    e.preventDefault()
    setShowAdd(true)
  }

  const clickCloseAdd = (e) => {
    e.preventDefault()
    setShowAdd(false)
  }

  const getFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      complete: function(results, _) {
        setInput(results.data)
        console.log(results.data)
      }
    })
  }

  const uploadFile = (e) => {
    e.preventDefault()
    axios({
      // url: `${baseUrl}/events`,
      method: 'POST',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: input
    })
  }

  return (
  <div className="recipient">
    <div className="container">
      <div className="upload-cont card">
        <Form action="">
            <input type="file" onChange={(e) => getFile(e)} accept=".csv" />
          <button onClick={(e) => uploadFile(e)} className="btn btn-primary">Upload file</button>
        </Form>
      </div>
      <div className="recipient-tab d-flex justify-content-center flex-column">
        {
          !showAdd?
          <a onClick={(e) => clickShowAdd(e)} className="btn btn-primary">
            <i className="bi bi-plus-circle-fill mx-2"></i>
            Add recipient
          </a>:
          null
        }
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
            <RecipientRow />
            <RecipientRow />
            <RecipientRow />
            {
              showAdd?
              <tr>
                <td><input type="text" className="form-control form-control-sm" placeholder="Name" /></td>
                <td><input type="text" className="form-control form-control-sm" placeholder="Role" /></td>
                <td><input type="email" className="form-control form-control-sm" placeholder="mail@mail.com" /></td>
                <td><input type="text" className="form-control form-control-sm" placeholder="Cert. no." /></td>
                <td></td>
                <td>
                  <div className="action-btn">
                    <a href="#"><i style={{color: '#1265D7'}} className="bi bi-check-circle-fill"></i></a>
                    <a onClick={(e) => clickCloseAdd(e)}><i style={{color: 'red'}}  className="bi bi-x-circle-fill"></i></a>
                  </div>
                </td>
              </tr>:
              null
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
