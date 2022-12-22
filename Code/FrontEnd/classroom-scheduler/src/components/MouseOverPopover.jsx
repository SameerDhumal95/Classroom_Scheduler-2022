import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Link,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import TeacherPhoto from "../Assets/images/TeacherPhoto.png";

export default function MouseOverPopover(props) {
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
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}> */}
      <IconButton onClick={handleClick}>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>
      {/* </Button> */}
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
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Card sx={{ width: 250, height: 120 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Avatar
                    alt="Remy Sharp"
                    src={TeacherPhoto}
                    sx={{ width: 56, height: 56 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Typography variant="body2">&#128075; Hi, {props.first_name}</Typography>
                  </Button>
                </CardActions>
              </div>
            </Card>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LogoutIcon />
              </Avatar>
            </ListItemAvatar>
           <Link href="/SignOut" underline="none">
            <ListItemText primary="Signout" />
            </Link>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
