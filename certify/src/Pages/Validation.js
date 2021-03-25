import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";
import { ValidateCard } from "../Components";
import { useParams } from "react-router-dom";
import img from "../assets/validate.png";

export default function Validation() {
  const recipient = useSelector((state) => state.recipient.recipient);
  const dispatch = useDispatch();
  const { recipientId } = useParams();

  useEffect(() => {
    dispatch(
      allActions.recipient.getRecipient({
        recipientId,
        access_token: localStorage.access_token,
      })
    );
  }, [dispatch]);

  return (
    <section style={{ position: "relative" }} className="validation-cont">
      <ValidateCard recipient={recipient} />
    </section>
  );
}
