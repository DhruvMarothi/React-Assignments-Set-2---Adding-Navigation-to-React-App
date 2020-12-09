import React from "react";
import { useLocation } from "react-router-dom";

export default function Location() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}
