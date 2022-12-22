import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Modal,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { TeacherHeaderData } from "../Components/CommonHeaderData";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import TeacherNavbarDrawer from "./TeacherNavbarDrawer";
import PersonIcon from "@mui/icons-material/Person";
import MouseOverPopover from "../../components/MouseOverPopover";
import CalenderPopover from "../../components/CalenderPopover";

const TeacherHeader = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const data = JSON.parse(sessionStorage.getItem("teacher"));
  console.log(data);

  return (
    <>
      <div id="header">
        <AppBar
          sx={{
            background: "rgb(255, 174, 109)",
          }}
        >
          <Toolbar variant="dense">
            {isMatch ? (
              <>
                <Typography>
                  <ImportContactsIcon />
                </Typography>
                <TeacherNavbarDrawer />
              </>
            ) : (
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={1}>
                  <TeacherNavbarDrawer />
                </Grid>
                {/* <Grid item xs={1} /> */}
                <Grid
                  item
                  xs={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>
                    <ImportContactsIcon sx={{ fontSize: "36px" }} />
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex">
                  <Tabs
                    indicatorColor="secondary"
                    textColor="white"
                    value={value}
                    onChange={(e, val) => setValue(val)}
                  >
                    <CalenderPopover />
                    {/* <TodoPopover /> */}
                  </Tabs>
                </Grid>
                <Grid item xs={1}>
                  <Box display="flex">
                    {/* <Button variant="contained" onClick={()=>setOpen(true)}>Profile</Button> */}
                    <MouseOverPopover first_name={data.first_name} />
                  </Box>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TeacherHeader;
