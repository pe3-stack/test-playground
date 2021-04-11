import React from "react";

import "./NavigationItem.scss";

const navigationItem = ({ link, clicked, children }) => {
  return (
    <li onClick={clicked} className='navigationItem'>
      <a href={link}>
        {children}
      </a>
    </li >
  );
};

export default navigationItem;
