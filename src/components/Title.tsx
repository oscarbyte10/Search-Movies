import React from "react";

interface Props {
  children: string;
}

const Title: React.FC<Props> = ({ children }) => (
  <h1 className="title">{children}</h1>
);

export default Title;
