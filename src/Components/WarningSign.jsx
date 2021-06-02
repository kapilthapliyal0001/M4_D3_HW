import React from "react";
import {Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WarningSign = ({text, color}) => {
  return <Alert variant={color}>{text}</Alert>;
};

export default WarningSign;
