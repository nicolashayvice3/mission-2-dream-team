import React, { useState } from "react";
import classNames from "classnames";
import Input from "../elements/Input";
import Button from "../elements/Button";
// import axios from "axios";

const PolicySearch = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setText(text.replace(/[^\w ]/g, " "));
  };

  const handleChange = (e) => {
    setText(e.target.value);
    e.preventDefault();
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm reveal-from-bottom">
        <div className={innerClasses}>
          <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Wanna clean your text from special characters? <br /> Search it{" "}
            <span className="text-color-primary">below</span>.
          </h3>
        </div>
        <Input
          id="query"
          type="search"
          hasIcon="right"
          placeholder="Search our policies"
          onChange={handleChange}
        ></Input>
        <Button color="primary" onClick={handleClick}>
          Search
        </Button>
        <h6>
          {text}
        </h6>
      </div>
    </section>
  );
};

export default PolicySearch;