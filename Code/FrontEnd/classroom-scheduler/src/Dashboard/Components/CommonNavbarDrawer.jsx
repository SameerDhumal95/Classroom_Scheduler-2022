import {
  Avatar,
  Drawer,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { AdminNavbarData } from "./CommonHeaderData";
import MenuIcon from "@mui/icons-material/Menu";

const IconStyle = {};

const CommonNavbarDrawer = () => {
  const [data, setData] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(255, 250, 231)",
            width: "20%",
            alignContent:'center',
            paddingTop:'60px'
          },
        }}
        open={data}
        onClose={() => setData(false)}
      >
        <List>
          {AdminNavbarData.map((link, val) => (
            <ListItemButton
              href={link.link}
              key={val}
              divider
              onClick={() => setData(!data)}
            >
              <InputAdornment position="start">
              {link.icon}
            </InputAdornment>
              <ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "18px",
                  }}
                >
                  {link.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          color: "white",
        }}
        onClick={() => setData(!data)}
      >
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default CommonNavbarDrawer;
