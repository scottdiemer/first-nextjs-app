import React from "react";

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2>
        <span className="title">{title}</span>
        {subtitle !== "" ? <span className="subtitle">{subtitle}</span> : ""}
      </h2>
    </div>
  );
};

export default Title;
