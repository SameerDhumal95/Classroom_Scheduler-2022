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
} from "@mui/material";
import { HeaderData } from "./HeaderData";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Login from "../Main/Login/Login";

const Header = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMatch);

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
              </>
            ) : (
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={6}>
                  <Typography>
                    <ImportContactsIcon sx={{ fontSize: "36px" }} />
                  </Typography>
                </Grid>
                <Grid item xs={5} display="flex">
                  <Tabs
                    indicatorColor="secondary"
                    textColor="rgb(255, 250, 231)"
                    value={value}
                    onChange={(e, val) => setValue(val)}
                  >
                    {HeaderData.map((link, index) => (
                      <Tab
                        key={index}
                        label={link.title}
                        href={link.link}
                      ></Tab>
                    ))}
                  </Tabs>
                </Grid>
                <Grid item xs={1}>
                  <Box display="flex">
                    <Button
                      variant="contained"
                      onClick={() => setOpen(true)}
                      sx={{
                        background: "rgb(153, 0, 0)",
                        ":hover": { background: "rgb(6, 19, 156)" },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                  <Modal
                    className="MuiModal-root"
                    open={open}
                    onClose={() => setOpen(false)}
                    onBackdropClick
                  >
                    <Box>
                      <Login></Login>
                    </Box>
                  </Modal>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
