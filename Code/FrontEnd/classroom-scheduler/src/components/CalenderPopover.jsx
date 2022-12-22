import * as React from "react";
import Popover from "@mui/material/Popover";
import { Button, Typography } from "@mui/material";

import CustomDay from "./CustomDay";

export default function CalenderPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        color="info"
      >
        {/* <Tab onClick={handleClick} color="white"> */}
        <Typography variant="h6" color={"white"}>
          Calender
        </Typography>
        {/* </Tab>  */}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <CustomDay />
      </Popover>
    </div>
  );
}
