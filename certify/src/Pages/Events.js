import React, { useEffect } from "react";
import { EventCard } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const loading = useSelector((state) => state.event.loading);

  useEffect(() => {
    dispatch(allActions.event.getEvents(localStorage.access_token));
  }, []);

  if (!loading) {
    return (
      <div>
        <h4 style={{ marginLeft: 50, marginTop: 30 }}>Your events</h4>
        {events.Events &&
          events.Events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                participants={events.Events.length}
                title={event.title}
                date={event.date}
                type={event.type}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <div>
        <p>loading..</p>
      </div>
    );
  }
}
