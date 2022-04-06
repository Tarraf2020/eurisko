import { ArrowCircleUp } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const style = {
    display: visible ? "inline" : "none",
    width: "50px",
    height: "50px",
    margin: "0 20px 20px 20px",
cursor: 'pointer',
color: 'cyan',
};

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <ArrowCircleUp onClick={scrollToTop} style={style} />
    </Grid>
  );
};

export default ScrollButton;
