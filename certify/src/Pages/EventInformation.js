import React, { useEffect } from "react";

import { InformationCard } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";
import { useParams, useHistory } from "react-router-dom";

export default function EventInformation() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.event);
  const { eventId } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(allActions.organizer.setPage(history.location.pathname));

    dispatch(
      allActions.event.getEvent({
        access_token: localStorage.access_token,
        eventId,
      })
    );
  }, []);

  return (
    <section className="info-cont">
      {event.event ? (
        <InformationCard event={event.event[0]} />
      ) : (
        <p>Loading..</p>
      )}
    </section>
  );
}
