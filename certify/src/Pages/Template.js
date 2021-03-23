import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"

import allAction from "../Store/Actions";

import { Form, Button, Container, input } from "react-bootstrap";
import RecipientRow from "../Components/RecipientRow"

export default function Template() {
  const [input, setInput] = useState(null)

  const dispatch = useDispatch()
  const { eventId } = useParams()

  const getFile = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    setInput(file)
  }

  const uploadFile = async (e) => {
    try {
      e.preventDefault()
      console.log(input)

      const formdata = new FormData()
      formdata.append('file', input)

      await dispatch(
        allAction.event.uploadTemplate({
          data: formdata,
          access_token: localStorage.access_token,
          eventId
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <div className="template">
    <div className="container">
      <div className="template-cont d-flex justify-content-center align-items-center card">
        <h4>Upload your template</h4>
        <Form className="mt-5">
          <input type="file" onChange={(e) => getFile(e)} accept=".ppt,.pptx" />
          <button onClick={(e) => uploadFile(e)} className="btn btn-primary">Upload file</button>
        </Form>
      </div>
    </div>
  </div>
  )
}
