import { Box, Button, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  p: 4,
  flex: 1,
  flexDirection: "center",
};

const Login = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [teacherOpen, setTeacherOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  return (
    <>
      <Box sx={style}>
        <Button
          sx={{ display: "grid", justifyItems: "flex-end", width: 20 }}
          variant="contained"
          color="error"
          href="/"
        >
          X
        </Button>

        {/* Class Coordinator Login */}
        <div>
          <Box>
            <Button
              sx={{ color: "#fff", display: { lg: "block", xs: "block" } }}
              onClick={() => setAdminOpen(true)}
            >
              <Typography variant="h6" color={"#000"}>
                Class Coordinator
              </Typography>
            </Button>
            <Modal
              className="MuiModal-root"
              open={adminOpen}
              onClose={() => setAdminOpen(false)}
            >
              <AdminLogin />
            </Modal>
          </Box>
        </div>

        {/* Teacher Login */}
        <div>
          <Box>
            <Button
              sx={{ color: "#fff", display: { lg: "block", xs: "block" } }}
              onClick={() => setTeacherOpen(true)}
            >
              <Typography variant="h6" color={"#000"}>
                Teacher
              </Typography>
            </Button>
            <Modal
              className="MuiModal-root"
              open={teacherOpen}
              onClose={() => setTeacherOpen(false)}
            >
              <TeacherLogin />
            </Modal>
          </Box>
        </div>

        {/* Student Login */}
        <div>
          <Box>
            <Button
              sx={{ color: "#fff", display: { lg: "block", xs: "block" } }}
              onClick={() => setStudentOpen(true)}
            >
              <Typography variant="h6" color={"#000"}>
                Student
              </Typography>
            </Button>
            <Modal
              className="MuiModal-root"
              open={studentOpen}
              onClose={() => setStudentOpen(false)}
            >
              <StudentLogin />
            </Modal>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Login;
