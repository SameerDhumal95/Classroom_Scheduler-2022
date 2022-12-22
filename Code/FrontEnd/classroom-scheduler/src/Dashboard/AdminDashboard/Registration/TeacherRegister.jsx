import React from "react";
import CommonForm from "../../Components/CommonForm";
import {Button, Grid, Paper} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const TeacherRegister=()=>{
    return(
        <>
        <div>
            <Paper sx={{ 
                width: 1500,
                height: 900,
                p:2,
          }}
          elevation={3}
          >
            <CommonForm />
            <Grid container sx={{mt:10,mb:10}}>
                <Grid item lg={6} xs={0} />
                <Grid item lg={3} xs={12}>
                <Button variant="contained" 
                endIcon={<SendIcon />}
                sx={{ml:4}}
                >
                    Send
                </Button>
                </Grid>
                <Grid item lg={6} xs={0} />
            </Grid>
            </Paper>
        </div>
        </>
    )
}

export default TeacherRegister;