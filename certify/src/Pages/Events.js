import React, { useEffect } from "react";
import { EventCard } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const loading = useSelector((state) => state.event.loading);
  const history = useHistory();

  useEffect(() => {
    dispatch(allActions.organizer.setPage(history.location.pathname));

    if (localStorage.getItem("access_token")) {
      dispatch(allActions.event.getEvents(localStorage.access_token));
    } else {
      history.push("/login");
    }
  }, []);

  if (!loading) {
    return (
      <div className="event-cont" style={{ position: "relative" }}>
        <h3>Your events</h3>

        <div className="card-cont">
        {
          events.Events &&
          events.Events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                participants={event.Recipients.length}
                title={event.title}
                date={event.date}
                type={event.type}
                banner={event.banner}
              />
            );
          })
        }
        </div>
      </div>
    );
  } else {
    return (
      <div className="event-cont">
        <h3>Your events</h3>
        <Spinner
          style={{ position: "absolute", top: "50%", left: "50%" }}
          animation="border"
        />
      </div>
    );
  }
}
