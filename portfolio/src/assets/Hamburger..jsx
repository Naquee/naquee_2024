import * as React from "react";
const Hamburger = (props) => (
  <svg
    width="45px"
    height="45px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="hamburgerIconTitle"
    stroke="#000000"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="#000000"
    {...props}
  >
    <title id="hamburgerIconTitle">{"Menu"}</title>
    <path d="M6 7L18 7M6 12L18 12M6 17L18 17" />
  </svg>
);
export default Hamburger;
