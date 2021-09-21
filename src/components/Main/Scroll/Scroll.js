import React from "react";
import PropTypes from "prop-types";
import css from './Scroll.module.css'
import Button from "../../../../node_modules/react-bootstrap/esm/Button";
const Scroll = ({ to }) => {
  const handleClick = (e) => {
    const element = document.getElementById(to)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    e.preventDefault()
  }
  return (
    <Button
      variant="transparent"
      onClick={handleClick}
      className={`${css.link} ${to === "content" && css.bot}`}>
      <span aria-hidden="true" className={`${css.icon} ${to === "content" ? "carousel-control-next-icon" : css.top}`} />
    </Button>
  );
};

Scroll.propTypes = {
  //
};

export default Scroll;
