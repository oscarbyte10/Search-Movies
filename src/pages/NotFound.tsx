import React from "react";
import ButtonBackToHome from "../components/ButtonBackToHome";

const NotFound: React.FC = () => (
  <>
    <h1 className="title">404!</h1>
    <h2 className="subtitle">This page not exists</h2>
    <ButtonBackToHome />
  </>
);

export default NotFound;
