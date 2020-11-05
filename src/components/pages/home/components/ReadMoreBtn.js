import React from "react";
import { useHistory, Link } from "react-router-dom";

const ReadMoreBtn = ({ children, link, ...props }) => {
  const history = useHistory();
  return (
    <div className="orange_link" {...props}>
      <Link
        className="orange_link"
        style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}
        to={link}
      >
        {children}
        <div style={{marginTop: 0}} className="arrow-min" />
      </Link>
    </div>
  );
};

export default ReadMoreBtn;
