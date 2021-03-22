import React, { useState } from "react";

export default function RecipientRow () {
  const [showEdit, setShowEdit] = useState(false)

  const clickShowEdit = (e) => {
    e.preventDefault()
    setShowEdit(true)
  }

  const clickCloseEdit = (e) => {
    e.preventDefault()
    setShowEdit(false)
  }

  return (
    <tr>
      { 
        showEdit?
        <>
          <td><input type="text" className="form-control form-control-sm" placeholder="Name" /></td>
          <td><input type="text" className="form-control form-control-sm" placeholder="Role" /></td>
          <td><input type="email" className="form-control form-control-sm" placeholder="mail@mail.com" /></td>
          <td><input type="text" className="form-control form-control-sm" placeholder="Cert. no." /></td>
          <td>Not yet sent</td>
          <td>
            <div className="action-btn">
              <a href="#"><i style={{color: '#1265D7'}} className="bi bi-check-circle-fill"></i></a>
              <a onClick={(e) => clickCloseEdit(e)}><i style={{color: 'red'}}  className="bi bi-x-circle-fill"></i></a>
            </div>
          </td>
        </>:
        <>
          <td>Mark Otto</td>
          <td>Guest</td>
          <td>mail@mail.com</td>
          <td>cert-01/event/2021</td>
          <td>Not yet sent</td>
          <td>
            <div className="action-btn">
              <a onClick={(e) => clickShowEdit(e)}><i style={{color: '#1265D7'}} className="bi bi-pencil-square"></i></a>
              <a href="#"><i style={{color: 'red'}} className="bi bi-trash"></i></a>
            </div>
          </td>
        </>
      }
    </tr>
  )
}