import React from "react";

const City = (props) => {
  const { name } = props;
  return <option value={name}>{name}</option>;
};

export default City;
