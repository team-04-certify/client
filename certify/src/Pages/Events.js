import React from "react";

import { EventCard } from "../Components";

export default function Events() {
  return (
    <div>
      <h4 style={{ marginLeft: 50, marginTop: 30 }}>Your events</h4>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
