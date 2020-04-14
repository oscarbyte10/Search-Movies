import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const BackButton: React.FC = () => (
  <Link className="button is-info" to="/">
    Back
  </Link>
);

export default BackButton;
