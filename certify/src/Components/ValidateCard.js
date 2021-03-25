import React from "react";
import { Card } from "react-bootstrap";

export default function ValidateCard({ recipient }) {
  if (recipient.Event) {
    return (
      <Card className="card row info-card">
        <div className="col-md banner-img">
          {recipient.Event.banner ? (
            <img src={recipient.Event.banner} alt={recipient.Event.title} />
          ) : null}
        </div>
        <div className="col-md card-desc">
          <thead>
            <tr className="card-col">
              <td>
                <p>Name</p>
              </td>
              <td>
                <p>Event Name</p>
              </td>
              <td>
                <p>Certificate Number</p>
              </td>
              <td>
                <p>Organizer</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="card-col">
              <td className="bolder">
                <p>{recipient.name}</p>
              </td>
              <td className="bolder">
                <p>{recipient.Event.title}</p>
              </td>
              <td className="bolder">
                <p>{recipient.certificateNumber}</p>
              </td>
              <td className="bolder">
                <p>{recipient.Event.Organizer.name}</p>
              </td>
            </tr>
          </tbody>
        </div>
      </Card>
    );
  } else {
    return <p>Loading...</p>;
  }
}
